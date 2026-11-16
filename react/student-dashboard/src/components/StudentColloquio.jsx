import React, { useState } from "react";
import Swal from "sweetalert2";

/**
 * Componente StudentColloquio
 * Gestisce la proposta a colloquio tramite input radio ("Sì" / "No"),
 * visualizzazione condizionale della textarea e salvataggio nel localStorage con feedback SweetAlert2.
 */
export function StudentColloquio() {
    // Stato locale per memorizzare la scelta del radio button ("Si" o "No")
    const [risposta, setRisposta] = useState("");
    // Stato locale per memorizzare il testo inserito nella motivazione
    const [motivazione, setMotivazione] = useState("");

    // Funzione per validare e salvare la motivazione nel localStorage
    const handleSalva = () => {
        // Controllo di validazione: impedisce il salvataggio se la textarea è vuota
        if (!motivazione.trim()) {
            Swal.fire({
                title: "Campo vuoto",
                text: "La preghiamo di inserire una motivazione prima di procedere al salvataggio.",
                icon: "warning",
                confirmButtonText: "Chiudi",
                confirmButtonColor: "#059669",
                background: "#ffffff",
                customClass: { popup: "rounded-4 shadow-sm" },
            });
            return;
        }

        // Salvataggio nel Local Storage con la chiave richiesta "motivazione"
        localStorage.setItem("motivazione", motivazione);

        // Feedback visivo di successo tramite il popup di SweetAlert2
        Swal.fire({
            title: "Motivazione salvata",
            text: `Motivazione salvata: ${motivazione}`,
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#059669",
            background: "#ffffff",
            customClass: { popup: "rounded-4 shadow-sm" },
        });
    };

    return (
        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white mt-4">
            <h5 className="fw-bold text-dark mb-3">Colloquio</h5>

            {/* Sezione dei pulsanti radio */}
            <div className="mb-3">
                <label className="form-label text-muted small fw-semibold d-block mb-2">
                    Proporre a colloquio?
                </label>
                <div className="d-flex gap-4 align-items-center">
                    {/* Opzione Sì */}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="colloquioRadio"
                            id="colloquioSi"
                            value="Si"
                            checked={risposta === "Si"}
                            onChange={(e) => setRisposta(e.target.value)}
                            style={{ accentColor: "#059669" }}
                        />
                        <label
                            className="form-check-label fw-semibold text-dark"
                            htmlFor="colloquioSi"
                        >
                            Sì
                        </label>
                    </div>

                    {/* Opzione No */}
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="colloquioRadio"
                            id="colloquioNo"
                            value="No"
                            checked={risposta === "No"}
                            onChange={(e) => {
                                setRisposta(e.target.value);
                                setMotivazione(""); // Resetta la motivazione se si sceglie "No"
                            }}
                            style={{ accentColor: "#059669" }}
                        />
                        <label
                            className="form-check-label fw-semibold text-dark"
                            htmlFor="colloquioNo"
                        >
                            No
                        </label>
                    </div>
                </div>
            </div>

            {/* Render condizionale: la textarea e il pulsante appaiono solo se la risposta è "Si" */}
            {risposta === "Si" && (
                <div className="mt-3">
                    <label className="form-label text-muted small fw-semibold">
                        Motivazione
                    </label>
                    <textarea
                        className="form-control rounded-3 mb-3 shadow-none"
                        rows="3"
                        value={motivazione}
                        onChange={(e) => setMotivazione(e.target.value)}
                        placeholder="Inserisca qui la motivazione..."
                        style={{ borderColor: "#059669" }}
                    ></textarea>

                    {/* Pulsante di salvataggio */}
                    <button
                        type="button"
                        className="btn text-white w-100 fw-bold py-2 rounded-pill shadow-sm"
                        style={{ backgroundColor: "#059669" }}
                        onClick={handleSalva}
                    >
                        Salva
                    </button>
                </div>
            )}
        </div>
    );
}
