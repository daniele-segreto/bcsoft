-- 1. Creazione ed eventuale pulizia del database di prova
DROP DATABASE IF EXISTS biblioteca_db;
CREATE DATABASE biblioteca_db;
USE biblioteca_db;


-- 2. Creazione della Tabella Categorie
CREATE TABLE Categorie (
    id INT PRIMARY KEY,
    nome_categoria VARCHAR(50)
) ENGINE=InnoDB;


-- 3. Inserimento dei dati nelle Categorie
INSERT INTO Categorie (id, nome_categoria) VALUES
(1, 'Informatica'),
(2, 'Matematica'),
(3, 'Letteratura'),
(4, 'Fantascienza');


-- 4. Creazione della Tabella Libri (con chiave esterna logica verso Categorie)
CREATE TABLE Libri (
    id_libro INT PRIMARY KEY,
    titolo VARCHAR(100),
    anno INT,
    id_categoria INT
) ENGINE=InnoDB;


-- 5. Inserimento dei dati nei Libri 
-- (Nota: la categoria 4 'Fantascienza' non è associata a nessun libro, 
--  mentre alcuni libri avranno id_categoria NULL o non valido per testare l'Inner Join)
INSERT INTO Libri (id_libro, titolo, anno, id_categoria) VALUES
(101, 'Fondamenti di Programmazione', 2023, 1),
(102, 'Analisi Matematica I', 2021, 2),
(103, 'I Promessi Sposi', 1840, 3),
(104, 'Algoritmi e Strutture Dati', 2024, 1),
(105, 'Manuale di Reti', 2022, 1),
(106, 'Poesie Scelte', 1950, 3),
(107, 'Fisica Quantistica Base', 2020, NULL); -- Libro senza categoria associata


-- 6. Query di test con INNER JOIN
SELECT 
    L.titolo,          -- Seleziona il campo 'titolo' attingendo dalla tabella Libri
    L.anno,            -- Seleziona il campo 'anno' di pubblicazione sempre dalla tabella Libri
    C.nome_categoria   -- Seleziona il nome del genere letterario dalla tabella Categorie
FROM Libri L           -- Indica la tabella di partenza denominata 'Libri', associandole l'alias 'L'
INNER JOIN Categorie C -- Applica l'operatore di congiunzione interna con la tabella 'Categorie' (alias 'C')
ON L.id_categoria = C.id; -- Stabilisce il criterio di corrispondenza logica: il codice categoria del libro deve coincidere con l'ID della categoria


-- 7. Query di test con LEFT JOIN
USE biblioteca_db;
-- In questo modo la tabella 'Libri' (a sinistra) manterrà tutti i suoi record,
-- inclusi i libri che non hanno una categoria associata (che stamperanno NULL).
SELECT 
    L.titolo,          -- Seleziona il titolo del libro dalla tabella di sinistra (Libri)
    L.anno,            -- Seleziona l'anno di pubblicazione del libro
    C.nome_categoria   -- Seleziona il nome della categoria (se assente, restituirà NULL)
FROM Libri L           -- Tabella di sinistra: priorità assoluta a tutti i libri
LEFT JOIN Categorie C  -- Applica la join esterna sinistra con la tabella Categorie
ON L.id_categoria = C.id; -- Criterio di corrispondenza logica tra le tabelle


-- 8. Esempio di simulazione del FULL JOIN in MySQL/MariaDB
-- Unisce i risultati di una LEFT JOIN e di una RIGHT JOIN tramite l'operatore UNION (Parte di sinistra e parte di destra)
SELECT 
    L.titolo,
    L.anno,
    C.nome_categoria
FROM Libri L
LEFT JOIN Categorie C 
ON L.id_categoria = C.id

UNION

SELECT 
    L.titolo,
    L.anno,
    C.nome_categoria
FROM Libri L
RIGHT JOIN Categorie C 
ON L.id_categoria = C.id;