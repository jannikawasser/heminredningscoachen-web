# Heminredningscoachen

Första responsiva versionen av hemsidan. Källan är byggfri HTML, CSS och JavaScript i `dist/`.

## Förhandsgranska

Kör en statisk webbserver med `dist/` som rot, exempelvis `python -m http.server 4173 --directory dist`.

## Nuvarande funktioner

- Presentation, tjänsteinriktningar, filosofi och kontakt.
- Mobilmeny, tangentbordsnavigation och interna sektionslänkar.
- Kontakt och intresseanmälningar öppnar besökarens mejlprogram. Inget skickas eller registreras automatiskt.
- Originalbild och logotyp från heminredningscoachen.se.

## Nästa steg

Bekräfta tjänstetexter och design med Jannika. Integrera sedan verklig kalenderbokning, kurskatalog, betalning och rabattkoder samt en nyhetsbrevsleverantör med korrekt samtyckeshantering. Inga betalningar, bokningar eller prenumerationer simuleras som fungerande.

## Publicering

Sites använder `.openai/hosting.json` och publicerar `dist/`. Granskningsversionen är privat. Den befintliga domänen är ännu inte flyttad.
