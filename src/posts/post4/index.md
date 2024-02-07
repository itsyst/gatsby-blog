---
title: Hur man distribuerar en NextJS-app på en anpassad VPS
date: 2023-11-08
author: Khaled
slug: nexjs-app-vps
featureImage: Nextjs-vps-ci-cd.png
excerpt: Bygg, starta med PM2, lägg till omvänd proxy med NGINX, lägg till SSL med Certbot. Klart!
---

När vi utvecklar vilken Next JS-app som helst och börjar distribuera är det första som kommer i åtanke Vercel. Numera stöder också en mängd olika värdtjänstleverantörer Next JS på sina plattformar Men nyligen arbetade jag med ett projekt där jag behövde distribuera en NextJS SSR-app på en VPS-server eftersom klienten inte var bekväm med att distribuera någon annanstans, så jag kollade upp det och det fanns ingen ordentlig instruktion hur man gör det.
Förutsättningar

Innan vi börjar distribuera något behöver vi först en VPS redo för det. Läs första delen av serien Node.js Server Setup här.

#### Skapa APPen

Först skapar vi en ny Next JS-app på servern med

```
npx create-next-app@latest min-app

```

sedan behöver vi komma in i den mapp vi just skapade med

```
npx create-next-app@latest min-app

```

om du klonade appen från git måste du göra ett ytterligare steg för att installera beroenden

```
npm install
#eller
yarn

```

#### Bygg för produktion

NextJS levereras med byggskript så vi behöver bara köra det

```
npm run build
#eller
yarn build

```

det tar ett tag att generera produktionsbygget av ditt projekt, det kommer att generera alla statiska sidor för dig i förväg.

#### Ange port (valfritt)

Som standard kommer Next JS att köras på port 3000 men på denna server kör vi redan en app på 3000 så vi behöver uppdatera package.json för att starta produktionsappen på en ny port som 4400

```
{
    "name": "awesome-app",
    "version": "0.1.0",
    "private": true,
    "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 4400", // eller vilken port du vill ha
    "lint": "next lint"
    },
    "dependencies": {
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0"
    },
    "devDependencies": {
    "eslint": "8.22.0",
    "eslint-config-next": "12.2.5"
    }
}

```

#### Starta appen med PM2

För att starta appen med PM2 behöver vi köra

```
pm2 start npm --name "min-app" -- start

```

detta kommer att starta appen på port 4400 om du vill lägga till SSL och omvänd proxy med NGINX måste vi lägga till Ny app till vår befintliga NGINX-konfiguration från VPS Setup.

#### Lägga till omvänd proxy med NGINX

För att uppdatera servern öppna först konfigurationen

```
sudo nano /etc/nginx/sites-available/default

```

och lägg till detta nya block i platsdelen av serverblocket

```
server_name minapp.com.com www.minapp.com.com; location / {
    proxy_pass http://localhost:4400;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}

```

om du planerar att värd en andra app på en underdomän byt bara ut yourdomain2.com mot underdomän som api2.yourdomain.com

sedan kontrollera och starta om NGINX

kontrollera NGINX-konfigurationen

```
sudo nginx -t# Starta om NGINX
sudo service nginx restart

```

om domänen är pekad ska du se din app live på port 80 det finns ett till steg att gå lägga till SSL.

#### Lägg till SSL för andra APP

Vi har redan certbot installerat så att lägga till ytterligare domäner inte är ett problem

```
sudo certbot --nginx -d minapp.com -d www.minapp.com

```

det är allt din nya app ska också vara live på ny domän med SSL.
