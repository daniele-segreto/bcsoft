import React from "react";

/**
 * Questa funzione è una vera e propria "fabbrica".
 * Prende un componente normale (WrappedComponent) e un numero limite (di default 10),
 * e sputa fuori un nuovo componente potenziato e "a dieta" (che mostra solo i primi 10 elementi).
 */
export default function withLimit(WrappedComponent, limit = 10) {
    // Restituiamo un nuovo componente che riceve la lista dei consigli dall'esterno.
    return function WithLimitComponent({ consigli, ...props }) {
        // Prima di passargli i dati, usiamo .slice() per tagliare l'array
        // prendendo solo quelli che vanno dall'inizio (0) fino al limite stabilito.
        const consigliLimitati = consigli.slice(0, limit);

        // Ora restituiamo il componente originale, ma dandogli in pasto
        // solo la lista già tagliata e ridotta.
        return <WrappedComponent consigli={consigliLimitati} {...props} />;
    };
}
