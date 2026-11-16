# Forslag til arkitektur

## Udgangspunkt

Brug Expo 58 med samme grundteknologier som Danmarksnyheder: React Native, JavaScript, react-native-maps og Supabase. Forslaget nedenfor er dokumentation; de foreslåede src-mapper er ikke oprettet. Kollegaens Expo-template er bevaret.

## Ansvarsfordeling

- **Skærme:** Kort, ejendomsdetaljer og interesseformular håndterer visning og brugerinteraktion.
- **Komponenter:** Genbrugelige elementer som projektkort, afkastvisning og pladsoversigt.
- **Hooks:** Styrer hentning, indlæsning og fejl for skærmene.
- **Services:** Samler databasekald og afsendelse af interesse, så skærmene ikke indeholder databaseforespørgsler.
- **Supabase:** Database, adgangsregler og eventuelt Storage til billeder og plantegninger.
- **Serverfunktion:** Validerer og behandler henvendelser til JM. Eventuelle mailnøgler opbevares her.

## Foreslået mappestruktur ved kodestart

```text
App.js
index.js
app.json
src/
  app/  # Fremtidige Expo Router-ruter
  components/
  hooks/
  services/
  lib/
  utils/
assets/
supabase/
  migrations/
  functions/
docs/
```

`App.js`, `index.js` og `app.json` findes allerede fra kollegaens template. Ved opsætning af Expo Router skal entry og ruter tilpasses. Supabase-klienten kan placeres i `src/lib/`. Vent med ekstra biblioteker, indtil behovet er afklaret.

## Dataflow

Kort → vælg projekt-id → detaljeside → interesseformular → service → serverfunktion → henvendelse til JM.

JM opdaterer optagede pladser i databasen → appen henter projektet igen → visningen beregner ledige pladser.

## Beslutninger til teamet

- Teamet vælger navigation ved kodestart. Expo Router er en mulighed, men er ikke installeret eller konfigureret.
- Aftal genindlæsning eller realtidsopdatering af pladser.
- Vælg kanal til JM og fastlæg, hvad kvitteringen betyder: gemt eller faktisk leveret.
- Aftal behov for login; referenceprojektets anonyme login skal ikke automatisk blive et produktkrav.
- Fastlæg databaseadgang og validering før formularen kobles til rigtige data.
