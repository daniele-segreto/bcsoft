import React from "react";

/**
 * Componente Contenitore (Wrapper).
 * Sfrutta la prop 'children' per incorniciare e racchiudere la lista dei consigli
 * all'interno di un blocco grafico stilizzato.
 */
export default function ListaConsigli({ children }) {
    return (
        <div
            className="p-4 rounded-4 shadow-inner"
            style={{
                background: "rgba(255, 255, 255, 0.05)",
                maxHeight: "400px",
                overflowY: "auto",
            }}
        >
            {children}
        </div>
    );
}
