-- Creazione e selezione del database dedicato
CREATE DATABASE IF NOT EXISTS LIBRI_FILM;
USE LIBRI_FILM;

--------------------------------------------------------------------------

-- CREAZIONE DELLE TABELLE STRUTTURALI DI BASE

CREATE TABLE LIBRO (
    id INT PRIMARY KEY,
    autore VARCHAR(50) NOT NULL,
    titolo VARCHAR(100) NOT NULL,
    anno INT NOT NULL,
    prezzo DECIMAL(10,2) NOT NULL,
    tipologia VARCHAR(50) NOT NULL
);

CREATE TABLE AUTORE (
    cognome VARCHAR(50) PRIMARY KEY,
    nazionalita VARCHAR(50) NOT NULL,
    anno_morte INT NULL
);

CREATE TABLE PERSONAGGIO (
    id_libro INT,
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_libro) REFERENCES LIBRO(id)
);

CREATE TABLE FILM (
    cod_film VARCHAR(10) PRIMARY KEY,
    titolo VARCHAR(100) NOT NULL,
    regista VARCHAR(50) NOT NULL,
    anno INT NOT NULL,
    id_libro INT,
    FOREIGN KEY (id_libro) REFERENCES LIBRO(id)
);

--------------------------------------------------------------------------

-- INSERIMENTO DEI DATI INIZIALI NELLE TABELLE

INSERT INTO LIBRO (id, autore, titolo, anno, prezzo, tipologia) VALUES
(123, 'Dante', 'Divina commedia', 1321, 25.50, 'poema'),
(769, 'Dante', 'Monarchia', 1312, 17.00, 'saggio'),
(456, 'Manzoni', 'I promessi sposi', 1825, 15.50, 'romanzo'),
(789, 'Tolkien', 'Il signore degli anelli', 1955, 30.00, 'fantasy'),
(589, 'Tolkien', 'Lo hobbit', 1937, 35.00, 'fantasy'),
(963, 'Oba', 'Death note', 2003, 5.00, 'manga'),
(753, 'Lee', 'Spiderman', 1970, 4.00, 'fumetto'),
(369, 'Rowling', 'La pietra filosofale', 1998, 25.00, 'fantasy');

INSERT INTO AUTORE (cognome, nazionalita, anno_morte) VALUES
('Dante', 'italiana', 1321),
('Manzoni', 'italiana', 1873),
('Tolkien', 'inglese', 1973),
('Oba', 'giapponese', NULL),
('Lee', 'americana', 2018),
('Rowling', 'inglese', NULL),
('Disney', 'americana', 1966);

INSERT INTO PERSONAGGIO (id_libro, nome, cognome) VALUES
(369, 'Albus', 'Silente'),
(753, 'Peter', 'Parker'),
(456, 'Renzo', 'Tramaglino'),
(789, 'Frodo', 'Baggings'),
(589, 'Bilbo', 'Baggings');

INSERT INTO FILM (cod_film, titolo, regista, anno, id_libro) VALUES
('abc', 'Harry Potter', 'Columbus', 2001, 369),
('def', 'Il signore degli anelli', 'Jackson', 2001, 789),
('xyz', 'Lo hobbit', 'Jackson', 2012, 589),
('ghi', 'I promessi sposi', 'Nocita', 1989, 456),
('klm', 'Spiderman', 'Raimi', 2022, 753);

--------------------------------------------------------------------------

-- # PUNTO 1: Titoli dei libri pubblicati prima del 2022, ordinati per prezzo.

SELECT titolo 
FROM LIBRO 
WHERE anno < 2022 
ORDER BY prezzo ASC;

--------------------------------------------------------------------------

-- # PUNTO 2: Titoli dei libri pubblicati a partire dal 1700.

SELECT titolo 
FROM LIBRO 
WHERE anno >= 1700;

--------------------------------------------------------------------------

-- # PUNTO 3: ID e titolo dei libri per cui non sono stati girati film.

SELECT id, titolo 
FROM LIBRO 
WHERE id NOT IN (SELECT id_libro FROM FILM WHERE id_libro IS NOT NULL);

-- commentato:
SELECT id, titolo -- 1. Chiedo al database di estrarre solo l'ID e il titolo...
FROM LIBRO -- 2. ...pescando direttamente dalla tabella principale di tutti i libri.
WHERE id NOT IN ( -- 3. FILTRO DI ESCLUSIONE: Voglio solo i libri il cui ID NON è presente nella lista che segue...
    SELECT id_libro -- 4. ...estraggo tutti gli ID dei libri associati ai film'...
    FROM FILM -- 5. ...dalla tabella dei film...
    WHERE id_libro IS NOT NULL -- 6. ...avendo cura di escludere eventuali spazi vuoti (NULL) per pulire il confronto.
);

--------------------------------------------------------------------------

-- # PUNTO 4: Cognome degli autori di tutti i libri, ordinati alfabeticamente e senza ripetizioni.

SELECT DISTINCT autore 
FROM LIBRO 
ORDER BY autore ASC;

--------------------------------------------------------------------------

-- # PUNTO 5: Cognomi degli autori non italiani, ordinati alfabeticamente.

SELECT cognome 
FROM AUTORE 
WHERE nazionalita != 'italiana' 
ORDER BY cognome ASC;

--------------------------------------------------------------------------

-- # PUNTO 6: Registi di film tratti da libri scritti da autori americani.

SELECT DISTINCT FILM.regista 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
JOIN AUTORE ON LIBRO.autore = AUTORE.cognome
WHERE AUTORE.nazionalita = 'americana';

-- commentato
SELECT DISTINCT FILM.regista -- 1. Estrae i nomi dei registi senza duplicati
FROM FILM -- 2. Parte dall'elenco generale dei film
JOIN LIBRO -- 3. Unisce la tabella dei libri...
    ON FILM.id_libro = LIBRO.id -- ...tramite il codice identificativo del libro associato
JOIN AUTORE -- 4. Unisce la tabella degli autori...
    ON LIBRO.autore = AUTORE.cognome -- ...abbinando l'autore del libro alla sua anagrafica
WHERE AUTORE.nazionalita = 'americana'; -- 5. Filtra e mantiene solo i film i cui autori sono americani

--------------------------------------------------------------------------

-- # PUNTO 7: Anno di pubblicazione e titolo del libro più antico.

SELECT anno, titolo 
FROM LIBRO 
ORDER BY anno ASC 
LIMIT 1;
-- limite max di righe, primo risultato
-- restiruisce soltanto la prima riga

--------------------------------------------------------------------------

-- # PUNTO 8: Titoli dei libri di autori ancora in vita.

SELECT LIBRO.titolo 
FROM LIBRO
JOIN AUTORE ON LIBRO.autore = AUTORE.cognome
WHERE AUTORE.anno_morte IS NULL;

-- commentato:
SELECT LIBRO.titolo -- 1. Estrae i titoli dei libri
FROM LIBRO -- 2. Parte dalla tabella principale dei libri
JOIN AUTORE -- 3. Unisce la tabella degli autori...
    ON LIBRO.autore = AUTORE.cognome -- ...collegando l'autore del libro alla sua anagrafica
WHERE AUTORE.anno_morte IS NULL; -- 4. Filtra e mantiene solo i libri scritti da autori che non hanno una data di morte (ancora in vita)

--------------------------------------------------------------------------

-- # PUNTO 9: Titoli dei libri di autori non più in vita.

SELECT LIBRO.titolo 
FROM LIBRO
JOIN AUTORE ON LIBRO.autore = AUTORE.cognome
WHERE AUTORE.anno_morte IS NOT NULL;

-- commentato:
SELECT LIBRO.titolo -- 1. Estrae i titoli dei libri
FROM LIBRO -- 2. Parte dalla tabella principale dei libri
JOIN AUTORE -- 3. Unisce la tabella degli autori...
    ON LIBRO.autore = AUTORE.cognome -- ...collegando l'autore del libro alla sua anagrafica
WHERE AUTORE.anno_morte IS NOT NULL; -- 4. Filtra e mantiene solo i libri scritti da autori che hanno una data di morte (non più in vita)

--------------------------------------------------------------------------

-- # PUNTO 10: Titoli dei film tratti da libri di tipo fumetto.

SELECT FILM.titolo 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
WHERE LIBRO.tipologia = 'fumetto';

--------------------------------------------------------------------------

-- # PUNTO 11: Film con titolo che inizia per “H”.

SELECT * 
FROM FILM 
WHERE titolo LIKE 'H%';

--------------------------------------------------------------------------

-- # PUNTO 12: Romanzi con la parola “Sposi” nel titolo.

SELECT * 
FROM LIBRO 
WHERE tipologia = 'romanzo' AND titolo LIKE '%Sposi%';

--------------------------------------------------------------------------

-- # PUNTO 13: Manga con lettera “t” nel titolo.

SELECT * 
FROM LIBRO 
WHERE tipologia = 'manga' AND titolo LIKE '%t%';

--------------------------------------------------------------------------

-- # PUNTO 14: Fumetti il cui titolo termina per “man”.

SELECT * 
FROM LIBRO 
WHERE tipologia = 'fumetto' AND titolo LIKE '%man';

--------------------------------------------------------------------------

-- # PUNTO 15: Titolo, regista e anno dei film tratti dal libro “Lo hobbit”.

SELECT FILM.titolo, FILM.regista, FILM.anno 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
WHERE LIBRO.titolo = 'Lo hobbit';

--------------------------------------------------------------------------

-- # PUNTO 16: Titoli dei fantasy pubblicati dopo il 1900 che contengono la stringa “gno”.

SELECT titolo 
FROM LIBRO 
WHERE tipologia = 'fantasy' AND anno > 1900 AND titolo LIKE '%gno%';

--------------------------------------------------------------------------

-- # PUNTO 17: Romanzi di Manzoni con film realizzato, rinominando i campi “titolo libro” e “titolo film”.

SELECT LIBRO.titolo AS "titolo libro", FILM.titolo AS "titolo film"
FROM LIBRO
JOIN FILM ON LIBRO.id = FILM.id_libro
WHERE LIBRO.autore = 'Manzoni' AND LIBRO.tipologia = 'romanzo';

--------------------------------------------------------------------------

-- # PUNTO 18: Titoli dei libri di Tolkien e nomi/cognomi dei personaggi.

SELECT LIBRO.titolo, PERSONAGGIO.nome, PERSONAGGIO.cognome 
FROM LIBRO
JOIN PERSONAGGIO ON LIBRO.id = PERSONAGGIO.id_libro
WHERE LIBRO.autore = 'Tolkien';

--------------------------------------------------------------------------

-- # PUNTO 19: Libri in cui compare il personaggio Albus Silente.

SELECT LIBRO.* 
FROM LIBRO
JOIN PERSONAGGIO ON LIBRO.id = PERSONAGGIO.id_libro
WHERE PERSONAGGIO.nome = 'Albus' AND PERSONAGGIO.cognome = 'Silente';

--------------------------------------------------------------------------

-- # PUNTO 20: Fantasy in cui è presente Bilbo Baggings.

SELECT LIBRO.* 
FROM LIBRO
JOIN PERSONAGGIO ON LIBRO.id = PERSONAGGIO.id_libro
WHERE LIBRO.tipologia = 'fantasy' AND PERSONAGGIO.nome = 'Bilbo' AND PERSONAGGIO.cognome = 'Baggings';

--------------------------------------------------------------------------

-- # PUNTO 21: Titolo e anno dei film il cui libro fantasy contiene un personaggio con cognome Baggings.

SELECT FILM.titolo, FILM.anno 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
JOIN PERSONAGGIO ON LIBRO.id = PERSONAGGIO.id_libro
WHERE LIBRO.tipologia = 'fantasy' AND PERSONAGGIO.cognome = 'Baggings';

--------------------------------------------------------------------------

-- # PUNTO 22: Titoli dei libri da cui è stato tratto un film.

SELECT DISTINCT LIBRO.titolo 
FROM LIBRO
JOIN FILM ON LIBRO.id = FILM.id_libro;

-- commentato:
SELECT DISTINCT LIBRO.titolo -- 1. Estrae i titoli dei libri senza duplicati
FROM LIBRO -- 2. Parte dall'elenco generale dei libri
JOIN FILM -- 3. Unisce la tabella dei film...
    ON LIBRO.id = FILM.id_libro; -- ...collegando ciascun libro al rispettivo film tramite l'ID condiviso

--------------------------------------------------------------------------

-- # PUNTO 23: Numero di fantasy presenti nella tabella LIBRO.

SELECT COUNT(*) AS numero_fantasy 
FROM LIBRO 
WHERE tipologia = 'fantasy';

--------------------------------------------------------------------------

-- # PUNTO 24: Numero di film girati da Jackson, rinominando il campo “film di Jackson”.

SELECT COUNT(*) AS "film di Jackson" 
FROM FILM 
WHERE regista = 'Jackson';

--------------------------------------------------------------------------

-- # PUNTO 25: Nomi e cognomi dei personaggi del film “I promessi sposi”.

SELECT PERSONAGGIO.nome, PERSONAGGIO.cognome 
FROM PERSONAGGIO
JOIN LIBRO ON PERSONAGGIO.id_libro = LIBRO.id
JOIN FILM ON LIBRO.id = FILM.id_libro
WHERE FILM.titolo = 'I promessi sposi';

--------------------------------------------------------------------------

-- # PUNTO 26: Titolo, regista e nome del libro dei film prodotti dal 2000 al 2002, rinominando i campi rispettivamente in “titolo libro” e “titolo film”.

SELECT FILM.titolo AS "titolo film", FILM.regista, LIBRO.titolo AS "titolo libro"
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
WHERE FILM.anno BETWEEN 2000 AND 2002;

--------------------------------------------------------------------------

-- # PUNTO 27: Titoli dei film tratti da libri i cui autori sono inglesi o americani.

SELECT FILM.titolo 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
JOIN AUTORE ON LIBRO.autore = AUTORE.cognome
WHERE AUTORE.nazionalita IN ('inglese', 'americana');

--------------------------------------------------------------------------

-- # PUNTO 28: Aggiungere un campo alla tabella PERSONAGGIO chiamato “campo_vuoto” di tipo VARCHAR(10).

ALTER TABLE PERSONAGGIO 
ADD COLUMN campo_vuoto VARCHAR(10);

--------------------------------------------------------------------------

-- # PUNTO 29: Nomi dei libri e genere in cui compare Peter Parker.

SELECT LIBRO.titolo, LIBRO.tipologia 
FROM LIBRO
JOIN PERSONAGGIO ON LIBRO.id = PERSONAGGIO.id_libro
WHERE PERSONAGGIO.nome = 'Peter' AND PERSONAGGIO.cognome = 'Parker';

--------------------------------------------------------------------------

-- # PUNTO 30: Nomi dei film di fumetti scritti da autori asiatici.

SELECT FILM.titolo 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
JOIN AUTORE ON LIBRO.autore = AUTORE.cognome
WHERE LIBRO.tipologia = 'fumetto' AND AUTORE.nazionalita = 'giapponese';
-- Nessun autore giapponese/asiatico è associato a un film

--------------------------------------------------------------------------

-- # PUNTO 31: Titoli dei film e nomi dei personaggi, con regista Columbus.

SELECT FILM.titolo, PERSONAGGIO.nome, PERSONAGGIO.cognome 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
JOIN PERSONAGGIO ON LIBRO.id = PERSONAGGIO.id_libro
WHERE FILM.regista = 'Columbus';

--------------------------------------------------------------------------

-- # PUNTO 32: Titolo del libro più costoso.

SELECT titolo 
FROM LIBRO 
ORDER BY prezzo DESC 
LIMIT 1;
-- limite max di righe, primo risultato
-- restiruisce soltanto la prima riga

--------------------------------------------------------------------------

-- # PUNTO 33: Nomi e cognomi di tutti i personaggi dei libri fantasy.

SELECT PERSONAGGIO.nome, PERSONAGGIO.cognome 
FROM PERSONAGGIO
JOIN LIBRO ON PERSONAGGIO.id_libro = LIBRO.id
WHERE LIBRO.tipologia = 'fantasy';

--------------------------------------------------------------------------

-- # PUNTO 34: Libri che non hanno i rispettivi personaggi principali nella tabella PERSONAGGIO.

SELECT * 
FROM LIBRO 
WHERE id NOT IN (SELECT id_libro FROM PERSONAGGIO WHERE id_libro IS NOT NULL);

-- commentato:
SELECT * -- 1. Seleziona tutte le colonne dei record corrispondenti
FROM LIBRO -- 2. Parte dall'elenco generale dei libri
WHERE id NOT IN ( -- 3. Filtra escludendo i libri il cui ID è presente nella lista sottostante...
    SELECT id_libro 
    FROM PERSONAGGIO 
    WHERE id_libro IS NOT NULL -- 4. ...selezionando tutti gli ID dei libri associati ai personaggi (escludendo i valori vuoti)
);

-- 1. La sottoquery (Subquery): Estrae tutti gli identificativi dei libri (id_libro) presenti nella tabella PERSONAGGIO, assicurandosi di scartare eventuali valori vuoti (IS NOT NULL) per pulire il confronto.

-- 2. Il filtro NOT IN: Esamina la tabella principale LIBRO e seleziona unicamente quei libri il cui codice (id) non è incluso nella lista ricavata dalla sottoquery. In questo modo otteniamo l'elenco completo dei volumi che risultano "orfani" di personaggi all'interno del database.

--------------------------------------------------------------------------

-- # PUNTO 35: Titolo del film in cui compare Frodo e indicazione del genere del libro.

SELECT FILM.titolo, LIBRO.tipologia 
FROM FILM
JOIN LIBRO ON FILM.id_libro = LIBRO.id
JOIN PERSONAGGIO ON LIBRO.id = PERSONAGGIO.id_libro
WHERE PERSONAGGIO.nome = 'Frodo';

--------------------------------------------------------------------------

-- # PUNTO 36: Numero di autori non italiani.

SELECT COUNT(*) AS autori_non_italiani 
FROM AUTORE 
WHERE nazionalita != 'italiana';

--------------------------------------------------------------------------

-- # PUNTO 37: Numero di manga presenti nel database.

SELECT COUNT(*) AS numero_manga 
FROM LIBRO 
WHERE tipologia = 'manga';

--------------------------------------------------------------------------

-- # PUNTO 38: Numero di manga senza film correlato.

SELECT COUNT(*) AS manga_senza_film 
FROM LIBRO
WHERE LIBRO.tipologia = 'manga' AND LIBRO.id NOT IN (SELECT id_libro FROM FILM WHERE id_libro IS NOT NULL);

SELECT COUNT(*) AS manga_senza_film -- 1. Conta il numero totale di elementi trovati e assegna un nome al risultato
FROM LIBRO -- 2. Parte dall'elenco generale dei libri
WHERE LIBRO.tipologia = 'manga' -- 3. Filtra e seleziona unicamente i volumi di tipologia "manga"
    AND LIBRO.id NOT IN ( -- 4. E contemporaneamente esclude i manga il cui ID compare nella lista sottostante...
        SELECT id_libro 
        FROM FILM 
        WHERE id_libro IS NOT NULL -- 5. ...estrazione degli ID di tutti i libri che hanno un film associato
    );

--------------------------------------------------------------------------

-- # PUNTO 39: Titoli dei film girati da Jackson con anno di uscita rinominato “anno di uscita”.

SELECT titolo, anno AS "anno di uscita" 
FROM FILM 
WHERE regista = 'Jackson';

--------------------------------------------------------------------------

-- # PUNTO 40: Numero di libri scritti da Dante.

SELECT COUNT(*) AS libri_di_dante 
FROM LIBRO 
WHERE autore = 'Dante';