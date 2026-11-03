********************************************
============>     PROMPT 1     <============
********************************************

Agisci come un Senior Front-End Developer, UI/UX Designer e Brand Strategist. Voglio che tu realizzi l'intero progetto per un sito web a tre pagine dedicato a un brand inventato di t-shirt e merchandising streetwear. Il brand si chiama "Pichu" ed è esplicitamente ispirato all'universo dei Pokémon (stile anni '90/2000, arene di lotta, creature elettriche e carine, sfere di cattura, medaglie e badge di palestra), ma con un'identità autonoma e originale, sicura dal punto di vista del copyright (senza violare marchi registrati o utilizzare loghi e personaggi protetti).

Il progetto deve rispettare rigorosamente i seguenti requisiti:

1. STRUTTURA E NAVIGAZIONE (3 Pagine):
   - index.html (Home page con presentazione del brand, hero section celebrativa delle collezioni ispirate alle arene e al mondo Pokémon, e sezioni in evidenza)
   - catalogo.html (Pagina Portfolio/Catalogo con una griglia di prodotti/t-shirt con immagini, prezzi e descrizioni tematiche basate su tipi elementali e sfere da collezione)
   - contatti.html (Pagina Contatti con form di contatto completo)
   - Tutte le pagine devono avere una struttura semantica corretta (Header, Nav, Main, Footer) e una barra di navigazione coerente e funzionante che colleghi le tre pagine.

2. STILE, DESIGN E GENERAZIONE VISIVA:
   - Scegli una palette di colori audace, sportiva ed energica (giallo elettrico vivace, rosso fuoco, blu profondo e bianco/nero, ispirata ai codici cromatici dei Pokémon) e caratteri tipografici geometrici e decisi.
   - Forniscimi esplicitamente anche i **testi dei prompt** (ottimizzati per strumenti di IA generativa come DALL-E o Midjourney) per creare:
     * Il logo ufficiale di "Pichu" (ispirato a un emblema circolare in stile sfera di cattura e fulmini stilizzati)
     * L'immagine principale (Hero image) della Home page con un'estetica streetwear e gamer ispirata ai mostriciattoli tascabili
   - Includi nella barra di navigazione un pulsante interattivo (Switch Tema) che permetta all'utente di passare dinamicamente dal tema chiaro a quello scuro tramite JS/CSS.

3. COMPONENTI E CONTENUTI INTERATTIVI:
   - Griglia di immagini responsive per il catalogo delle t-shirt.
   - Un componente Accordion (es. per una sezione FAQ nella pagina contatti o per i dettagli tecnici dei tessuti e delle guide alle taglie "Allenatore").
   - Elenchi puntati o numerati (es. per descrivere le caratteristiche tecniche delle collezioni "Tipo Elettro", "Tipo Fuoco", "Tipo Acqua").
   - Un Form di contatto completo di campi validati (Nome, Email, Oggetto, Messaggio, Pulsante di invio).

Forniscimi il codice pulito, ben commentato in italiano, suddiviso chiaramente per file (HTML per le tre pagine, file CSS e file JavaScript), accompagnato dai prompt per la generazione delle immagini richiesti al punto 2.



********************************************
============>     PROMPT 2     <============
********************************************
Il pulsante tema e l'accordion non funzionano, penso ci sia bisogno dell'intervento di JavaScript. 



********************************************
============>     PROMPT 3     <============
********************************************
Prompt (DALL-E 3 / Midjourney v6):
Vector logo design for a streetwear clothing brand named "PICHU", 90s anime style mixed with modern urban aesthetic. Bold circular emblem reminiscent of a retro capture-sphere with stylized double lightning bolts cutting through the center. Electric yellow, crimson red, and deep charcoal black colors. Clean sharp geometry, high contrast, flat graphic design, isolated on a solid dark background, minimalist vector art --no realistic shadows, gradient overuses, text clutter, photorealism.



/*******************************************
============>     PROMPT 4     <============
********************************************
Prompt (DALL-E 3 / Midjourney v6):
Full-shot streetwear lookbook hero image set in a glowing neon-lit Tokyo underground battle arena at dusk. A cool fashion model wearing an oversized electric-yellow graphic t-shirt with stylized lightning patterns and dark cargo pants, holding a glowing futuristic spherical gadget. 90s aesthetic mixed with cyber-punk arcade atmosphere, vivid electrical sparks in the air, deep contrast, cinematic lighting, dramatic angle, shot on 35mm lens, high-fashion editorial streetwear --ar 16:9 --style raw --v 6.0



/*******************************************
============>     PROMPT 5     <============
********************************************
Inserisci il logo che mi hai creato al posto della scritta PICHU LAB. Il logo deve essere rinominato pichu_logo.jpg.



/*******************************************
============>     PROMPT 6     <============
********************************************
Genera delle immagini da inserire al posto dei placeholders che abbiamo nella pagina catologo.html.
Dobbiamo creare e inserire delle immagini inerenti alle rispettive sezioni:
- T-Shirt "Volt Shock
- T-Shirt "Flame Badge
- T-Shirt "Hydro Sphere


/*******************************************
============>     PROMPT 7     <============
********************************************
Mi servono tre immagini separate da inserire per ogni <article> della pagina catalogo.html contenente la classe "product-card".


/*******************************************
============>     PROMPT 8     <============
********************************************
Crea solo un immagine con la t-shirt Volt Shock. 


/*******************************************
============>     PROMPT 9     <============
********************************************
Fai la stessa cosa per la t-shirt Flame Badge. 


/*******************************************
============>     PROMPT 10     <============
********************************************
La dimensione dell'immagine Flame Badge, deve essere identica a quella dell'immagine Volt Shock.


/*******************************************
============>     PROMPT 11     <============
********************************************
Fai la stessa cosa per la t-shirt Hydro Sphere. 
La dimensione dell'immagine Hydro Sphere, deve essere identica a quella delle immagini Volt Shock e Flame Badge.