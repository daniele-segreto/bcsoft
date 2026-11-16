import React from "react";

/**
 * Componente StudentProfile
 * Gestisce la visualizzazione dell'intestazione del profilo accademico,
 * mostrando l'avatar circolare con le iniziali e il nome completo dello studente.
 * Riceve tramite props: name, surname, initials.
 */
export function StudentProfile({ name, surname, initials }) {
    return (
        /* Contenitore principale della card con sfondo verde smeraldo, ombreggiatura e bordi arrotondati */
        <div
            className="card border-0 shadow-lg rounded-4 p-4 mb-4 text-white"
            style={{ backgroundColor: "#059669" }}
        >
            <div className="d-flex align-items-center gap-4">
                {/* Avatar circolare con sfondo bianco e testo verde a contrasto per le iniziali */}
                <div
                    className="rounded-circle text-success d-flex align-items-center justify-content-center fw-bold fs-4 shadow-sm bg-white"
                    style={{ width: "65px", height: "65px" }}
                >
                    {initials}
                </div>

                {/* Sezione anagrafica testuale */}
                <div>
                    {/* Badge descrittivo dello stato del profilo */}
                    <span
                        className="badge bg-white text-success text-uppercase tracking-wider mb-1 px-2 py-1 fw-bold"
                        style={{ fontSize: "0.7rem" }}
                    >
                        Profilo Accademico Verificato
                    </span>

                    {/* Nome e cognome dinamici interpolati tramite props */}
                    <h3 className="fw-bold mb-0 text-white">
                        {name} {surname}
                    </h3>
                </div>
            </div>
        </div>
    );
}
