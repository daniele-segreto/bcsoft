-- # PUNTO 1: Creare il database e le tre tabelle

-- 1. Creazione del database Festival_di_Sanremo
CREATE DATABASE IF NOT EXISTS Festival_di_Sanremo;

-- Selezione del database appena creato
USE Festival_di_Sanremo;

-- 2. Creazione della tabella Artisti
CREATE TABLE Artisti (
    id_artista INT PRIMARY KEY,
    nome_artista VARCHAR(100) NOT NULL,
    genere VARCHAR(50) NOT NULL
);

-- 3. Creazione della tabella Canzoni (senza FOREIGN KEY formale per consentire i dati dell'esercizio)
CREATE TABLE Canzoni (
    id_canzone INT PRIMARY KEY,
    titolo_canzone VARCHAR(100) NOT NULL,
    id_artista INT NOT NULL
);

-- 4. Creazione della tabella Esibizioni (senza FOREIGN KEY formale)
CREATE TABLE Esibizioni (
    id_esibizione INT PRIMARY KEY,
    id_artista INT NOT NULL,
    data_esibizione DATE NOT NULL
);

-----------------------------------------------------------

-- # PUNTO 2: Inserire i dati indicati in ciascuna tabella

-- 1. Inserimento dei dati nella tabella Artisti
INSERT INTO Artisti (id_artista, nome_artista, genere) VALUES
(1, 'Mahmood', 'Pop'),
(2, 'Big Mama', 'Pop rap'),
(3, 'Loredana Bertè', 'Rock');

-- 2. Inserimento dei dati nella tabella Canzoni
INSERT INTO Canzoni (id_canzone, titolo_canzone, id_artista) VALUES
(1, 'Soldi', 1),
(2, 'La rabbia non ti basta', 2),
(4, 'Non credo nei miracoli', 4);

-- 3. Inserimento dei dati nella tabella Esibizioni
INSERT INTO Esibizioni (id_esibizione, id_artista, data_esibizione) VALUES
(1, 1, '2019-02-05'),
(2, 3, '2024-02-06'),
(3, 4, '2005-03-02');

-----------------------------------------------------------

-- # PUNTO 3: Applicare una FULL JOIN tra le tabelle Artisti e Canzoni per visualizzare gli artisti con le rispettive canzoni

-- Assicuriamoci di utilizzare il database corretto prima di eseguire la query
USE Festival_di_Sanremo;

SELECT Artisti.nome_artista, Canzoni.titolo_canzone
FROM Artisti
LEFT JOIN Canzoni ON Artisti.id_artista = Canzoni.id_artista
UNION
SELECT Artisti.nome_artista, Canzoni.titolo_canzone
FROM Artisti
RIGHT JOIN Canzoni ON Artisti.id_artista = Canzoni.id_artista; -- Simula la FULL JOIN combinando LEFT JOIN e RIGHT JOIN per mostrare tutti gli artisti e tutte le canzoni, anche in assenza di corrispondenza reciproca

-- # PUNTO 3(#): Applicare una FULL JOIN tra le tabelle Artisti e Canzoni per visualizzare gli artisti con le rispettive canzoni

-- Seleziona le colonne da visualizzare: il nome dell'artista e il titolo della canzone
SELECT Artisti.nome_artista, Canzoni.titolo_canzone

-- Specifica la tabella principale (di sinistra) da cui partire
FROM Artisti

-- Esegue una LEFT JOIN per includere tutti gli artisti, abbinando le canzoni e inserendo NULL se mancano corrispondenze
LEFT JOIN Canzoni ON Artisti.id_artista = Canzoni.id_artista

-- Operatore insiemistico che unisce i risultati eliminando le righe duplicate
UNION

-- Ripete la selezione delle colonne per la seconda parte della combinazione
SELECT Artisti.nome_artista, Canzoni.titolo_canzone

-- Specifica nuovamente la tabella di riferimento
FROM Artisti

-- Esegue una RIGHT JOIN per includere tutte le canzoni (tabella di destra), completando la simulazione della FULL JOIN
RIGHT JOIN Canzoni ON Artisti.id_artista = Canzoni.id_artista;

-----------------------------------------------------------

-- # PUNTO 4: Applicare una JOIN MULTIPLA tra le tabelle Artisti, Canzoni ed Esibizioni per visualizzare tutti gli artisti

USE Festival_di_Sanremo;

SELECT Artisti.nome_artista, Canzoni.titolo_canzone, Esibizioni.data_esibizione
FROM Artisti
LEFT JOIN Canzoni ON Artisti.id_artista = Canzoni.id_artista
LEFT JOIN Esibizioni ON Artisti.id_artista = Esibizioni.id_artista;

-- # PUNTO 4(#): Applicare una JOIN MULTIPLA tra le tabelle Artisti, Canzoni ed Esibizioni per visualizzare tutti gli artisti

-- Seleziona le colonne da visualizzare: il nome dell'artista, il titolo della canzone e la data dell'esibizione
SELECT Artisti.nome_artista, Canzoni.titolo_canzone, Esibizioni.data_esibizione

-- Specifica la tabella principale di partenza (la tabella dei dati anagrafici degli artisti)
FROM Artisti

-- Esegue la prima LEFT JOIN per associare la tabella delle canzoni, preservando tutti gli artisti anche in assenza di brani
LEFT JOIN Canzoni ON Artisti.id_artista = Canzoni.id_artista

-- Esegue la seconda LEFT JOIN per collegare la tabella delle esibizioni, completando la join multipla e mostrando eventuali date o valori NULL
LEFT JOIN Esibizioni ON Artisti.id_artista = Esibizioni.id_artista;

-----------------------------------------------------------

-- # PUNTO 5: Confrontare i risultati ottenuti e spiegare il funzionamento della FULL JOIN e della JOIN MULTIPLA

-- Risultato: differente in base alla logica di unione e al numero di tabelle coinvolte

-- Differenza 1: Funzionamento
-- FULL JOIN unisce due tabelle (Artisti e Canzoni) mostrando tutti i record di entrambe (tramite UNION)
-- JOIN MULTIPLA collega in sequenza tre tabelle (Artisti, Canzoni ed Esibizioni) partendo da un'unica tabella cardine

-- Differenza 2: Gestione dei dati e dei valori NULL
-- FULL JOIN offre una visione simmetrica totale gestendo i valori NULL su entrambi i lati relazionali
-- JOIN MULTIPLA preserva integralmente l'anagrafica principale (Artisti) inserendo NULL dove mancano i collegamenti nelle tabelle successive