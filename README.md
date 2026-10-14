# Heminredningscoachen

Första responsiva versionen av hemsidan. Källan är byggfri HTML, CSS och JavaScript i `dist/`.

## Förhandsgranska

Kör en statisk webbserver med `dist/` som rot, exempelvis `python -m http.server 4173 --directory dist`.

## Nuvarande funktioner

- Presentation, tjänsteinriktningar, filosofi och kontakt.
- Mobilmeny, tangentbordsnavigation och interna sektionslänkar.
- Kontakt och intresseanmälningar öppnar besökarens mejlprogram. Inget skickas eller registreras automatiskt.
- Startsidesinnehåll från Jannikas systeme.io-version: Hem i balans, hållbarhet, presentation av Jannika, Stilstartaren, Designdialogen, Rum för Rum, Inred med stil och Ett hållbart hem.
- Logotyp, materialmoodboard och vardagsrumsbild hämtade från samma systeme.io-version. Vinröd och rosa färgpalett.
- Inspirationssektionen beskriver ämnena; artiklar publiceras senare.

## Nästa steg

Integrera verklig kalenderbokning, kurskatalog, betalning och rabattkoder samt en nyhetsbrevsleverantör med korrekt samtyckeshantering. Inga betalningar, bokningar eller prenumerationer simuleras som fungerande. Undersidestexter från systeme.io behöver granskas separat; den här överföringen gäller startsidans innehåll.

## Publicering

Sites använder `.openai/hosting.json` och publicerar `dist/`. Granskningsversionen är privat. Den befintliga domänen är ännu inte flyttad.
