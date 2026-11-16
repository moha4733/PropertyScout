# PropertyScout

PropertyScout er en mobilapplikation, der skal gøre det nemmere for potentielle ejendomsinvestorer at opdage og vise interesse for ejendomsprojekter i Danmark. Projektet er inspireret af Fairhomes og udvikles som eksamensprojekt på 4. semester.

## Status

Kollegaens Expo 58-template er indarbejdet. Teamet implementerer selv PropertyScouts funktioner; den eksisterende app viser kun standardskærmen.

## Dependencies og opstart

Projektet bruger Expo 58, React Native, Supabase, react-native-maps, AsyncStorage og URL-polyfill. Versionerne er fastlagt i `package-lock.json`.

```bash
npm ci
npm start
```

Supabase-klienten og databasen er endnu ikke implementeret. `.env.example` indeholder felter til den senere opsætning. Appen er beregnet til iOS og Android; web er ikke verificeret.

Dependencies er installeret, og Expos versionskontrol er bestået. Opstart på telefon er endnu ikke afprøvet.

## Dokumentation

- [Krav og projektbeskrivelse](docs/krav.md)
- [Brugerflow](docs/brugerflow.md)
- [Forslag til datamodel](docs/datamodel.md)
- [Teknisk plan og dependencies](docs/teknisk-plan.md)
- [Forslag til arkitektur](docs/arkitektur.md)

Datamodel og arkitektur er forslag til teamets gennemgang før kodestart.

## Licens

Projektet er udgivet under [MIT-licensen](LICENSE). Den eksisterende copyright-notits fra Expo-templaten er bevaret.

## Versionstags

`v0.1.0` markerer projektets klargjorte grundopsætning, ikke en færdig app. Fremtidige versioner tagges som `vMAJOR.MINOR.PATCH`: patch til rettelser, minor til nye funktioner og major til inkompatible ændringer. Opret kun et tag, når den tilhørende commit er klar; eksisterende tags flyttes ikke.
