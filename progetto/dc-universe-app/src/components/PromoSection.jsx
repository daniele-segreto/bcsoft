import { promoItems } from "../data/comicsData";

function PromoSection() {
    return (
        /* Sezione promozionale principale con spaziatura verticale e sfondo bianco */
        <section className="py-5 bg-white">
            <div className="container">
                {/* Griglia flessibile per la disposizione centrata delle card promozionali */}
                <div className="row g-4 justify-content-center">
                    {/* Iterazione dinamica sull'array promoItems per la generazione delle card */}
                    {promoItems.map((item) => (
                        <div key={item.id} className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm promo-card text-center">
                                {/* Contenitore dell'immagine con eventuale effetto grafico o taglio obliquo */}
                                <div className="promo-img-wrapper">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="card-img-top promo-img"
                                    />
                                </div>

                                {/* Corpo della card contenente i testi promozionali e il pulsante d'azione */}
                                <div className="card-body d-flex flex-column align-items-center justify-content-between p-4">
                                    <div>
                                        <h3 className="promo-title">{item.title}</h3>
                                        <p className="promo-subtitle">{item.subtitle}</p>
                                    </div>

                                    {/* Pulsante di call-to-action per l'acquisto della promozione */}
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
