import React from "react";

/**
 * Componente StudentInfo
 * Si occupa di visualizzare in modo tabulato e pulito le informazioni anagrafiche
 * e di percorso dello studente (età, corso di studi e codice classe).
 * Riceve tramite props: age, course, classCode.
 */
export function StudentInfo({ age, course, classCode }) {
    return (
        /* Card principale con sfondo bianco, bordi arrotondati, ombra leggera e un bordo laterale sinistro in evidenza */
        <div
            className="card border-0 shadow-sm rounded-4 p-4 bg-white border-start border-4"
            style={{ borderLeftColor: "#059669 !important" }}
        >
            {/* Intestazione della sezione con linea di separazione inferiore */}
            <h5 className="fw-bold text-dark mb-4 pb-2 border-bottom d-flex align-items-center gap-2">
                Anagrafica e Corso
            </h5>

            {/* Riga informativa: Età dello studente */}
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-light">
                <span className="text-muted small fw-semibold">Età</span>
                <span className="fw-bold text-dark">{age} anni</span>
            </div>

            {/* Riga informativa: Corso di studi dinamico con colore coordinato */}
            <div className="d-flex justify-content-between align-items-center py-2 border-bottom border-light">
                <span className="text-muted small fw-semibold">Corso di studi</span>
                <span className="fw-bold" style={{ color: "#059669" }}>
                    {course}
                </span>
            </div>

            {/* Riga informativa: Codice classe evidenziato tramite un badge a pillola */}
            <div className="d-flex justify-content-between align-items-center py-2">
                <span className="text-muted small fw-semibold">Codice classe</span>
                <span
                    className="badge text-white px-3 py-2 fw-bold rounded-pill"
                    style={{ backgroundColor: "#059669" }}
                >
                    {classCode}
                </span>
            </div>
        </div>
    );
}
