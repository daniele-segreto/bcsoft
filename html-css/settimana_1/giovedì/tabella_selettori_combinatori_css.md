========================================================================================================================
                                            TABELLA DEI SELETTORI COMBINATORI CSS
========================================================================================================================
| Tipo di Selettore     | Simbolo / Sintassi   | Descrizione del Comportamento                       | Esempio Pratico  |
------------------------------------------------------------------------------------------------------------------------
| 1. Discendenti        | A B (Spazio)         | Seleziona TUTTI gli elementi B interni di un        | .contenitore p   |
|                       |                      | antenato A (figli, nipoti, pronipoti).              |                  |
------------------------------------------------------------------------------------------------------------------------
| 2. Figli              | A > B (Maggiore)     | Seleziona solo gli elementi B che sono figli        | .contenitore > p |
|                       |                      | DIRETTI (primo livello) del genitore A.             |                  |
------------------------------------------------------------------------------------------------------------------------
| 3. Fratelli Adiacenti | A + B (Più)          | Seleziona l'elemento B che si trova IMMEDIATAMENTE  | h1 + p           |
|                       |                      | dopo l'elemento A (stesso genitore).                |                  |
------------------------------------------------------------------------------------------------------------------------
| 4. Fratelli Generali  | A ~ B (Tilde)        | Seleziona TUTTI gli elementi B che "seguono"        | h2 ~ p           |
|                       |                      | l'elemento A sullo stesso livello (anche non vicini)|                  |
========================================================================================================================

===> Alt + Z = per visualizzare bene! <===