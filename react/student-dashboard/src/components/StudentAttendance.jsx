import React from "react";

/**
 * Componente StudentAttendance
 * Visualizza la percentuale di frequenza dello studente tramite una barra di progresso dinamica
 * e raccoglie le note descrittive della partecipazione.
 * Riceve tramite props: percentage, notes (array di stringhe).
 */
export function StudentAttendance({ percentage, notes }) {
    return (
        /* Card principale con sfondo bianco, bordi arrotondati e margine superiore */
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mt-4">
            <h5 className="fw-bold text-dark mb-3">Ulteriori Informazioni</h5>

            {/* Sezione della percentuale di frequenza e barra di avanzamento */}
            <div className="mb-4">
                {/* Intestazione numerica della frequenza */}
                <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted small fw-semibold">
                        Percentuale Frequenza
                    </span>
                    <span className="fw-bold text-dark">{percentage}%</span>
                </div>

                {/* Barra di progresso Bootstrap con larghezza dinamica basata sulle props */}
                <div
                    className="progress rounded-pill bg-light"
                    style={{ height: "8px" }}
                >
                    <div
                        className="progress-bar rounded-pill"
                        role="progressbar"
                        style={{ width: `${percentage}%`, backgroundColor: "#059669" }}
                        aria-valuenow="{percentage}"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>

            {/* Sezione delle note descrittive */}
            <div>
                <span className="text-muted small fw-semibold d-block mb-2">
                    Note di Valutazione
                </span>
                {/* Box con bordo sinistro colorato che raccoglie l'elenco delle note */}
                <div
                    className="p-3 rounded-3 bg-light text-secondary small d-flex flex-column gap-1 border-start border-3"
                    style={{ borderLeftColor: "#059669 !important" }}
                >
                    {notes.map((note, index) => (
                        <p key={index} className="mb-1">
                            • {note}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
