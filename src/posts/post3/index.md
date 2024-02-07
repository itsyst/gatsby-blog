---
title: Web API In-Memory Caching
date: 2024-02-05
author: Khaled
slug: web-api-in-memory-caching
featureImage: In-memory-caching.png
excerpt: Installera Postgres, skapa databas, lägg till modeller, EF-verktyg, koppla CacheService, skapa kontroller, utför migration.
---

I den här artikeln kommer vi att diskutera In-Memory-cachning med .NET Web API.

Först kommer vi att fokusera på att installera PostgreSQL på vår maskin.

#### Installera Postgres på din maskin

```
brew install postgresql
```

#### Starta och Stoppa Postgres

```
brew services start postgresql
brew services stop postgresql
```

#### Anslut till Postgres

```
psql postgres
```

#### Skapa användare och lösenord så att vi kan använda dem i vår .NET-app

```
CREATE ROLE mohamad WITH LOGIN PASSWORD '12345678';
ALTER ROLE mohamad CREATEDB;
ALTER ROLE mohamad WITH Superuser;
```

#### Skapa en databas

```
create database example_db;
```

#### Bevilja behörighet till databasen

```
GRANT CONNECT ON DATABASE example_db TO khaled_db;
```

#### Installera EF-verktyg

```
dotnet tool install --global dotnet-ef
```

#### Det första steget är att vi behöver skapa vår webapi

```
dotnet new webapi -n "ApiCaching"
```

#### Nu behöver vi lägga till paket så att vi kan använda vår PostgreSQL och EF Core

```
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package System.Runtime.Caching
```

Nu är det dags att lägga till modellerna, för denna provapplikation kommer vi att skapa en app för att lista alla F1-förare. För detta kommer vi att skapa en mapp med namnet Models i rotkatalogen för vår applikation som kommer att innehålla våra modeller.

Inuti modellmappen kommer vi att skapa en ny klass som heter Driver

```
namespace ApiCaching.Models;

public class Driver
{
   public int Id { get; set; }
   public string Name { get; set; } = "";
   public int DriverNumber { get; set; }
   public string Team { get; set; } = "";
}
```

När modellen har skapats är nästa steg att skapa vår databasens db-kontext i rotkatalogen för vår applikation ska vi skapa en ny mapp som heter Data och inuti Data-mappen kommer vi att lägga till klassen AppDbContext

```
namespace ApiCaching.Models;
using ApiCaching.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiCaching.Data;

public class AppDbContext: DbContext
{
   public AppDbContext(DbContextOptions<AppDbContext> options): base(options) {  }

   public DbSet<Driver> Drivers { get; set; }
}
```

Nu behöver vi lägga till anslutningssträngen i appsettings.json

```

"ConnectionStrings": {
    "defaultDbConnection": "User ID =khaled_db;Password=Strong&2Password;Server=localhost;Port=5432;Database=example_db; Integrated Security=true;Pooling=true;",
}
```

Nästa steg är att uppdatera vår program.cs

```
builder.Services.AddEntityFrameworkNpgsql().AddDbContext<AppDbContext>(opt =>
        opt.UseNpgsql(builder.Configuration.GetConnectionString("defaultDbConnection")));
```

När vi har lagt till dessa kan vi göra vår migration

```
dotnet ef migrations add "initial_migration"
dotnet ef database update
```

Nu ska vi skapa ICacheService-gränssnittet och CacheService-klassen för vår cachetjänst.

I rotkatalogen för vår applikation måste vi skapa en mapp som heter tjänster och inne i mappen måste vi skapa följande

ICacheService

```
namespace ApiCaching.Services;

public interface ICacheService
{
    T GetData<T>(string key);

    bool SetData<T>(string key, T value, DateTimeOffset expirationTime);

    object RemoveData(string key);
}
```

CacheService

```
using System.Runtime.Caching;

namespace ApiCaching.Services;

public class CacheService : ICacheService
{
    private ObjectCache _memoryCache = MemoryCache.Default;


    public T GetData<T>(string key)
    {
        try
        {
            T item = (T)_memoryCache.Get(key);

            return item;
        }
        catch (Exception e)
        {
            throw;
        }
    }

    public bool SetData<T>(string key, T value, DateTimeOffset expirationTime)
    {
        var res = true;
        try
        {
            if (!string.IsNullOrEmpty(key))
                _memoryCache.Set(key, value, expirationTime);

            else
                res = false;

            return res;
        }
        catch (Exception e)
        {
            throw;
        }
    }
    public object RemoveData(string key)
    {
        var res = true;
        try
        {
            if (!string.IsNullOrEmpty(key))
            {
                var result = _memoryCache.Remove(key);
            }
            else
                res = false;
        }
        catch(Exception e)
        {
            throw;
        }
        return res;
    }
}
```

Nu behöver vi registrera vår CacheService i vår program.cs

```
builder.Services.AddScoped<ICacheService, CacheService>();
```

Nu låt oss lägga till kontrollanterna inne i mappen Kontrollanter vi behöver skapa DriversController-klassen

```
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiCaching.Data;
using ApiCaching.Models;
using ApiCaching.Services;

namespace ApiCaching.Controllers;

[ApiController]
[Route("[controller]")]
public class DriversController : ControllerBase
{
    private readonly ILogger<DriversController> _logger;
    private readonly AppDbContext _dbContext;
    private readonly ICacheService _cacheService;

    public DriversController(
        ILogger<DriversController> logger,
        AppDbContext dbContext,
        ICacheService cacheService)
    {
        _logger = logger;
        _dbContext = dbContext;
        _cacheService = cacheService;
    }

    [HttpGet("drivers")]
    public async Task<IActionResult> Get()
    {
        _logger.LogInformation("123 - hi");

        var cacheData = _cacheService.GetData<IEnumerable<Driver>>("drivers");

        if (cacheData != null && cacheData.Count() > 0)
            return Ok(cacheData);

        var expirationTime = DateTimeOffset.Now.AddMinutes(5.0);

        cacheData = await _dbContext.Drivers.ToListAsync();

        _cacheService.SetData<IEnumerable<Driver>>("drivers", cacheData, expirationTime);

        _logger.LogInformation("Using db");
        return Ok(cacheData);
    }

    [HttpPost("addDriver")]
    public async Task<IActionResult> Post(Driver value)
    {
        var obj = await _dbContext.Drivers.AddAsync(value);

        _cacheService.RemoveData("driver"+ value.Id);

        await _dbContext.SaveChangesAsync();

        return Ok(obj.Entity);
    }
}
```
