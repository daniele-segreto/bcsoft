-----------------------------------------------------------

-- # PUNTO 1: Creare il database Officina e le tabelle Interventi2024 e Interventi2025 con attributi e tipi di dato appropriati

-- 1. Creazione del database Officina
CREATE DATABASE IF NOT EXISTS Officina;

-- Selezione del database appena creato
USE Officina;

-- 2. Creazione della tabella Interventi2024
CREATE TABLE Interventi2024 (
    id_intervento INT PRIMARY KEY,
    descrizione VARCHAR(100) NOT NULL,
    ore_lavoro INT NOT NULL,
    costo_orario DECIMAL(10, 2) NOT NULL,
    costo_ricambi DECIMAL(10, 2) NOT NULL
);

-- 3. Creazione della tabella Interventi2025 con i relativi attributi e tipi di dato
CREATE TABLE Interventi2025 (
    id_intervento INT PRIMARY KEY,
    descrizione VARCHAR(100) NOT NULL,
    ore_lavoro INT NOT NULL,
    costo_orario DECIMAL(10, 2) NOT NULL,
    costo_ricambi DECIMAL(10, 2) NOT NULL
);

-----------------------------------------------------------

-- # PUNTO 2: Inserire nelle due tabelle i dati forniti

-- Inserimento dei record nella tabella Interventi2024
INSERT INTO Interventi2024 (id_intervento, descrizione, ore_lavoro, costo_orario, costo_ricambi) VALUES
(1, 'Tagliando auto', 2, 40.00, 60.00),
(2, 'Sostituzione freni', 3, 35.00, 120.00),
(3, 'Revisione motore', 5, 50.00, 250.00),
(4, 'Cambio olio', 1, 30.00, 25.00),
(5, 'Riparazione carrozzeria', 6, 45.00, 200.00);

-- Inserimento dei record nella tabella Interventi2025
INSERT INTO Interventi2025 (id_intervento, descrizione, ore_lavoro, costo_orario, costo_ricambi) VALUES
(3, 'Revisione motore', 5, 55.00, 270.00),
(4, 'Cambio olio', 1, 32.00, 25.00),
(5, 'Riparazione carrozzeria', 6, 48.00, 220.00),
(6, 'Sostituzione batteria', 2, 42.00, 80.00),
(7, 'Pulizia iniettori', 3, 38.00, 60.00);

-----------------------------------------------------------

-- # PUNTO 3: Calcolare per ogni intervento del 2024 il costo complessivo (ore di lavoro × costo orario + costo ricambi)

-- Seleziona la descrizione e calcola la spesa totale per ciascun intervento del 2024
SELECT descrizione, (ore_lavoro * costo_orario + costo_ricambi) AS costo_complessivo
FROM Interventi2024;

-----------------------------------------------------------

-- # PUNTO 4: Calcolare, per gli interventi del 2024, la differenza tra il costo complessivo e il solo costo dei ricambi

-- Seleziona la descrizione e calcola la differenza sottraendo il costo ricambi dal costo totale
SELECT descrizione, ((ore_lavoro * costo_orario + costo_ricambi) - costo_ricambi) AS differenza_senza_ricambi
FROM Interventi2024;

-----------------------------------------------------------

-- # PUNTO 5: Determinare il doppio del costo orario medio degli interventi del 2024

-- Calcola la media aritmetica del costo orario nel 2024 e la moltiplica per due
SELECT (AVG(costo_orario) * 2) AS doppio_costo_orario_medio
FROM Interventi2024;

-----------------------------------------------------------

-- # PUNTO 6: Calcolare, per ciascun intervento del 2024, il rapporto tra costo dei ricambi e ore di lavoro

-- Seleziona la descrizione e calcola il rapporto di spesa dei ricambi per ogni ora lavorata
SELECT descrizione, (costo_ricambi / ore_lavoro) AS rapporto_ricambi_ore
FROM Interventi2024;

-----------------------------------------------------------

-- # PUNTO 7: Individuare, per ciascun intervento del 2024, quante ore intere sono comprese nel totale (divisione intera) e il resto della divisione tra costo totale e 7

-- Seleziona la descrizione dell'intervento
SELECT descrizione, 
    FLOOR(ore_lavoro) AS ore_intere,  -- Estrae la parte intera delle ore lavorate tramite la funzione FLOOR (arrotondamento per difetto)
       MOD((ore_lavoro * costo_orario + costo_ricambi), 7) AS resto_costo_totale_div_7 -- Calcola il costo totale (ore * tariffa + ricambi) e ne estrae il resto della divisione intera per 7 tramite l'operatore MOD
FROM Interventi2024;

-----------------------------------------------------------

-- # PUNTO 8: Calcolare il quadrato del costo orario di ciascun intervento del 2024

-- Seleziona la descrizione e calcola la potenza al quadrato del costo orario tramite la funzione POW
SELECT descrizione, POW(costo_orario, 2) AS quadrato_costo_orario
FROM Interventi2024;

-----------------------------------------------------------

-- # PUNTO 9: Calcolare la radice quadrata del costo complessivo di ciascun intervento del 2024

-- Seleziona la descrizione ed estrae la radice quadrata del costo complessivo calcolato
SELECT descrizione, SQRT(ore_lavoro * costo_orario + costo_ricambi) AS radice_costo_complessivo
FROM Interventi2024;

-----------------------------------------------------------

-- # PUNTO 10: Visualizzare l'elenco complessivo di tutti gli interventi registrati in almeno uno dei due anni

-- Unisce i record di entrambe le tabelle eliminando i duplicati basati sulla descrizione o sull'ID
SELECT id_intervento, descrizione, ore_lavoro, costo_orario, costo_ricambi FROM Interventi2024
UNION
SELECT id_intervento, descrizione, ore_lavoro, costo_orario, costo_ricambi FROM Interventi2025;

-----------------------------------------------------------

-- # PUNTO 11: Individuare gli interventi ripetuti in entrambi gli anni

-- Seleziona tutti i campi e tutti i record dalla tabella degli interventi del 2024
SELECT *
FROM Interventi2024
WHERE descrizione -- Applica un filtro restrittivo: la riga viene mostrata solo se la descrizione...
IN (SELECT descrizione FROM Interventi2025); -- ...risulta inclusa nell'elenco di tutte le descrizioni estratte dalla tabella del 2025

-----------------------------------------------------------

-- # PUNTO 12: Visualizzare gli interventi presenti nel 2024 ma non nel 2025

-- Seleziona tutti i campi e tutti i record dalla tabella degli interventi del 2024
SELECT *
FROM Interventi2024
WHERE descrizione -- Applica un filtro di esclusione: la riga viene mostrata solo se la descrizione...
NOT IN (SELECT descrizione FROM Interventi2025); -- ...NON risulta inclusa nell'elenco delle descrizioni estratte dalla tabella del 2025

-----------------------------------------------------------

-- # PUNTO 13: Visualizzare gli interventi nuovi introdotti nel 2025

-- Seleziona tutti i campi e tutti i record dalla tabella degli interventi del 2025
SELECT *
FROM Interventi2025
WHERE descrizione -- Applica un filtro di esclusione: la riga viene mostrata solo se la descrizione...
NOT IN (SELECT descrizione FROM Interventi2024); -- ...NON risulta inclusa nell'elenco delle descrizioni estratte dalla tabella del 2024 (evidenziando i lavori nuovi introdotti)