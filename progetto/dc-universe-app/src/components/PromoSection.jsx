import { promoItems } from "../data/comicsData";

/* --- COMPONENTE SEZIONE PROMOZIONALE (PROMO SECTION) --- */
/* Gestisce la visualizzazione delle offerte e promozioni in primo piano tramite una griglia responsive di card */
function PromoSection() {
    return (
        /* Sezione promozionale principale con spaziatura verticale e sfondo bianco pulito */
        <section className="py-5 bg-white">
            <div className="container">
                {/* Griglia flessibile per la disposizione centrata e bilanciata delle card promozionali */}
                <div className="row g-4 justify-content-center">
                    {/* Iterazione dinamica sull'array promoItems per la generazione automatica delle card */}
                    {promoItems.map((item) => (
                        <div key={item.id} className="col-12 col-md-6 col-lg-4">
                            {/* Card principale con altezza uniforme, bordi puliti e ombreggiatura delicata */}
                            <div className="card h-100 border-0 shadow-sm promo-card text-center">
                                {/* Contenitore dell'immagine con supporto per effetti grafici e proporzioni dedicate */}
                                <div className="promo-img-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="card-img-top promo-img"
                                    />
                                </div>

                                {/* Corpo della card strutturato con flexbox per distribuire i contenuti uniformemente */}
                                <div className="card-body d-flex flex-column align-items-center justify-content-between p-4">
                                    <div>
                                        {/* Titolo e sottotitolo della promozione */}
                                        <h3 className="promo-title">{item.title}</h3>
                                        <p className="promo-subtitle">{item.subtitle}</p>
                                    </div>

                                    {/* Pulsante di call-to-action (CTA) per l'accesso immediato all'offerta */}
                                    <a href={item.link} className="btn promo-btn mt-3">
                                        ACQUISTA ORA!
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PromoSection;
