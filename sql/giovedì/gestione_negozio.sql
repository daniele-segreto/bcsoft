-----------------------------------------------------------

-- # PUNTO 1: Creare il database Gestione_Negozio e le tabelle Fornitori e Prodotti con attributi e tipi di dato appropriati

-- 1. Creazione del database Gestione_Negozio
CREATE DATABASE IF NOT EXISTS Gestione_Negozio;

-- Selezione del database appena creato
USE Gestione_Negozio;

-- 2. Creazione della tabella Fornitori
CREATE TABLE Fornitori (
    id_fornitore INT PRIMARY KEY,
    nome_fornitore VARCHAR(50) NOT NULL,
    citta VARCHAR(50) NOT NULL
);

-- 3. Creazione della tabella Prodotti con i relativi attributi e tipi di dato
CREATE TABLE Prodotti (
    id_prodotto INT PRIMARY KEY,
    nome_prodotto VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    prezzo DECIMAL(10, 2) NOT NULL,
    id_fornitore INT NOT NULL
);

-----------------------------------------------------------

-- # PUNTO 2: Inserire i dati forniti nelle tabelle

-- Inserimento dei record nella tabella Fornitori
INSERT INTO Fornitori (id_fornitore, nome_fornitore, citta) VALUES
(1, 'Alfa Srl', 'Milano'),
(2, 'Beta Srl', 'Roma'),
(3, 'Gamma Srl', 'Napoli'),
(4, 'Delta Srl', 'Torino');

-- Inserimento dei record nella tabella Prodotti
INSERT INTO Prodotti (id_prodotto, nome_prodotto, categoria, prezzo, id_fornitore) VALUES
(1, 'Laptop', 'Elettronica', 1200.00, 1),
(2, 'Stampante', 'Elettronica', 300.00, 2),
(3, 'Scrivania', 'Arredamento', 200.00, 3),
(4, 'Sedia', 'Arredamento', 100.00, 3),
(5, 'Monitor', 'Elettronica', 300.00, 2),
(6, 'Lampada', 'Illuminazione', 60.00, 4),
(7, 'Tavolo', 'Arredamento', 500.00, 4),
(8, 'Smartphone', 'Elettronica', 800.00, 1);

-----------------------------------------------------------

-- # PUNTO 3: Visualizzare i prodotti con prezzo maggiore di 500

-- Seleziona tutti i campi dei prodotti il cui prezzo supera i 500 euro
SELECT *
FROM Prodotti
WHERE prezzo > 500;

-----------------------------------------------------------

-- # PUNTO 4: Visualizzare i prodotti con prezzo minore di 300

-- Seleziona tutti i campi dei prodotti con prezzo inferiore a 300 euro
SELECT *
FROM Prodotti
WHERE prezzo < 300;

-----------------------------------------------------------

-- # PUNTO 5: Visualizzare i prodotti con prezzo maggiore o uguale a 800

-- Seleziona tutti i campi dei prodotti con prezzo maggiore o uguale a 800 euro
SELECT *
FROM Prodotti
WHERE prezzo >= 800;

-----------------------------------------------------------

-- # PUNTO 6: Visualizzare i prodotti con prezzo minore o uguale a 250

-- Seleziona tutti i campi dei prodotti con prezzo inferiore o uguale a 250 euro
SELECT *
FROM Prodotti
WHERE prezzo <= 250;

-----------------------------------------------------------

-- # PUNTO 7: Visualizzare i prodotti della categoria "Elettronica" e quelli diversi da "Illuminazione"

-- Seleziona i prodotti filtrando per categoria Elettronica o escludendo la categoria Illuminazione tramite operatore logico OR
SELECT *
FROM Prodotti
WHERE categoria = 'Elettronica' OR categoria != 'Illuminazione';

-----------------------------------------------------------

-- # PUNTO 8: Visualizzare i prodotti con prezzo non maggiore di 1000

-- Seleziona i prodotti utilizzando l'operatore di minoranza o uguaglianza (equivalente a non superiore a 1000)
SELECT *
FROM Prodotti
WHERE prezzo <= 1000;

-----------------------------------------------------------

-- # PUNTO 9: Visualizzare i prodotti con prezzo non minore di 200

-- Seleziona i prodotti utilizzando l'operatore di maggioranza o uguaglianza (equivalente a non inferiore a 200)
SELECT *
FROM Prodotti
WHERE prezzo >= 200;

-----------------------------------------------------------

-- # PUNTO 10: Visualizzare i prodotti il cui nome contiene la parola "Lamp"

-- Seleziona i prodotti sfruttando l'operatore LIKE abbinato ai caratteri jolly per il pattern matching testuale
SELECT *
FROM Prodotti
WHERE nome_prodotto LIKE '%Lamp%';

-----------------------------------------------------------

-- # PUNTO 11: Visualizzare i prodotti con prezzo compreso tra 200 e 800

-- Seleziona i prodotti filtrando l'intervallo di prezzo mediante l'operatore BETWEEN
SELECT *
FROM Prodotti
WHERE prezzo BETWEEN 200 AND 800;

-----------------------------------------------------------

-- # PUNTO 12: Visualizzare i prodotti forniti dai fornitori situati a Milano o Roma

-- Seleziona i prodotti eseguendo una JOIN con la tabella Fornitori e filtrando in base alla città tramite IN
SELECT Prodotti.*, Fornitori.nome_fornitore, Fornitori.citta
FROM Prodotti
JOIN Fornitori ON Prodotti.id_fornitore = Fornitori.id_fornitore
WHERE Fornitori.citta IN ('Milano', 'Roma');

-----------------------------------------------------------

-- # PUNTO 13: Confrontare i risultati ottenuti, spiegando in quali casi più righe soddisfano le condizioni e quali operatori restituiscono risultati esclusivi

-- SPIEGAZIONE DEI RISULTATI E DEGLI OPERATORI:

-- 1. OPERATORI DI CONFRONTO E INTERVALLO (>, <, BETWEEN, OR):
--    Restituiscono PIÙ RIGHE quando la condizione è ampia e tocca più prodotti (es. prezzi che stanno sopra o sotto una soglia).

-- 2. OPERATORE DI RICERCA TESTUALE (LIKE):
--    Restituisce risultati ESCLUSIVI basati su una parte del testo (es. parole che contengono "Lamp").

-- 3. OPERATORI RELAZIONALI E FILTRI (JOIN e IN):
--    Restituiscono SOLO i dati incrociati tra 'tabelle diverse', che rispettano criteri specifici (es. solo i fornitori di certe città).