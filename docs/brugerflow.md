# Brugerflow

## Procesmodel

Den eksisterende model ligger i `Procesflow for ejendomsinvestering med JM.png`. Teamet vedligeholder selv modellen.

## Forløb

1. Brugeren åbner Danmarkskortet med ejendomsprojekter.
2. Brugeren vælger en pin og åbner ejendommens detaljeside.
3. Brugeren ser billeder, plantegninger, adresse, beskrivelse, investeringsbeløb, estimeret afkast og investorpladser.
4. Brugeren vælger “Vis interesse” og indtaster navn og e-mail.
5. Appen sender henvendelsen og viser en kvittering ved succes.
6. JM behandler interessen uden for appen.
7. Ved accept opdaterer JM optagede pladser manuelt i databasen.
8. Appen viser det nye antal ved næste datahentning.

## Fejl og alternative forløb

- Indlæsning, tomt resultat og netværksfejl skal have tydelige visninger.
- Ugyldig formular vises med feltfejl.
- Mislykket afsendelse må ikke vise en succesbesked.
- Gentagne tryk under afsendelse skal undgås.
- Adfærd ved fuldt optagede projekter aftales før implementering.
