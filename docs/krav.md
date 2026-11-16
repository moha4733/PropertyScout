# Krav

## Formål og målgruppe

PropertyScout hjælper potentielle ejendomsinvestorer med at finde ejendomsprojekter i Danmark og sende en interessetilkendegivelse til JM. Appen er inspireret af Fairhomes og er et eksamensprojekt på 4. semester.

## Funktioner i første version

1. Interaktivt Danmarkskort med pins for ejendomsprojekter. Tryk åbner projektets detaljeside.
2. Detaljeside med billeder, plantegninger, adresse, projektbeskrivelse og samlet investeringsbeløb.
3. Estimeret årligt afkast i procent, eventuelt et interval som 10–15 %. Det skal fremgå, at afkastet ikke er garanteret.
4. Antal samlede, optagede og ledige investorpladser. Eksempel: 20 mio. kr., fire pladser og to optagede.
5. Interesseformular med navn og e-mail, som sender en henvendelse til JM.
6. JM godkender investorer uden for appen og opdaterer optagede pladser manuelt i databasen. Appen viser de opdaterede tal, når data hentes igen.

## Afgrænsning

Ingen betaling, automatisk godkendelse eller reservation af investorpladser ved indsendelse af interesse. En administratorgrænseflade er ikke en del af den beskrevne første version.

## Acceptkriterier

- En pin åbner den rigtige ejendom.
- Detaljer viser de angivne projektoplysninger og markerer afkast som et estimat.
- Ledige pladser beregnes som samlede minus optagede pladser.
- Formularen kræver navn og gyldig e-mail og viser succes eller fejl.
- En interessetilkendegivelse ændrer ikke antallet af investorpladser.
- En manuel ændring i databasen vises ved næste hentning af ejendommen.

## Afklaringer før implementering

- Hvilken adresse eller kanal skal JM modtage henvendelser på?
- Skal interessen kunne sendes, når alle pladser er optaget?
- Skal pladser opdateres ved åbning/genindlæsning eller også i realtid?
- Kræves brugerlogin? Det er ikke angivet som et krav.
