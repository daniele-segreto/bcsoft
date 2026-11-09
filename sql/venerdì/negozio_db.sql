-- Creazione e selezione del database dedicato
CREATE DATABASE IF NOT EXISTS negozio_db;
USE negozio_db;

--------------------------------------------------------------------------

-- CREAZIONE DELLE TABELLE STRUTTURALI DI BASE

CREATE TABLE Fornitori (
    id_fornitore INT PRIMARY KEY,
    nome_fornitore VARCHAR(50) NOT NULL,
    paese VARCHAR(50) NOT NULL
);

CREATE TABLE Prodotti (
    id_prodotto INT PRIMARY KEY,
    nome_prodotto VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    prezzo DECIMAL(10,2) NOT NULL,
    id_fornitore INT,
    FOREIGN KEY (id_fornitore) REFERENCES Fornitori(id_fornitore)
);

--------------------------------------------------------------------------

-- # PUNTO 1: Inserire i dati iniziali nelle tabelle secondo le informazioni fornite sopra.

INSERT INTO Fornitori (id_fornitore, nome_fornitore, paese) VALUES
(1, 'Tech', 'Germania'),
(2, 'Print', 'Francia'),
(3, 'Tutto casa', 'Italia'),
(4, 'Mondo ufficio', 'Italia');

INSERT INTO Prodotti (id_prodotto, nome_prodotto, categoria, prezzo, id_fornitore) VALUES
(1, 'Laptop', 'Elettronica', 1200.00, 1),
(2, 'Stampante', 'Elettronica', 300.00, 2),
(3, 'Scrivania', 'Arredamento', 200.00, 3),
(4, 'Sedia', 'Arredamento', 100.00, 3);

--------------------------------------------------------------------------

-- # PUNTO 2: Inserire un nuovo prodotto direttamente, specificando tutti i campi.

INSERT INTO Prodotti (id_prodotto, nome_prodotto, categoria, prezzo, id_fornitore) 
VALUES (5, 'Tablet', 'Elettronica', 450.00, 1);

--------------------------------------------------------------------------

-- # PUNTO 3: Inserire un nuovo prodotto specificando solo alcuni campi (gli altri devono assumere valori di default).

-- Nota: richiede che la tabella consenta valori NULL o default sui campi non specificati
INSERT INTO Prodotti (id_prodotto, nome_prodotto, categoria) 
VALUES (6, 'Lampada', 'Arredamento');

--------------------------------------------------------------------------

-- # PUNTO 4: Inserire più prodotti contemporaneamente con un solo comando.

INSERT INTO Prodotti (id_prodotto, nome_prodotto, categoria, prezzo, id_fornitore) VALUES
(7, 'Cuffie', 'Elettronica', 80.00, 1),
(8, 'Libreria', 'Arredamento', 250.00, 3),
(9, 'Scanner', 'Elettronica', 150.00, 2);

--------------------------------------------------------------------------

-- # PUNTO 5: Popolare una tabella secondaria (con nome a vostra scelta) con prodotti selezionati da Prodotti tramite una query, senza specificare i campi.

-- Creazione della tabella secondaria ereditando struttura e dati con SELECT *
CREATE TABLE Tabella_Secondaria_Generica AS 
SELECT * 
FROM Prodotti;

--------------------------------------------------------------------------

-- # PUNTO 6: Popolare una tabella secondaria (con nome a vostra scelta) con 'prodotti selezionati da Prodotti', specificando gli attributi di destinazione.

-- Creazione della tabella secondaria con attributi espliciti
CREATE TABLE Tabella_Secondaria_Specifica (
    id INT,
    articolo VARCHAR(50),
    costo DECIMAL(10,2)
);

-- Popolamento specificando i campi di destinazione e di origine
INSERT INTO Tabella_Secondaria_Specifica (id, articolo, costo)
SELECT id_prodotto, nome_prodotto, prezzo
FROM Prodotti;

--------------------------------------------------------------------------

-- # PUNTO 7: Sostituire un prodotto esistente modificando solo il prezzo.

UPDATE Prodotti 
SET prezzo = 1250.00 
WHERE id_prodotto = 1;

--------------------------------------------------------------------------

-- # PUNTO 8: Sostituire completamente un record di un prodotto (tutti i campi).

UPDATE Prodotti 
SET nome_prodotto = 'Laptop Pro', categoria = 'Elettronica Avanzata', prezzo = 1300.00, id_fornitore = 1 
WHERE id_prodotto = 1;

--------------------------------------------------------------------------

-- # PUNTO 9: Eliminare solo i prodotti appartenenti a una determinata categoria.

DELETE FROM Prodotti 
WHERE categoria = 'Arredamento';

--------------------------------------------------------------------------

-- # PUNTO 10: Aggiornare tutti i prodotti aumentando il prezzo del 10%.

UPDATE Prodotti 
SET prezzo = prezzo * 1.10;

--------------------------------------------------------------------------

-- # PUNTO 11: Aggiornare solo i prodotti di una specifica categoria (es. Elettronica) aumentando il prezzo del 15%.

UPDATE Prodotti 
SET prezzo = prezzo * 1.15 
WHERE categoria = 'Elettronica';

--------------------------------------------------------------------------

-- # PUNTO 12: Aggiornare un singolo prodotto identificato dal suo id_prodotto.

UPDATE Prodotti 
SET prezzo = 350.00 
WHERE id_prodotto = 2;

--------------------------------------------------------------------------

-- # PUNTO 13: Aggiornare tutti i prodotti calcolando il prezzo come funzione matematica di un altro campo (prezzo + 50).

UPDATE Prodotti 
SET prezzo = prezzo + 50.00;

--------------------------------------------------------------------------

-- # PUNTO 14: Creare una tabella secondaria chiamata Prodotti_in_Italia e popolarla con i prodotti forniti da fornitori italiani, usando una query su Prodotti e Fornitori.

--------------------------------------------------------------------------

-- # INSERIMENTO DI SUPPORTO: Ripristino di due prodotti con fornitore italiano, persi dopo il punto 14
INSERT INTO Prodotti (id_prodotto, nome_prodotto, categoria, prezzo, id_fornitore) VALUES
(10, 'Smartphone', 'Elettronica', 500.00, 3),
(11, 'Cassettiera', 'Arredamento', 120.00, 3);

CREATE TABLE Prodotti_in_Italia AS
SELECT p.id_prodotto, p.nome_prodotto, p.categoria, p.prezzo, f.nome_fornitore, f.paese
FROM Prodotti p
JOIN Fornitori f ON p.id_fornitore = f.id_fornitore
WHERE f.paese = 'Italia';

--------------------------------------------------------------------------

-- # PUNTO 15: Creare una tabella secondaria chiamata Prodotti_Elettronici e popolarla selezionando solo i prodotti della categoria “Elettronica”, specificando i campi di destinazione.

CREATE TABLE Prodotti_Elettronici (
    codice INT,
    nome VARCHAR(50),
    prezzo_unitario DECIMAL(10,2)
);

INSERT INTO Prodotti_Elettronici (codice, nome, prezzo_unitario)
SELECT id_prodotto, nome_prodotto, prezzo
FROM Prodotti
WHERE categoria = 'Elettronica';