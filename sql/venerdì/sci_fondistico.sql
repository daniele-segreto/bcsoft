-- Creazione e selezione del database dedicato
CREATE DATABASE IF NOT EXISTS SCI_FONDISTICO;
USE SCI_FONDISTICO;

--------------------------------------------------------------------------

-- CREAZIONE DELLE TABELLE STRUTTURALI DI BASE

CREATE TABLE FONDISTA (
    nome VARCHAR(50) PRIMARY KEY,
    nazione VARCHAR(50) NOT NULL,
    eta INT NOT NULL
);

CREATE TABLE GARA (
    nome VARCHAR(50) PRIMARY KEY,
    luogo VARCHAR(50) NOT NULL,
    nazione VARCHAR(50) NOT NULL,
    lunghezza INT NOT NULL
);

CREATE TABLE GAREGGIA (
    nomefondista VARCHAR(50),
    nomegara VARCHAR(50),
    piazzamento INT NOT NULL,
    FOREIGN KEY (nomefondista) REFERENCES FONDISTA(nome),
    FOREIGN KEY (nomegara) REFERENCES GARA(nome)
);

--------------------------------------------------------------------------

-- INSERIMENTO DEI DATI INIZIALI NELLE TABELLE

INSERT INTO FONDISTA (nome, nazione, eta) VALUES
('Anna Rossi', 'Italia', 25),
('Juan Valdes', 'Spagna', 28);

INSERT INTO GARA (nome, luogo, nazione, lunghezza) VALUES
('Black', 'Milano', 'Italia', 10),
('White', 'Parigi', 'Francia', 15);

INSERT INTO GAREGGIA (nomefondista, nomegara, piazzamento) VALUES
('Anna Rossi', 'Black', 1),
('Juan Valdes', 'White', 2);

--------------------------------------------------------------------------

-- # PUNTO 1: Estrarre il nome da FONDISTA.

SELECT nome 
FROM FONDISTA;

--------------------------------------------------------------------------

-- # PUNTO 2: Estrarre da GARA tutti i Luoghi che iniziano con M.

SELECT luogo 
FROM GARA 
WHERE luogo LIKE 'M%';

--------------------------------------------------------------------------

-- # PUNTO 3: Estrarre da FONDISTA nome e nazione, ordinati in ordine crescente per nome.

SELECT nome, nazione 
FROM FONDISTA 
ORDER BY nome ASC;

--------------------------------------------------------------------------

-- # PUNTO 4: Estrarre da FONDISTA tutti i campi, ordinati in ordine discendente per nazione.

SELECT * 
FROM FONDISTA 
ORDER BY nazione DESC;

--------------------------------------------------------------------------

-- # PUNTO 5: Estrarre da GARA le nazioni senza ripetizioni.

SELECT DISTINCT nazione 
FROM GARA;

--------------------------------------------------------------------------

-- # PUNTO 6: Estrarre da GAREGGIA i nomi dei fondisti in ordine di piazzamento crescente e decrescente.

-- Ordinamento crescente per piazzamento
SELECT nomefondista, piazzamento 
FROM GAREGGIA 
ORDER BY piazzamento ASC;

-- Ordinamento decrescente per piazzamento
SELECT nomefondista, piazzamento 
FROM GAREGGIA 
ORDER BY piazzamento DESC;

--------------------------------------------------------------------------

-- # PUNTO 7: Inserire in GARA il record: (Red, Ginevra, Svizzera, NULL).
-- Nota: richiede che il campo lunghezza consenta valori NULL.

ALTER TABLE GARA MODIFY lunghezza INT NULL;

INSERT INTO GARA (nome, luogo, nazione, lunghezza) 
VALUES ('Red', 'Ginevra', 'Svizzera', NULL);

--------------------------------------------------------------------------

-- # PUNTO 8: Modificare una istanza della tabella GARA impostando Lunghezza = 12 per la pista Black.

UPDATE GARA 
SET lunghezza = 12 
WHERE nome = 'Black';

--------------------------------------------------------------------------

-- # PUNTO 9: Cercare in GAREGGIA tutti gli atleti che si sono piazzati secondi.

SELECT nomefondista, nomegara, piazzamento 
FROM GAREGGIA 
WHERE piazzamento = 2;

--------------------------------------------------------------------------

-- # PUNTO 10: Cercare in FONDISTA se sono presenti atleti il cui nome inizia con “A” e termina con “I”.

SELECT * 
FROM FONDISTA 
WHERE nome LIKE 'A%i';

--------------------------------------------------------------------------

-- # PUNTO 11: Cercare in GAREGGIA se è presente un nome di fondista che contenga la lettera “A”.

SELECT * 
FROM GAREGGIA 
WHERE nomefondista LIKE '%a%';