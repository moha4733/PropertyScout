# Teknisk plan

## Dependency-grundlag

Expo 58 er valgt af teamet. Kollegaens template er bevaret og suppleret med Supabase, react-native-maps, AsyncStorage og URL-polyfill via `expo install`. Projektet bruger ikke længere Danmarksnyheders Expo 57-lockfil. XML-parser er ikke med, da appen ikke kræver RSS/XML.

| Dependency | Versionskrav |
| --- | --- |
| `@react-native-async-storage/async-storage` | `2.2.0` |
| `@supabase/supabase-js` | `^2.119.0` |
| `expo` | `~58.0.25` |
| `expo-status-bar` | `~58.0.5` |
| `react` | `19.3.0` |
| `react-native` | `0.88.1` |
| `react-native-maps` | `1.29.11` |
| `react-native-url-polyfill` | `^4.0.0` |

## Klargøring og kontrol

- Dependencies er installeret, og `expo install --check` er bestået.
- `package.json` og lockfilen er opdateret sammen.
- Den eksisterende Expo-standardskærm og startkommandoer er bevaret; ingen PropertyScout-funktioner er implementeret.
- `.gitignore` beskytter `.env` og lokale miljøfiler.
- Telefonopstart er ikke afprøvet. Lint og TypeScript-kontrol er ikke opsat.
- npm audit rapporterer tre moderate fund i kæden Expo → @expo/fingerprint → minimatch. Ingen automatisk majorændring er anvendt.

## Arbejdsplan til mandag

1. Gennemgå krav, arkitektur og datamodel sammen.
2. Kør `npm ci` og `npm start`, og kontrollér standardskærmen på jeres testtelefoner.
3. Vælg og opsæt navigation og skærmstruktur. Et navigationsbibliotek er endnu ikke installeret.
4. Opret et særskilt Supabase-projekt med tabeller og adgangsregler.
5. Implementér kort og detaljer, derefter interesseformular og levering til JM.
6. Afprøv forløbet på telefon, inklusive fejl og manuelt opdaterede pladser.

SDK-reference: https://docs.expo.dev/versions/v58.0.0/

## Miljø og drift

Brug egne Supabase-værdier til PropertyScout. Offentlige klientværdier kan udfyldes i `.env.local`; databaseadministratornøgler og mailhemmeligheder skal aldrig indgå i mobilappen. Hosting og mailudbyder afklares af teamet.

## Planlagt afprøvning

Kontrollér pin → korrekt detaljeside, billeder og plantegninger, estimeret afkast, beregning af ledige pladser, formularvalidering, levering til JM og genindlæsning efter manuel databaseændring. Test også tomme data og netværksfejl.
