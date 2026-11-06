-----------------------------------------------------------

-- # PUNTO 1: Creare il database Azienda e la tabella Dipendenti con gli attributi e i tipi di dato appropriati

-- 1. Creazione del database Azienda
CREATE DATABASE IF NOT EXISTS Azienda;

-- Selezione del database appena creato
USE Azienda;

-- 2. Creazione della tabella Dipendenti con i relativi tipi di dato
CREATE TABLE Dipendenti (
    id_dipendente INT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    reparto VARCHAR(50) NOT NULL,
    stipendio DECIMAL(10, 2) NOT NULL,
    anni_servizio INT NOT NULL
);

-----------------------------------------------------------

-- # PUNTO 2: Inserire nella tabella i dati indicati

-- Inserimento dei record relativi ai dipendenti dell'azienda
INSERT INTO Dipendenti (id_dipendente, nome, reparto, stipendio, anni_servizio) VALUES
(1, 'Gianfranco', 'Amministrazione', 2300.00, 5),
(2, 'Carla', 'Amministrazione', 1700.00, 2),
(3, 'Erika', 'Produzione', 2200.00, 10),
(4, 'Davide', 'Produzione', 1100.00, 1),
(5, 'Raffaele', 'Produzione', 2400.00, 8),
(6, 'Francesco', 'Vendite', 1200.00, 3),
(7, 'Martina', 'Vendite', 1600.00, 4);

-----------------------------------------------------------

-- # PUNTO 3: Calcolare il numero complessivo dei dipendenti dell'azienda

-- Seleziona il conteggio totale dei record presenti nella tabella Dipendenti
SELECT COUNT(*) AS totale_dipendenti
FROM Dipendenti;
-- Utilizza la funzione di aggregazione COUNT per determinare il numero totale dei dipendenti aziendali

-----------------------------------------------------------

-- # PUNTO 4: Determinare la somma totale degli stipendi erogati

-- Seleziona la somma complessiva di tutti gli stipendi mensili presenti nella tabella
SELECT SUM(stipendio) AS somma_stipendi
FROM Dipendenti;
-- Utilizza la funzione di aggregazione SUM per calcolare il costo totale delle retribuzioni aziendali

-----------------------------------------------------------

-- # PUNTO 5: Individuare lo stipendio più alto e quello più basso

-- Seleziona contemporaneamente il valore massimo e il valore minimo della colonna stipendio
SELECT MAX(stipendio) AS stipendio_massimo, MIN(stipendio) AS stipendio_minimo
FROM Dipendenti;
-- Utilizza le funzioni MAX e MIN per identificare rispettivamente la retribuzione più alta e quella più bassa tra il personale

-----------------------------------------------------------

-- # PUNTO 6: Calcolare la media degli stipendi percepiti

-- Seleziona la media aritmetica dei valori di stipendio presenti nella tabella
SELECT AVG(stipendio) AS stipendio_medio
FROM Dipendenti;
-- Utilizza la funzione di aggregazione AVG per determinare lo stipendio medio erogato dall'azienda

-----------------------------------------------------------

-- # PUNTO 7: Calcolare la deviazione standard degli stipendi

-- Seleziona la deviazione standard campionaria o globale degli stipendi per analizzarne la dispersione
SELECT STDDEV(stipendio) AS deviazione_standard_stipendi
FROM Dipendenti;
-- Utilizza la funzione di aggregazione STDDEV per misurare quanto i singoli stipendi si discostano dalla media aziendale

-----------------------------------------------------------

-- # PUNTO 8: Raggruppare i dipendenti per reparto e mostrare il valore medio degli stipendi in ciascun reparto

-- Seleziona il reparto e calcola la media degli stipendi per ciascun gruppo omogeneo
SELECT reparto, AVG(stipendio) AS stipendio_medio_reparto
FROM Dipendenti
GROUP BY reparto;
-- Raggruppa i record in base alla colonna reparto per restituire una sintesi statistica separata per ogni settore aziendale

-----------------------------------------------------------

-- # PUNTO 9: Confrontare i risultati ottenuti, spiegando in quali casi i valori restituiti sono unici (una sola riga) e in quali casi derivano da raggruppamenti di dati

-- CASO A: SENZA GROUP BY (Punti 3, 4, 5, 6, 7)
-- ---------------------------------------------------------
-- • OUTPUT         : 1 sola riga
-- • COME OPERA     : Analizza l'INTERA tabella in blocco unico
-- • ESEMPIO        : Totale dipendenti, somma, media o max/min aziendale

-- CASO B: CON GROUP BY (Punto 8)
-- ---------------------------------------------------------
-- • OUTPUT         : Più righe
-- • COME OPERA     : Suddivide i dati per categoria (es. i reparti)
-- • ESEMPIO        : Stipendio medio calcolato separatamente per ogni reparto