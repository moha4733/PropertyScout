# Datamodel

Se det samlede [ER-diagram](er-diagram.md) med felter, typer, relationer og regler. Dokumentationen beskriver eksamensversionen uden login; den er ikke et implementeret SQL-schema.

## Tabeller

- **EJENDOM:** Projektoplysninger, koordinater, samlet investeringsbeløb, estimeret afkast og samlede/optagede investorpladser. Ledige pladser beregnes.
- **EJENDOMSMEDIE:** Billeder og plantegninger med reference til ejendommen og filens placering i Supabase Storage.
- **INTERESSETILKENDEGIVELSE:** Reference til ejendommen, obligatorisk navn og e-mail, valgfrit telefonnummer, behandlingsstatus og separate mailstatusfelter for investor og JM.

Feltnavnene i ER-diagrammet er grundlag for den senere implementering. Begge relationer er én-til-mange. Ingen brugertabel eller junction-tabel er nødvendig i denne version.

## Adgang

Appbrugere må læse ejendomsprojekter og medier og indsende interesse gennem en kontrolleret serverfunktion. De må ikke læse andre personers kontaktoplysninger eller ændre investorpladser. Kun JM/administration opdaterer pladser. Teamet fastlægger adgangsregler, opbevaring, sletning og håndtering af gentagne henvendelser ved implementering.
