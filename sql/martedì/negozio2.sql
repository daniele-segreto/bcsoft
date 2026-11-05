---------- ESERCIZIO 3 ----------

-- Nel database Negozio, già contenente le tabelle Categorie e Prodotti, creare una nuova tabella denominata Fornitori, contenente due campi (un identificativo univoco e il nome del fornitore). [tramite query SQL]
CREATE TABLE fornitori (
    ID_fornitore INT AUTO_INCREMENT PRIMARY KEY,
    nome_fornitore VARCHAR(50) NOT NULL
);

-- Successivamente, modificare la tabella aggiungendo due nuove colonne (indirizzo e partita_iva). [tramite query SQL]
ALTER TABLE fornitori 
ADD COLUMN indirizzo VARCHAR(100),
ADD COLUMN partita_iva VARCHAR(20);

-- Procedere poi con l’eliminazione della colonna indirizzo appena creata. [tramitequery SQL]
ALTER TABLE fornitori DROP COLUMN indirizzo;

-- Infine, rinominare la tabella Fornitori con il nome Fornitori_italiani. [tramite querySQL]
RENAME TABLE fornitori TO Fornitori_italiani;

-- Al termine, verificare che la tabella rinominata sia correttamente presente nel database e che le modifiche alla struttura siano state applicate. [tramite interfacciadi phpMyAdmin]


---------- ESERCIZIO 4 ----------

-- Nel database Negozio, già contenente le tabelle Categorie, Prodotti e Fornitori_italiani, creare sulla tabella Fornitori_italiani:
    -- * un indice semplice (chiamato idx_nome_fornitore) sulla colonna nome_fornitore;
    -- * un indice (chiamato idx_partitaiva_desc) con lunghezza e ordine specificato sulla colonna partita_iva, definendo una lunghezza di otto caratteri e un ordinamento DESC.
-- [tramite query SQL]

-- 1. Creazione dell'indice semplice sulla colonna nome_fornitore
-- "idx_nome_fornitore" ottimizza e velocizza le ricerche e i filtraggi basati sul nome del fornitore -->
CREATE INDEX idx_nome_fornitore ON Fornitori_italiani (nome_fornitore);

-- 2. Creazione dell'indice con lunghezza di 8 caratteri e ordinamento DESC sulla colonna partita_iva -->
-- "idx_partitaiva_desc" consente al database di ritrovare rapidamente le partite IVA (utilizzando i primi 8 caratteri) e di averle già predisposte in un ordine discendente (DESC), evitando calcoli o riordinamenti successivi da parte del sistema
CREATE INDEX idx_partitaiva_desc ON Fornitori_italiani (partita_iva(8) DESC);

-- Successivamente, eseguire un’interrogazione SQL per visualizzare tutti i database presenti nel sistema e un’altra per visualizzare tutte le colonne della tabellaFornitori_italiani. [tramite query SQL]

-- 1. Visualizza tutti i database
SHOW DATABASES;

-- 2. Visualizza tutte le colonne (la struttura) della tabella Fornitori_italiani
SHOW COLUMNS FROM Fornitori_italiani;

-- Al termine, verificare che gli indici creati siano correttamente visibili. [tramite interfaccia di phpMyAdmin]