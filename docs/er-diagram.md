# ER-diagram for PropertyScout

Eksamensversionen har ingen brugerlogin. Modellen omfatter ejendomme, medier og interessetilkendegivelser. Dette er dokumentation; databasen er endnu ikke implementeret.

```mermaid
erDiagram
    EJENDOM ||--o{ EJENDOMSMEDIE : har
    EJENDOM ||--o{ INTERESSETILKENDEGIVELSE : modtager

    EJENDOM {
        uuid id PK
        text navn
        text adresse
        text beskrivelse
        decimal breddegrad
        decimal laengdegrad
        decimal investeringsbeloeb_dkk
        decimal afkast_min_pct
        decimal afkast_max_pct
        int samlede_pladser
        int optagede_pladser
        timestamptz oprettet
        timestamptz opdateret
    }

    EJENDOMSMEDIE {
        uuid id PK
        uuid ejendom_id FK
        text type "foto eller plantegning"
        text filsti
        text alternativ_tekst
        int sortering
    }

    INTERESSETILKENDEGIVELSE {
        uuid id PK
        uuid ejendom_id FK
        text navn
        text email
        text telefon "valgfrit"
        text status "ny, kontaktet, afsluttet"
        text investor_mailstatus "afventer, sendt, fejlet"
        text jm_mailstatus "afventer, sendt, fejlet"
        timestamptz oprettet
    }
```

## Relationer

- En ejendom kan have nul eller flere medier. Hvert medie tilhører præcis en ejendom via `ejendom_id`.
- En ejendom kan have nul eller flere interessetilkendegivelser. Hver interessetilkendegivelse tilhører præcis en ejendom via `ejendom_id`.
- Begge relationer er en-til-mange.
