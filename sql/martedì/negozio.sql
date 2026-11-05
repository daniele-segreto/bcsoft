---------- ESERCIZIO 1 ----------

-- Creare un nuovo database denominato negozio specificando il set di caratteri utf8mb4. [tramite query SQL]
CREATE DATABASE negozio CHARACTER SET utf8mb4;

-- Verificare che il database sia stato creato correttamente e che compaia nell’elencodei database presenti in phpMyAdmin. [tramite interfaccia di phpMyAdmin]

-- Successivamente creare un secondo database chiamato test_db, questa volta senzaspecificare alcun set di caratteri. [tramite query SQL]
CREATE DATABASE test_db;

-- Una volta creato, modificare il suo set di caratteri impostandolo su latin1 e verificareche la modifica sia stata applicata correttamente. [tramite query SQL + interfaccia diphpMyAdmin per la verifica]
ALTER DATABASE test_db CHARACTER SET latin1

-- Infine, procedere con l’eliminazione del database test_db e accertarsi che non siapiù presente nell’elenco dei database disponibili. [tramite query SQL]
DROP DATABASE IF EXISTS test_db;
SHOW DATABASES;


---------- ESERCIZIO 2 ----------

-- All’interno del database negozio, creare due tabelle collegate tra loro attraverso vincoli intra e inter relazionali.

-- Usa il database di lavoro
USE negozio;

-- La prima tabella, denominata Categorie, dovrà contenere due campi: ID_categoria(di tipo INT, chiave primaria, non nullo) e nome_categoria (di tipo VARCHAR(50), non nullo e con vincolo di unicità). [tramite query SQL]

-- Creazione della prima tabella: Categorie
CREATE TABLE Categorie (
    -- Campo ID di tipo INT, non nullo, che funge da chiave primaria
    ID_categoria INT NOT NULL,
    
    -- Campo nome della categoria di tipo VARCHAR(50), non nullo e con vincolo di unicità
    nome_categoria VARCHAR(50) NOT NULL,
    
    -- Definizione del vincolo intra-relazionale di chiave primaria
    PRIMARY KEY (ID_categoria),
    
    -- Definizione del vincolo di unicità sul nome della categoria
    UNIQUE (nome_categoria)
);

-- La seconda tabella, denominata Prodotti, dovrà contenere i campi ID_prodotto (di tipo INT, chiave primaria, non nullo), nome_prodotto (di tipo VARCHAR(50), non nullo), prezzo (di tipo DECIMAL) e ID_categoria (di tipo INT). All’interno dellatabella Prodotti, creare un vincolo inter-relazionale che colleghi il campoID_categoria con il campo ID_categoria della tabella Categorie, impostando laregola ON DELETE RESTRICT e ON UPDATE CASCADE. [tramite query SQL]

-- Creazione della seconda tabella: Prodotti
CREATE TABLE Prodotti (
    -- Campo ID_prodotto di tipo INT, chiave primaria, non nullo
    ID_prodotto INT NOT NULL,
    
    -- Campo nome_prodotto di tipo VARCHAR(50), non nullo
    nome_prodotto VARCHAR(50) NOT NULL,
    
    -- Campo prezzo di tipo DECIMAL
    -- Può contenere numeri con un massimo di 8 cifre per la parte intera e 2 cifre per i centesimi
    prezzo DECIMAL(10, 2),
    
    -- Campo ID_categoria di tipo INT per la gestione della relazione
    ID_categoria INT NOT NULL,
    
    -- Definizione del vincolo intra-relazionale di chiave primaria
    PRIMARY KEY (ID_prodotto),
    
    -- Definizione del vincolo inter-relazionale (Foreign Key) 
    -- che collega ID_categoria alla tabella Categorie con le regole richieste
    FOREIGN KEY (ID_categoria) 
    REFERENCES Categorie(ID_categoria)
    -- Regola di integrità: blocca la cancellazione della categoria se vi sono prodotti collegati
    ON DELETE RESTRICT
    -- Regola di integrità: propaga automaticamente le modifiche dell'ID categoria ai prodotti associati
    ON UPDATE CASCADE
);

-- Una volta create le due tabelle, verificare la corretta presenza dei vincoli. [tramiteinterfaccia di phpMyAdmin]

--------------------------------------------------------------------------

-- NEL CASO IN CUI NON SI RIESCONO A VISUALIZZARE LE RELAZIONI:

-- Convertire il motore di memorizzazione della tabella prodotti in InnoDB, 
-- requisito fondamentale per abilitare e gestire correttamente i vincoli di chiave esterna
ALTER TABLE prodotti ENGINE = InnoDB;

-- Convertire il motore di memorizzazione della tabella categorie in InnoDB, 
-- garantendo la compatibilità relazionale con la tabella dipendente
ALTER TABLE categorie ENGINE = InnoDB;

-- Modifica:
ALTER TABLE prodotti
ADD FOREIGN KEY (ID_categoria)
REFERENCES Categorie(ID_categoria)
ON DELETE RESTRICT
ON UPDATE CASCADE;


-- ALTERNATIVA STABILE:
-- Vai sul fule my.ini e motifica (togli/metti) i punto e virgola -->

-- ;default_storage_engine=MYISAM ;messo il punto e virgola
-- default_storage_engine=InnoDB ;tolto il punto e virgola