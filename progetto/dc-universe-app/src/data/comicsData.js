/**
 * Archivio dei dati statici e simulati per il portale DC Universe.
 * Contiene le informazioni relative alle promozioni e ai cataloghi dei fumetti.
 */

// Array di dati simulati per le 3 card promozionali visualizzate nella sezione Home
export const promoItems = [
    {
        id: 1,
        image: "/img/promo_section/c1.png", // Percorso dell'immagine promozionale
        title: "FINO AL 40% DI SCONTO",
        subtitle: "I PROSSIMI 12 NUMERI DEI TUOI FUMETTI DC PREFERITI",
        link: "/promo/1"
    },
    {
        id: 2,
        image: "/img/promo_section/c2.png", // Percorso dell'immagine promozionale
        title: "FINO AL 40% DI SCONTO",
        subtitle: "I PROSSIMI 12 NUMERI DEI TUOI FUMETTI DC PREFERITI",
        link: "/promo/2"
    },
    {
        id: 3,
        image: "/img/promo_section/c3.png", // Percorso dell'immagine promozionale
        title: "FINO AL 40% DI SCONTO",
        subtitle: "I PROSSIMI 12 NUMERI DEI TUOI FUMETTI DC PREFERITI",
        link: "/promo/3"
    }
];

// Array di dati per la sezione dei fumetti "In Evidenza" (3 elementi principali)
export const featuredComics = [
    {
        id: 1,
        title: "TEEN TITANS",
        image: "/img/featured/titans.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 2,
        title: "DEMONE",
        image: "/img/featured/demone.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 3,
        title: "PAZZI PER DC",
        image: "/img/featured/crazy.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];

// Array di dati per la sezione dei fumetti "Più Popolari" (4 elementi di punta)
export const popularComics = [
    {
        id: 4,
        title: "SUPERMAN",
        image: "/img/popular/superman.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 5,
        title: "BATMAN",
        image: "/img/popular/batman.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 6,
        title: "WONDER WOMAN",
        image: "/img/popular/wonderwoman.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 7,
        title: "HARLEY QUINN",
        image: "/img/popular/harley_quinn.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];