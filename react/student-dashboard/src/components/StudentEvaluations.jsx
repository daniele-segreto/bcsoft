import React from "react";

/**
 * Componente StudentEvaluations
 * Si occupa di mostrare l'elenco delle valutazioni conseguite dallo studente nei vari argomenti.
 * Riceve tramite props: evaluations (un array di oggetti contenenti subject, percentage e score).
 */
export function StudentEvaluations({ evaluations }) {
    return (
        /* Contenitore card principale con sfondo bianco, bordi arrotondati e margine superiore */
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mt-4">
            {/* Titolo della sezione con bordo inferiore di separazione */}
            <h5 className="fw-bold text-dark mb-4 pb-2 border-bottom">
                Valutazioni Argomenti
            </h5>

            {/* Contenitore flessibile verticale che impila le singole valutazioni con spaziatura uniforme */}
            <div className="d-flex flex-column gap-3">
                {/* Iterazione dinamica sull'array evaluations tramite il metodo .map() */}
                {evaluations.map((item, index) => (
                    /* Singolo riquadro per ciascuna materia (utilizza l'indice come chiave univoca) */
                    <div
                        key={index}
                        className="p-3 rounded-3 bg-light d-flex justify-content-between align-items-center border-0"
                    >
                        {/* Colonna sinistra: nome della materia e percentuale di completamento */}
                        <div>
                            <span className="fw-bold text-dark d-block">{item.subject}</span>
                            <small className="text-muted">
                                Completamento: {item.percentage}
                            </small>
                        </div>

                        {/* Colonna destra: badge a pillola verde smeraldo con il punteggio finale */}
                        <span
                            className="badge text-white px-3 py-2 rounded-pill fw-bold"
                            style={{ backgroundColor: "#059669" }}
                        >
                            {item.score}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
