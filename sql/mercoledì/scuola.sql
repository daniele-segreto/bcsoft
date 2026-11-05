-- # PUNTO 1: Creare il database e le due tabelle

-- 1. Creazione del database Scuola
CREATE DATABASE IF NOT EXISTS Scuola;

-- Selezione del database appena creato
USE Scuola;

-- 2. Creazione della tabella Classi
CREATE TABLE Classi (
    id_classe INT PRIMARY KEY,
    sezione VARCHAR(10) NOT NULL
);

-- 3. Creazione della tabella Studenti (senza FOREIGN KEY per rispettare la traccia)
CREATE TABLE Studenti (
    id_studente INT AUTO_INCREMENT PRIMARY KEY,
    id_classe INT,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL
);

-----------------------------------------------------------

-- # PUNTO 2: Inserire i dati indicati in ciascuna tabella

-- 1. Inserimento dei dati nella tabella Classi
INSERT INTO Classi (id_classe, sezione) VALUES
(1, '1A'),
(2, '2B'),
(4, '3C');

-- 2. Inserimento dei dati nella tabella Studenti
INSERT INTO Studenti (id_classe, nome, cognome) VALUES
(1, 'Aldo', 'Kennedy'),
(2, 'Monica', 'Napolitano'),
(3, 'Sabatino', 'Lunare');

-----------------------------------------------------------

-- # PUNTO 3: Applicare una NATURAL JOIN per visualizzare nomi, cognomi e sezioni
SELECT nome, cognome, sezione
FROM Studenti
NATURAL JOIN Classi; -- Unisce automaticamente le tabelle sulla colonna comune (id_classe) restituendo solo i record con corrispondenza esatta

-----------------------------------------------------------

-- # PUNTO 4: Applicare una INNER JOIN per visualizzare nomi, cognomi e sezioni
SELECT Studenti.nome, Studenti.cognome, Classi.sezione
FROM Studenti
INNER JOIN Classi ON Studenti.id_classe = Classi.id_classe; -- Unisce le tabelle in modo esplicito specificando la condizione di uguaglianza tra le chiavi

-----------------------------------------------------------

-- # PUNTO 5: Confrontare i risultati ottenuti e sottolineare la differenza tra l’uso diNATURAL JOIN e INNER JOIN sulla base dei dati restituiti e della sintassi utilizzata

-- Risultato: identico

-- Differenze: A) la sintassi (NATURAL / INNER ... ON)
--             B) NATURAL è meno sicura per i progetti più complessi