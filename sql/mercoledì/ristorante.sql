-----------------------------------------------------------

-- # PUNTO 1: Creare il database Ristorante e la tabella Ordinazioni

-- 1. Creazione del database Ristorante
CREATE DATABASE IF NOT EXISTS Ristorante;

-- Selezione del database appena creato
USE Ristorante;

-- 2. Creazione della tabella Ordinazioni con i relativi attributi e tipi di dato
CREATE TABLE Ordinazioni (
    id_ordine INT PRIMARY KEY,
    cameriere VARCHAR(50) NOT NULL,
    piatto VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    quantita INT NOT NULL,
    prezzo_unitario DECIMAL(10, 2) NOT NULL
);

-----------------------------------------------------------

-- # PUNTO 2: Inserire nella tabella i dati indicati

-- Inserimento dei record relativi alle ordinazioni del ristorante
INSERT INTO Ordinazioni (id_ordine, cameriere, piatto, categoria, quantita, prezzo_unitario) VALUES
(1, 'Eva Luongo', 'Pizza Margherita', 'Primo', 2, 8.00),
(2, 'Annalisa Rossi', 'Tiramisu', 'Dolce', 2, 6.00),
(3, 'Lorenzo Lario', 'Risotto ai funghi', 'Primo', 3, 11.00),
(4, 'Gianni Bacio', 'Carbonara', 'Primo', 1, 10.00),
(5, 'Eva Luongo', 'Bistecca', 'Secondo', 2, 18.00),
(6, 'Annalisa Rossi', 'Panna cotta', 'Dolce', 3, 5.00),
(7, 'Lorenzo Lario', 'Spigola', 'Secondo', 1, 20.00),
(8, 'Gianni Bacio', 'Hamburger', 'Secondo', 4, 12.00),
(9, 'Eva Luongo', 'Spaghetti alle vongole', 'Primo', 2, 13.00);

-----------------------------------------------------------

-- # PUNTO 3: Visualizzare per ogni cameriere il numero totale di piatti serviti

-- Seleziona il nome del cameriere e la somma complessiva delle quantità ordinate
SELECT cameriere, SUM(quantita) AS totale_piatti_serviti
FROM Ordinazioni -- Specifica la tabella di riferimento
GROUP BY cameriere; -- Raggruppa i dati per ciascun cameriere distinto

-----------------------------------------------------------

-- # PUNTO 4: Calcolare per ciascuna categoria la quantità complessiva di piatti ordinati

-- Seleziona la categoria del piatto e la somma delle quantità ordinate per gruppo
SELECT categoria, SUM(quantita) AS quantita_complessiva
FROM Ordinazioni -- Specifica la tabella di riferimento
GROUP BY categoria; -- Raggruppa i record in base alla categoria merceologica dei piatti

-----------------------------------------------------------

-- # PUNTO 5: Mostrare le categorie per le quali la media del prezzo unitario è superiore a 10 euro

-- Seleziona la categoria e calcola la media aritmetica del prezzo unitario
SELECT categoria, AVG(prezzo_unitario) AS media_prezzo
FROM Ordinazioni -- Specifica la tabella di riferimento
GROUP BY categoria -- Raggruppa i dati per categoria
HAVING AVG(prezzo_unitario) > 10;
-- Filtra i gruppi risultanti mantenendo solo quelli la cui media dei prezzi supera i 10 euro

-----------------------------------------------------------

-- # PUNTO 6: Visualizzare solo i cameriere che hanno servito in totale più di 5 piatti

-- Seleziona il nome del cameriere e la somma delle quantità di piatti serviti
SELECT cameriere, SUM(quantita) AS totale_piatti
FROM Ordinazioni -- Specifica la tabella di riferimento
GROUP BY cameriere -- Raggruppa i record per ciascun cameriere
HAVING SUM(quantita) > 5;
-- Applica una condizione di filtro sul gruppo per selezionare solo chi supera le 5 porzioni totali

-----------------------------------------------------------

-- # PUNTO 7: Mostrare per ogni cameriere la somma totale degli incassi generati (quantità × prezzo_unitario), ma solo se tale somma supera i 50 euro

-- Seleziona il cameriere e calcola l'incasso totale moltiplicando la quantità per il prezzo unitario per ciascuna riga, sommandone poi i valori nel gruppo
SELECT cameriere, SUM(quantita * prezzo_unitario) AS totale_incassi
FROM Ordinazioni -- Specifica la tabella di riferimento
GROUP BY cameriere -- Raggruppa i dati per ciascun cameriere
HAVING SUM(quantita * prezzo_unitario) > 50;
-- Filtra i risultati mostrando esclusivamente i camerieri il cui fatturato complessivo supera i 50 euro