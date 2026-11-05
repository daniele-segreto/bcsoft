-- # PUNTO 1: Creare il database e le due tabelle

-- 1. Creazione del database Club_del_cinema
CREATE DATABASE IF NOT EXISTS Club_del_cinema;

-- Selezione del database appena creato
USE Club_del_cinema;

-- 2. Creazione della tabella Registi
CREATE TABLE Registi (
    id_regista INT PRIMARY KEY,
    nome_regista VARCHAR(100) NOT NULL
);

-- 3. Creazione della tabella Film (senza FOREIGN KEY formale per consentire i dati dell'esercizio)
CREATE TABLE Film (
    id_film INT AUTO_INCREMENT PRIMARY KEY,
    id_regista INT,
    titolo VARCHAR(100) NOT NULL,
    anno INT NOT NULL
);

-----------------------------------------------------------

-- # PUNTO 2: Inserire i dati indicati in ciascuna tabella

-- 1. Inserimento dei dati nella tabella Registi
INSERT INTO Registi (id_regista, nome_regista) VALUES
(1, 'James Cameron'),
(2, 'Steven Spielberg'),
(4, 'Greta Gerwing');

-- 2. Inserimento dei dati nella tabella Film
INSERT INTO Film (id_regista, titolo, anno) VALUES
(1, 'Avatar', 2009),
(2, 'Jurassic Park', 1993),
(3, 'Inside Out 2', 2024);

-----------------------------------------------------------

-- # PUNTO 3: Applicare una LEFT JOIN tra le due tabelle per visualizzare tutti i film
SELECT Film.titolo, Film.anno, Registi.nome_regista
FROM Film
LEFT JOIN Registi ON Film.id_regista = Registi.id_regista; -- Restituisce tutti i record della tabella di sinistra (Film), associando i registi corrispondenti o NULL se non esiste corrispondenza

-----------------------------------------------------------

-- # PUNTO 4: Applicare una RIGHT JOIN tra le due tabelle per visualizzare tutti i registi
SELECT Film.titolo, Film.anno, Registi.nome_regista
FROM Film
RIGHT JOIN Registi ON Film.id_regista = Registi.id_regista; -- Restituisce tutti i record della tabella di destra (Registi), associando i film corrispondenti o NULL per i registi che non hanno film abbinati

-----------------------------------------------------------

-- # PUNTO 5: Confrontare i risultati ottenuti e sottolineare la differenza tra l’uso di LEFT JOIN e RIGHT JOIN, osservando come cambia la presenza dei record nelle due tabelle

-- Risultato: differente in base alla tabella a cui viene data priorità

-- Differenza 1:
-- LEFT JOIN privilegia la tabella di sinistra (Film)
-- RIGHT JOIN privilegia la tabella di destra (Registi)

-- DIfferenza 2: valori NULL
-- LEFT JOIN inserisce NULL dove manca il regista (nome_regista)
-- RIGHT JOIN inserisce NULL dove manca il film (titolo e anno)