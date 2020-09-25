<p align="center">
  <a href="https://github.com/itsyst/khaled_elhamzi_tentan1">
    <img alt="logo" src="https://raw.githubusercontent.com/itsyst/khaled_elhamzi_tentan1/master/src/images/blog-icon.png?token=AEJZHAJ42FOQBK2YA4QJPTK7O3HE4" width="80" />
  </a>
</p>
<h1 align="center">
  Gatsby's Blog
</h1>

This is my first attempt to build my ownn site with Gatsby. 


## 🚀 Quick start

1.  **Create a Gatsby site.**

    I used the Gatsby CLI to create a my default starter site.

    ```shell
    gatsby new KhaledElHamzi-Tentan1
    ```

2.  **Ready to go.**

    I navigated into the new site directory and start it up.

    ```shell
    cd KhaledElHamzi-Tentan1/
    gatsby develop
    ```

3.  **Create a new github-CLI repository**

     
    ```shell
    # create a repository under github account using the current directory name
    gh repo create
    ```
    
This is my complete code for the Gatsby blog

## Guide

1. **Clone or download the code from this repo**

    ```shell
    # git clone git@github.com:itsyst/khaled_elhamzi_tentan1.git
    gh repo create
    ```
2. **Install the dependencies**

    ```shell
    cd KhaledElHamzi-Tentan1/
    npm install 
    ```
    or 
    
    ```shell
    cd KhaledElHamzi-Tentan1/
    yarn install 
    ```
3. **🚀Launch the project**

 ```sh
    gatsby develop
 ```

3. **You can have a look to the deployed instance of this project**

 https://khaled-tentan.netlify.com


## 🧐 What's inside?

A quick look at the top-level files and directories in this project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code used by this project.

2.  **`/src`**: This directory will contain all of the code related to the front-end view of the site.

3.  **`.gitignore`**: This file tells git which files it should not track.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/).

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/).

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site.([config docs](https://www.gatsbyjs.com/docs/gatsby-config/)).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/).

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/).

9.  **`LICENSE`**: This is a Gatsby starter licensed under the 0BSD license. but i replaced it with my own license.

10. **`package-lock.json`** . This is an automatically generated file based on the exact versions of npm dependencies that were installed for this project. 

11. **`package.json`**: A manifest file for Node.js projects.

12. **`README.md`**: A text file containing useful reference information about this project.

---

<h1 align="center">
  Samband och Värdering vid val av programmeringsteknik vid utveckling av dynamiska webbplatser
</h1>

## 📜 Webbhistorik och jämförelse
Långt tillbaka i början av webben, fanns bara statisk webbplatser som innehåller enkel HTML. Den ![första webbplatsen](http://info.cern.ch/hypertext/WWW/TheProject.html) i historien, byggdes av ![Tim Berners-Lee 1990](https://en.wikipedia.org/wiki/Tim_Berners-Lee). För cirka 20 år sedan insåg företag som Microsoft och Macromedia att människor behövde verktyg för att bygga webbplatser. Problemet som utvecklarna kom emot var att om de hade en webbplats med 20 eller 100 sidor och om de behövde uppdatera huvudmenyn på deras webbsidan, var de tvungna att uppdatera alla 10 eller 20 eller 100 sidor, vilket var riktigt tråkigt. En av lösningarna på detta problem var att skapa så kallade DWT, eller dynamiska webbmallar. Man skapar en mall som innehåller de vanliga elementen, som huvudmenyn och sidhuvudet och sidfoten, och sedan definierar man redigerbara områden, sedan använder man den mallen för att skapa nya sidor, vi redigerar bara de redigerbara områdena, sedan mallen tar hand om resten . Och sedan kör vi en liten process, och ut kommer de statiska HTML-sidorna. tre år efter den första webbplatsen infördes ![Common Gateway Interface](https://en.wikipedia.org/wiki/Common_Gateway_Interface) (CGI) och tillät webbplatser att kommunicera med en databas.
Efter ungefär tio år till hade webben utvecklats långt bortom DWT till vad  som kallas CMS eller Content Management Systems. 
CMS, som ![Drupal](https://www.drupal.com/) och ![WordPress](https://wordpress.com/) tog ett nytt och revolutionerande tillvägagångssätt för problemet med att hantera ett 1000 tal sidor på en webbplats. Alttså i stället för att använda dynamiska webbmallar och automatiskt generera statiska sidor introducerade de ett ![PHP](https://www.php.net/)-baserat mallsystem som genererade sidor snabbt när användaren begärde dem genom att hämta data från en databas och placera dessa data i mallar.
Strax efter ytterligare 10 år med DWT och fram till idag dominerar ![CMS](https://kinsta.com/knowledgebase/content-management-system/) nätet. Men det fanns ett problem till , lot oss säga att om en webbplats är populär med tiotusentals eller mer besök per dag, då genererar sidor hela tiden enorma serverkostnader. Så utvecklare har börjat cacha sina sidor, de lagra statiska versioner av sidorna på och utanför ![CDM](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/) och sedan servera dem istället för de genererade sidorna.

![Gatsby](https://www.gatsbyjs.com/) som anväder JavaScript ![React](https://reactjs.org/) framework och andra statiska webbplatsgenererande lösningar liksom ![Hugo](https://gohugo.io/) som är uppbyggde av ![GO](https://golang.org/) , ![Jekyll](https://jekyllrb.com/) uppbyggde av ![Ruby](https://www.ruby-lang.org/en/), ![Nikola](https://getnikola.com/) skrivet i Python, ![ReactStaic](https://github.com/react-static/react-static) som använder react för att generera statiska sidor, till skillnad från Gatsby ReacStatic beror inte på ![GraphQL](https://graphql.org/) och slutligen ![VuePress](https://vuepress.vuejs.org/) vilet är en minimal installation med markdown projektstruktur som hjälper utvecklare att fokusera på att skriva.

Denna statisk generator lösningar som nämnts ovan, kommer med moderna verktyg vilket är resultatet av lång work på 20-åriga sedan.
Men det finns en viktig skillnad till de andra statiska generatorlösningar att med Gatsby kan man hämta innehåll från vilken datakälla som helst, blanda och samla in data på vilket sätt man vill och skapa avancerade dynamiska mallar för att generera dessa statiska sidor, det här är vad Gatsby-teamet kallar ![Content Mesh](https://www.gatsbyjs.com/blog/2018-10-04-journey-to-the-content-mesh/). Så med Gatsby är allt gammalt nytt igen och vad som är nytt kommer att forma nätets framtid tror jag.

I den ovannämnda statiska webbplatsgeneratorn behöver vi några verktyg i vår "web development toolkit". För det första behöver vi en goda förståelse för grunderna, HTML eller ![Pug](https://pugjs.org/api/getting-started.html) vilket är en elegant html som fungerar bra med nodejs, den är strukturerad med "indent" och kort syntax som gör koden läsbar snabbare än att kolla på all html-filen för att hitta det element som behövs. För det andra behöver vi också goda kunskap om CSS, SAAS eller LESS, naturligtvis har man med ![SASS](https://sass-lang.com/) eller ![Less](http://lesscss.org/) några alternativ som inte erbjuds av CSS ensam, till exempel variabler som man skappas och används igen senare, också matematiska funktioner eller matematiska operationer, och en annan fördel med SASS är möjligheten att ställa in "loops".I Sass finns också mixins mallar som man kan skapa dem själv ...
sedan behöver man känna til modern JavaScript. Därefter behöver man lite kunskap med att arbeta med kommand lines och npm.

Styling i ![Gatsby](https://www.gatsbyjs.com/), ![React](https://reactjs.org/) , ![Angular](https://angularjs.org/) ![VueJs](https://vuejs.org/) ![Next](https://nextjs.org/) och även ![Laravel](https://laravel.com/) hanteras på samma sätt, det vill säga att det finns ingen standard för hur man hanterar stilar och CSS. Istället har man flera tillvägagångssätt och man kan mixa och matcha vilket som passar best me kodningsmetod och krav man behöver uppfylla. Det finns fyra huvudmetoder för stilar och CSS: Vanlig CSS (old fashion) , CSS-moduler vilket är ett tillvägagångssätt utformat för att ![lösa problemet](https://css-tricks.com/css-modules-part-1-need/) med det globala scope i CSS, CSS ramverk, de mest kända Css ramverk är ![Bootstrap](https://getbootstrap.com/), ![Tailwind](https://tailwindcss.com/), ![Materialise](https://materializecss.com/) och ![Bulma](https://bulma.io/), det är sant att css ramverk gör vårt jobb enklare men Jag gillar personligen inte css-ramverk eftersom jag har använt i olika projeker, det gör html-koden väldigt ful med de variabler och classer `<div class="mt-4 md:mt-0 md:ml-6">`. Det sista huvudmetod är CSS-in-JS som tillåter JavaScript-utvecklare att skriva JavaScript även när hen skriver CSS, och det kopplar också stilen direkt till det element som utformas, vilket gör det enkelt att förstå vad som händer.Men från vad jag sa var jag mer i den styled komponentent, jag har nyligen kännat till styled komponentent template som varit introducerad av min Läraren ![Sohail](https://github.com/mig-25)🐦![twitter](https://twitter.com/RajaHasware) **|** 👔![linkedin](https://linkedin.com/in/sohail-hasware). Anledningen till varför jag tyckte om styled component är att du har frihet att bygga anpassade komponenter med CSS och ingen klasspolicy och det inkluderar nested stilar som i Sass.

## 💭 Slutsats
Oavsett om du vill använder Gatsby, Vue Js, Next, Angular eller andra programmeringstekniker detta beror väldigt mycket på ditt användningsfall. 
Nu när jag vet hur man sysslar med gatsby föredrar jag att det bästa att använda den för att skapa min blog än att använda wordpress som är ett gammalt CMS och om vi tittar på internet vet man direkt vilken webbplats är gjord av wordpress eftersom mallarna ser ut i de flesta fall samma. Gatsby är väldigt snabb jämfört med wordpress och webbsidor som är uppbyggda med gatsby rankas verkligen högre i googles sökresultat.
Idag i denna innovativa världsteknik bör vi sätta ett mål och skäl för att välja det rätta programmeringsteknik vid utvecklingen och det finns viktiga punkter att känna till innan vi sätter igång. Det första punk som utvecklare eller företag behöver man tänka på tid för att koda och uppbygga all project. Som utvecklare måste jack också välja det lämplig ramverket som användes mer i någon specifik länd där jag bor i, till exempel i Indien använder de mest Angularjs än Reactjs ramar enligt ![google trends](https://trends.google.com/trends/explore?date=2018-01-01%202020-09-25&geo=IN&q=%2Fm%2F0j45p7w,Vuejs,Reactjs,ember,nodejs) också behöver man tänka på framtida ramverkets stöd, vad är fördelen med att välja ett ramverk som inte kommer att stödjas i framtiden? i så fall får vi mycket problem med säkerhet och ramverketshantering, då jag föredrar att välja den sista programmeringsteknik liksom ✔️ React eller ✔️ Vuejs för att bygga mina komplexa projekter, dessa två ramverker är ![mest kända](https://trends.google.com/trends/explore?date=2018-01-01%202020-09-25&q=%2Fm%2F0j45p7w,Vuejs,Reactjs,ember,nodejs) och de attrahera många företag att jobba med. 
