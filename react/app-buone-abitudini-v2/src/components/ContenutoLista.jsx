import React from "react";

/**
 * Componente di presentazione per il rendering dei singoli elementi della lista.
 * Riceve in ingresso l'array filtrato (già limitato dall'HOC) e mappa ogni stringa
 * all'interno di una struttura grafica curata con Bootstrap.
 */
const ContenutoLista = ({ consigli }) => {
  return (
    <>
      {consigli.map((consiglio, index) => (
        <div
          key={index}
          className="py-3 px-4 bg-white text-dark fw-bold rounded-pill shadow-sm mb-3 d-flex align-items-center justify-content-between border-start border-4 border-warning"
          style={{ transition: "transform 0.2s" }}
        >
          <span>🔥 {consiglio}</span>
        </div>
      ))}
    </>
  );
};

export default ContenutoLista;
