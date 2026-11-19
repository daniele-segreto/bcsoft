/**
 * Archivio dei dati statici e simulati per il portale DC Universe.
 * Contiene le informazioni relative alle promozioni, ai cataloghi e alla hero.
 */

// Dati di configurazione per il carosello della Hero in base alla rotta o sezione
export const heroContentData = {
    "/fumetti": {
        title: "HARLEY QUINN",
        subtitle: "La regina indiscussa del brivido",
        imageKey: "harley",
        btnText: "La tua Dashboard",
        btnLink: "/dashboard",
    },
    "/film-serie": {
        title: "SUPERMAN",
        subtitle: "Un simbolo di speranza e giustizia",
        imageKey: "superman",
        btnText: "In Evidenza",
        btnLink: "/",
    },
    "default": {
        title: "DC SUBSCRIPTIONS",
        subtitle: "L'oscurità non è un rifugio, è un'arma nelle mani della giustizia",
        imageKey: "batman",
        btnText: "Acquista Ora!",
        btnLink: "/fumetti",
    }
};

// Array di dati simulati per le 3 card promozionali visualizzate nella sezione Home
export const promoItems = [
    {
        id: 1,
        image: "/img/promo_section/c1.png",
        title: "FINO AL 40% DI SCONTO",
        subtitle: "I PROSSIMI 12 NUMERI DEI TUOI FUMETTI DC PREFERITI",
        link: "/fumetti"
    },
    {
        id: 2,
        image: "/img/promo_section/c2.png",
        title: "FINO AL 40% DI SCONTO",
        subtitle: "I PROSSIMI 12 NUMERI DEI TUOI FUMETTI DC PREFERITI",
        link: "/fumetti"
    },
    {
        id: 3,
        image: "/img/promo_section/c3.png",
        title: "FINO AL 40% DI SCONTO",
        subtitle: "I PROSSIMI 12 NUMERI DEI TUOI FUMETTI DC PREFERITI",
        link: "/fumetti"
    }
];

// Array di dati per la sezione dei fumetti "In Evidenza" (3 elementi principali)
export const featuredComics = [
    {
        id: 4,
        title: "TEEN TITANS",
        image: "/img/featured/titans.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 5,
        title: "DEMONE",
        image: "/img/featured/demone.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 6,
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
        id: 7,
        title: "SUPERMAN",
        image: "/img/popular/superman.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 8,
        title: "BATMAN",
        image: "/img/popular/batman.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 9,
        title: "WONDER WOMAN",
        image: "/img/popular/wonderwoman.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 10,
        title: "HARLEY QUINN",
        image: "/img/popular/harley_quinn.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];

// Sezione Fumetti: Superman Family
export const supermanFamily = [
    {
        id: 11,
        title: "SUPERMAN: ACTION COMICS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4K6AOKEYJUS8Vlr_QtDJHeDu8qv_lk3_SSWJTR97Pg&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 12,
        title: "SUPERGIRL: LA DONNA DI DOMANI",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWx4AtphEgdXtkArKt3OkM59Gzdcdd-Ao7lL1Zcrph8lubXEuH7mX64xDH&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 13,
        title: "SUPERMAN: SON OF KAL-EL",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMBmZvc8NRwwgYMmmdqs-IDMbfaUVFRTRVkQI9WEWLb-mcVBAjDaeVn0Qq&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 14,
        title: "SUPERMAN: HOUSE OF EL",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HepWe7rA2Bkb5BkwOk-8ofU_i-dJ5glMpoY0Nt4IZg&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];

// Sezione Fumetti: Justice League
export const justiceLeague = [
    {
        id: 15,
        title: "JUSTICE LEAGUE: ORIGIN",
        image: "https://m.media-amazon.com/images/I/91w7mWVgZ5L._AC_UF1000,1000_QL80_.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 16,
        title: "THE FLASH: RINASCITA",
        image: "https://www.ibs.it/images/9788828730514_0_0_536_0_75.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 17,
        title: "GREEN LANTERN: SINESTRO CORPS",
        image: "https://m.media-amazon.com/images/I/91r-rUaAIdL._AC_UF1000,1000_QL80_.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 18,
        title: "AQUAMAN: TRENCH",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpq6vtC8F7oWV9X92UV4o0j888Dm0Zl9tWq56hCnGdp6abAWPtP7bRdXhp&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];

// Sezione Fumetti: Gotham Family
export const gothamFamily = [
    {
        id: 19,
        title: "BATMAN: RIDDLE ME THIS",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEv5AY5s1Hg2I8WUcS2m8_qJ-gpe1klMB1LjZiZDDajIKukb9oqnK-dC8&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 20,
        title: "NIGHTWING: APEX",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgULNXjune3QcRuJYliZopDvTj8nSUQ5CD70NNOWpHCDAQtqoAM5nlVg&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 21,
        title: "ROBIN: SON OF BATMAN",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2Tz_bFNi1_ql-ltXQUl1FGMQ5tqoF3SfKJKwCt1qzA&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 22,
        title: "CATWOMAN: RUST",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEB62vp95SnRaDkTQBMM4-bcxobFm_n3OPtsoCm05Gqy-ybpaQFylkMNp8&s=10",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];

// Sezione Film e Serie TV: Cinema
export const cinema = [
    {
        id: 30,
        title: "ACQUAMAN",
        image: "/img/cinema/acquaman.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 31,
        title: "THE FLASH",
        image: "/img/cinema/flash.jpg",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 32,
        title: "SHAZAM",
        image: "/img/cinema/shazam.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 33,
        title: "THE BATMAN",
        image: "/img/cinema/batman.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];

// Sezione Film e Serie TV: Serie TV
export const tvSeries = [
    {
        id: 34,
        title: "BLACK LIGHTING",
        image: "/img/tv_series/black_lighting.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 35,
        title: "TITANS",
        image: "/img/tv_series/titans.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 36,
        title: "NAOMI",
        image: "/img/tv_series/naomi.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 37,
        title: "STARGIRL",
        image: "/img/tv_series/stargirl.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];

// Sezione Film e Serie TV: Serie Animate
export const animatedSeries = [
    {
        id: 38,
        title: "DOOM GOTHAM",
        image: "/img/animated_series/doom_gotham.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 39,
        title: "SUPER-HEROES",
        image: "/img/animated_series/super_heroes.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 40,
        title: "GREEN LANTERN",
        image: "/img/animated_series/green_lantern.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    },
    {
        id: 41,
        title: "CONSTANTINE",
        image: "/img/animated_series/constantine.avif",
        ourPrice: "€ 28,96",
        coverPrice: "€ 47,88",
        discount: "SCONTO DEL 40%"
    }
];