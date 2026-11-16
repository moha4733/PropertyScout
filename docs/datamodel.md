# Forslag til datamodel

Dette er et planlægningsforslag, ikke en oprettet database eller et SQL-schema.

## Ejendomsprojekter

| Felt | Foreslået type | Formål |
| --- | --- | --- |
| id | UUID | Projektets identitet |
| title | Tekst | Navn på projektet |
| address | Tekst | Adresse |
| latitude / longitude | Decimaltal | Placering på kortet |
| description | Tekst | Projektbeskrivelse |
| investment_amount_dkk | Decimal | Samlet investeringsbeløb |
| annual_return_min_pct / annual_return_max_pct | Decimal | Estimeret årligt afkast eller interval |
| total_slots | Heltal | Samlede investorpladser |
| occupied_slots | Heltal | Optagede investorpladser |
| updated_at | Tidsstempel | Seneste ændring |

Ledige pladser beregnes og lagres ikke særskilt. Optagede pladser skal ligge mellem nul og det samlede antal. Minimumsafkast må ikke overstige maksimumsafkast.

## Projektmedier

Forslag: separat tabel med `id`, `project_id`, `type` (foto eller plantegning), `storage_path`, `alt_text` og `sort_order`. Et projekt kan have flere medier. Selve filerne kan ligge i Supabase Storage.

## Interessetilkendegivelser

Forslag: separat tabel med `id`, `project_id`, `name`, `email`, `created_at` og eventuel leveringsstatus. Et projekt kan have flere interessetilkendegivelser.

Interesse er ikke en reservation. Kontaktoplysninger skal ikke kunne læses af andre appbrugere. Teamet aftaler opbevaring og sletning samt håndtering af gentagne henvendelser.

## Adgang

Appen læser ejendomsprojekter og medier. Kun JM/administration må ændre pladser. Henvendelser oprettes gennem en kontrolleret serverfunktion, som validerer input. Konkrete tabeller, adgangsregler og leveringsmekanisme skal implementeres af teamet.
