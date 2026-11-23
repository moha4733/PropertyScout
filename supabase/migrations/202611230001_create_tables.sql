-- PropertyScout: Oprettelse af database

-- 1. EJENDOM
CREATE TABLE public."EJENDOM" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    navn TEXT,
    adresse TEXT,
    beskrivelse TEXT,
    breddegrad DECIMAL,
    laengdegrad DECIMAL,
    investeringsbeloeb_dkk DECIMAL,
    afkast_min_pct DECIMAL,
    afkast_max_pct DECIMAL,
    samlede_pladser INTEGER NOT NULL DEFAULT 0,
    optagede_pladser INTEGER NOT NULL DEFAULT 0,
    oprettet TIMESTAMPTZ DEFAULT NOW(),
    opdateret TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT ejendom_pladser_check
        CHECK (
            samlede_pladser >= 0
            AND optagede_pladser >= 0
            AND optagede_pladser <= samlede_pladser
        ),

    CONSTRAINT ejendom_afkast_check
        CHECK (
            afkast_min_pct IS NULL
            OR afkast_max_pct IS NULL
            OR afkast_min_pct <= afkast_max_pct
        )
);

-- 2. EJENDOMSMEDIE
CREATE TABLE public."EJENDOMSMEDIE" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ejendom_id UUID NOT NULL,
    type TEXT,
    filsti TEXT,
    alternativ_tekst TEXT,
    sortering INTEGER,

    CONSTRAINT ejendomsmedie_ejendom_fk
        FOREIGN KEY (ejendom_id)
        REFERENCES public."EJENDOM"(id)
        ON DELETE CASCADE,

    CONSTRAINT ejendomsmedie_type_check
        CHECK (type IS NULL OR type IN ('foto', 'plantegning'))
);

-- 3. INTERESSETILKENDEGIVELSE
CREATE TABLE public."INTERESSETILKENDEGIVELSE" (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ejendom_id UUID NOT NULL,
    navn TEXT NOT NULL,
    email TEXT NOT NULL,
    telefon TEXT,
    status TEXT DEFAULT 'ny',
    investor_mailstatus TEXT DEFAULT 'afventer',
    jm_mailstatus TEXT DEFAULT 'afventer',
    oprettet TIMESTAMPTZ DEFAULT NOW(),

    CONSTRAINT interesse_ejendom_fk
        FOREIGN KEY (ejendom_id)
        REFERENCES public."EJENDOM"(id)
        ON DELETE CASCADE,

    CONSTRAINT interesse_navn_check
        CHECK (LENGTH(TRIM(navn)) > 0),

    CONSTRAINT interesse_email_check
        CHECK (LENGTH(TRIM(email)) > 0),

    CONSTRAINT interesse_status_check
        CHECK (status IS NULL OR status IN ('ny', 'kontaktet', 'afsluttet')),

    CONSTRAINT investor_mailstatus_check
        CHECK (investor_mailstatus IS NULL OR investor_mailstatus IN ('afventer', 'sendt', 'fejlet')),

    CONSTRAINT jm_mailstatus_check
        CHECK (jm_mailstatus IS NULL OR jm_mailstatus IN ('afventer', 'sendt', 'fejlet'))
);

-- 4. Indeks på fremmednøgler
CREATE INDEX idx_ejendomsmedie_ejendom_id
    ON public."EJENDOMSMEDIE"(ejendom_id);

CREATE INDEX idx_interesse_ejendom_id
    ON public."INTERESSETILKENDEGIVELSE"(ejendom_id);

-- 5. Aktivér Row Level Security
ALTER TABLE public."EJENDOM" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."EJENDOMSMEDIE" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."INTERESSETILKENDEGIVELSE" ENABLE ROW LEVEL SECURITY;
