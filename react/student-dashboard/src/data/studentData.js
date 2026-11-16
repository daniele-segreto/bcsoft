/**
 * File di dati centralizzato: studentData.js
 * Contiene tutte le informazioni anagrafiche, le valutazioni dei singoli argomenti,
 * la percentuale di frequenza e le note descrittive dello studente.
 * Questi dati vengono importati nel componente principale (App.jsx) e distribuiti
 * tramite props ai vari sotto-componenti della dashboard.
 */
export const studentData = {
    // Dati anagrafici e identificativi principali
    name: "Daniele",
    surname: "Segreto",
    initials: "DS",
    age: 37,

    // Informazioni sul percorso formativo e sulla classe di appartenenza
    course: "Vibe Coding con React",
    classCode: "CS-327-9",

    // Percentuale numerica complessiva di frequenza alle lezioni
    attendancePercentage: 94,

    // Elenco delle note descrittive sulla partecipazione e sull'andamento
    attendanceNotes: [
        "Ottima partecipazione durante le lezioni.",
        "Progetti ben strutturati.",
        "Webcam sempre attiva quando richiesto."
    ],

    // Array di oggetti contenente le valutazioni dettagliate per ciascuna materia/argomento
    evaluations: [
        { subject: "UX/UI", percentage: "70%", score: "7/10" },
        { subject: "HTML", percentage: "90%", score: "9/10" },
        { subject: "CSS", percentage: "90%", score: "9/10" },
        { subject: "JavaScript", percentage: "80%", score: "8/10" },
        { subject: "SQL", percentage: "70%", score: "7/10" },
        { subject: "React", percentage: "80%", score: "8/10" },
    ]
};