# Opdrachtbeschrijving

**Inhoudsopgave**

1. [Inleiding](#inleiding)
2. [Opdracht 1: Opzet](#opdracht-1-opzet)
3. [Opdracht 2: Routing](#opdracht-2-routing)
4. [Opdracht 3: Homepagina (data ophalen en weergeven)](#opdracht-3-homepagina-data-ophalen-en-weergeven)
5. [Opdracht 4: Subreddit pagina (data ophalen en weergeven)](#opdracht-4-subreddit-pagina-data-ophalen-en-weergeven)
7. [Opdracht 5: Styling](#opdracht-5-styling);
8. [Bonusopdracht](#bonusopdracht)
9. [Schermontwerpen](#schermontwerpen)
10. [Bijlage](#bijlage)
    1. [Mappen structuur](#voorbeeld-mappen-structuur)

## Inleiding
Het is tijd om al jouw CSS, JavaScript en React skills in de praktijk te brengen: je gaat de webapplicatie van Reddit ontwikkelen. De
designers van dit bedrijf hebben, naar aanleiding van hun nieuwe huisstijl, alle schermontwerpen al helemaal uitgedacht. Het
enige wat jij als aanstormende web developer hoeft te doen, is daar een werkende versie van te maken! Omdat het budget van Reddit niet zo groot is, hoef je de website alleen responsive te maken voor desktops. Bekijk de schermontwerpen [hier](#schermontwerpen).

Reddit heeft tevens enkele API endpoints beschikbaar gemaakt die je kunt gebruiken om de data op te halen:
* `GET https://www.reddit.com/hot.json?limit=15` voor de 15 populairste posts van dit moment
* `GET https://www.reddit.com/r/{SUBREDDIT-HIER}/about.json` om de informatie over een specifieke subreddit op te halen, waarbij je `{SUBREDDIT-HIER]` vervangt door bijvoorbeeld `memes` of `worldnews`.

![browser-screenshot](./src/assets/screenshot.png)

## Opdracht 1: opzet

Je gaat het ontwerp van deze webpagina zo gedetailleerd mogelijk namaken. Alle afbeeldingen en icoontjes die
worden gebruikt in de designs, zijn aangeleverd in de `assets`-map van deze repository.

In plaats van deze opdracht te clonen, maak je voor dit project een **eigen** project aan, _from scratch_!
Wanneer je aan een nieuw project gaat beginnen, maak je eerst een goede basis. Anders wordt jouw code al snel een
rommeltje. Zorg daarom dat je onderstaande checklist afwerkt.

### 1.1 Projectopzet

- [ ] Maak een eigen project aan. Maak in het project alle benodigde bestanden en mappen aan, zoals een `pages`, `components`, `helpers` en `assets`. Doe dat volgens [deze structuur](#voorbeeld-mappen-structuur). Je kunt er vanuit gaan dat je twee pagina's nodig zult hebben: _Home_ en _Subreddit_. Vergeet de `.idea`-map niet toe te voegen aan jouw `.gitignore`-bestand.
- [ ] Download de afbeeldingen uit deze repository en plaats deze in jouw eigen `assets`-map.
- [ ] Maak een repository aan op www.GitHub.com voor jouw project.
- [ ] Initialiseer Git in jouw project. Maak direct een commit en koppel daarna jouw repository aan dit project volgens de
  instructies op GitHub.
- [ ] Wanner dit is gelukt, maak je een feature-branch aan. Op deze branch schrijf je jouw uitwerkingen, zodat
  deze later gemakkelijk kunnen worden nagekeken in een Pull Request.

### 1.2 Stylingopzet

- [ ] Declareer alvast een CSS-reset in `App.css`. *Pssst*: de property `box-sizing: border-box` komt hier ook goed van pas!

- [ ] De gebruikte fonts in de designs zijn `Quicksand` voor de headings en `Roboto Condensed` voor normale tekst. Deze fonts kun
  je gratis vinden op Google Fonts, zorg er alvast voor dat je deze importeert in jouw CSS-bestand en instelt
  als `font-family`.

- [ ] De ontwerper heeft de gebruikte kleuren voor ons
  aangeleverd: [bekijk het kleurenpalet hier](https://coolors.co/dd3038-e7613a-fdf4f2-ffffff-292929). Het is handig om
  deze kleuren bovenaan jouw CSS-bestand te plakken, zodat je ze gemakkelijk kunt kopiëren wanneer je ze nodig
  hebt. Het gaat om de volgende HEX-codes:
    - Rood `#dd3038`;
    - Oranje `#e7613a`;
    - Licht oranje `#FDF4F2`;
    - Zwart `#292929` (voor standaard tekst);
    - Wit `#FFFFFF`;

## Opdracht 2: routing
De Reddit applicatie heeft op dit moment nog geen pagina's en ook geen routing. Dit ga jij zelf implementeren. Maak twee pagina-componenten aan en zorg ervoor dat deze pagina's te bereiken zijn op de volgende urls:
* Home pagina (`/`)
* Subreddit specifieke pagina (`/subreddit/:subredditId`, dynamische url)

Zorg dat je test of jouw dynamische routing werkt, door op de Subreddit specifieke pagina de `subredditId` uit te lezen en weer te geven op de pagina. Dit kun je vervolgens testen door handmatig urls in de adresbalk te typen, zoals: `http://localhost:3000/subreddit/todayilearned`.

## Opdracht 3: Homepagina (data ophalen en weergeven)
* Je haalt 15 posts op en laat deze zien op de homepagina door een request te maken naar dit endpoint: `GET https://www.reddit.com/hot.json?limit=15`. Kijk goed naar de data die je ontvangt en zorg dat je de individuele informatie eerst in de console kunt loggen voor je dit probeert weer te geven op de pagina!
* Door op de naam van de subreddit te klikken, wordt de gebruiker doorgelinkt naar de subreddit-specificatie-pagina;
* Door op de titel van de post te klikken, wordt de gebruiker doorgelinkt naar de _echte_ post op Reddit.com;

## Opdracht 4: Subreddit pagina (data ophalen en weergeven)
* Je haalt de informatie over een specifieke subreddit op door een request te maken naar dit endpoint: `GET https://www.reddit.com/r/{SUBREDDIT-HIER}/about.json`,  waarbij je `{SUBREDDIT-HIER]` vervangt door bijvoorbeeld `memes` of `worldnews`.
* Zorg dat de gebruiker terug kan naar de homepagina door op de "Take me back"-link onderaan de pagina te klikken.

## Opdracht 5: Styling
Ga ten slotte aan de slag met styling zodat de pagina er precies zo uitziet als het ontwerp!

## Bonusopdracht
* Zorg dat je (kleine!) componenten maakt van elementen die vaak terugkomen in jouw applicatie, zoals posts, de header, de footer, etc.
* Alle aantallen (ups, comments, subscribers) geef je weer in een punt-notatie. Hier schrijf je een aparte helper-functie voor:
    * 10000 wordt 10.000
    * 8005 wordt 8.005
    * 1456734 wordt 14.567.34
    * 450 wordt 450
* Alle titels die langer zijn dan 100 karakters, breek je af met `...`. Hier schrijf je een aparte helper-functie voor.
* Tijdens het ophalen van de data laat je de gebruiker duidelijk zien dat dat er informatie geladen wordt;
* Als er iets mis gaat bij het ophalen van de data, geef je een foutmelding weer op de pagina;
* In het tabblad wordt een eigen icoontje en titel weergegeven (bijvoorbeeld het logo van Reddit)

## Schermontwerpen
De screenshots zijn erg groot. Download de screenshots om ze te bekijken:

[Desktop design home](https://github.com/hogeschoolnovi/frontend-react-concept-opdracht/blob/master/src/assets/screenshot-reddit-home.png)
[Desktop design subreddit](https://github.com/hogeschoolnovi/frontend-react-concept-opdracht/blob/master/src/assets/screenshot-reddit-subreddit.png)

## Bijlage

### Voorbeeld Mappen structuur

```
src
└── assets
|
└── helpers
|    ├── helperFunctieNaam.js
|    └── helperFunctieNaamAndere.js
└── components
|    └── button
|        ├── Button.js
|        └── Button.css
|    └── header
|        ├── Header.js
|        └── Header.css
└── pages
|   └── home
|       ├── Home.js
|       └── Home.css
|   └── subreddit
|       ├── Subreddit.js
|       └── Subreddit.css
```
