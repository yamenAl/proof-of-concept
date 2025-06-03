# Proof of Concept

## Progressive enhancement

<!--Over het bouwen van je website in lagen, en onderzoeken van de functional en reliable laag.-->

Progressive enhancement is een van de principes waarmee je robuuste, betrouwbare websites kan ontwerpen en bouwen die het altijd doen, voor iedereen, in elke browser.




## Aanpak

Bouwen volgens het principe van Progressive enhancement betekent dat je de website en componenten opbouwt in lagen: 
<!-- Door je website en componenten in lagen te bouwen zorg je ervoor dat als een enhancement zoals een mooie animatie, of een interactie met client-side javascript niet door een browser kan worden uitgevoerd  -->

1. Bepaal eerst de core functionality van wat je gaat maken
2. Bouw die functionaliteit met de simpelste techniek (meestal HTML, met een klein beetje Mobile First CSS voor de huisstijl)
3. Voeg daarna extra enhancements toe met CSS en client-side JS, om de User Experience te verbeteren! (de leukste stap, waar veel frontenders meteen heen springen)

Begin met stap 1 en 2 voordat je met de enhancements aan de slag gaat. _Ik zeg je eerlijk_ het gaat zeker tijd schelen als je eerst de basis goed opzet.

Begin met ontwerpen en schetsen van de One Column Layout met data en GET routes.
Ga daarna verder met de User Generated Contend en de POST. 
Bespreek je planning en aanpak met een docent. 


### One Column Layout

Maak eerst je pagina's in HTML en eenvoudige CSS met alle data voor de content, het menu, de footer enzovoort. In de one column layout is alles uitgeklapt en zit nog geen interactie. 

Teken zo nodig een sitemap. Bedenk welke Url's de pagina's krijgen, met bijhorende routes. Teken Wireframes van de responsive layouts en geef aan of de content statisch of dynamisch is (dit kan je ook in Figma doen - jeweettoch). Onderzoek de API zodat je weet welke data je hebt en hoe je data kan fetchen. Maak een breakdown voor de HTML en CSS die je nodig denkt te hebben en noteer de bronnen die je hebt gebruikt.

💡tip: bespreek je breakdown met een medestudent

💡tip: Tag een docent in een issue als je de HTML af hebt voor een grondige review

### User Generated Content

Om ervoor te zorgen dat jouw gebruikers iets kunnen achterlaten of toevoegen op jouw website heb je een POST functie nodig. Als je je website volgens het principe van Progressive enhancement ontwerpt en bouwt, bouw eerst de POST interactie Server-side werkt. 

Schets een Wireflow van jouw interactie. Bedenk nette URLs voor je pagina's en routes, en schrijf deze erbij. Annoteer je Wireflow met hints voor je dynamische data, en bedenk ook hoe je de POST in het server.js script verwerkt. Maak een breakdown voor de CSS en de HTML formulier elementen die je nodig hebt en noteer de bronnen.


<!--

## Aanpak

Goede HTML onderzoeken. Fomulieren met fieldsets. Server side afhandelen van User generated content.
Mobile first/one column layout met basis huisstijl.

Schetsen/prototypen:
Sitemap met url-design, routes en data fetch, wireframes met statische en dynamische data, wireflow voor interactie en animatie, High res in Figma responsive layouts.


Goede HTML onderzoeken. Fomulieren met fieldsets. Server side afhandelen van User generated content.
Mobile first/one column layout met basis huisstijl.

Sitemap met url-design, routes en data fetch, wireframes met statische en dynamische data, wireflow voor interactie en animatie,. high res in Figma responsive layouts.

-->
