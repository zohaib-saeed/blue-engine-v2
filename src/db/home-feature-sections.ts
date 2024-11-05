import { v4 as generateUuid } from "uuid";
import { genearteUuid } from "@/utils";

const voorgesteldeFeature = {
  heading: "Voorgestelde acties",
  body: "Herkent situaties en automatiseert deze voor je.",
  images: [
    { src: "/images/home/voorgestelde/1.svg", alt: "Voorgestelde actie 1" },
    { src: "/images/home/voorgestelde/2.svg", alt: "Voorgestelde actie 2" },
  ],
  featurePageUrl: "/features/voorgestelde-acties",
  tablistClass: genearteUuid(),
  mainTab: 0,
  tabs: [
    {
      title: "Herkenning & Afhandeling",
      value: generateUuid(),
      activeBullet: 1,
      chips: ["Nieuw"],
      bullets: [
        "Automatisch onderzoek starten",
        "Controleert dubbele bestellingen",
        "Afhandeling teruggestuurde pakketten & verkeerd ontvangen retouren",
        "Afhandeling niet-afgehaalde pakketten parcelshop",
        "Klantverzoeken tot afhaal pakket parcelshop en meer",
      ],
    },
    {
      title: "(R)LIM & Vergoedingen",
      value: generateUuid(),
      activeBullet: 2,
      chips: ["Veelgebruikt"],
      bullets: [
        "LIM en RLIM overzicht",
        "VVB toeslag controle",
        "Geautomatiseerde vergoedings aanvragen bij Bol.com",
        "Inzicht vergoedingsaanvragen",
      ],
    },
  ],
};

const featuresData = [
  //////////////
  {
    title: "VVB Orderverwerking",
    heading: "Binnen 10 seconde aan de slag met inpakken",
    subText: "De snelste manier om je VVB-orders te verwerken.",
    bullets: {
      label: "In 1 klik:",
      items: [
        "VVB-orders voor vandaag",
        "VVB-orders voor vandaag",
        "Orders gesorteerd, bevestigd en samengevoegd in 1 PDF",
        "Verzendinfo op het VVB label",
        "Picklijst met hoeveel van elk artikel te verzenden",
      ],
    },
    img: {
      url: "/images/home/features/order-verwerking.svg",
      className: "pb-[79%]",
    },
    tags: ["Foutloos inpakken", "Bespaar tijd", "Razendsnel"],
    pageUrl: "",
  },
  //////////////
  {
    title: "TrackingView",
    heading: "Inzicht wanneer het misgaat met je VVB-orders",
    subText: "Voorkom niet-afgehaald parcelshop en onterecht retour afzender",
    bullets: {
      label: "",
      items: [
        "In één oogopslag weten wat bij parcelshop ligt",
        "Vraagt vergoeding aan bij onterecht terugstuur",
        "Automatische herinnering afhaal-verzoek pakket ",
        "Inzicht per dag in jouw zendingen",
      ],
    },
    img: {
      url: "/images/home/features/tracking-view.svg",
      className: "pb-[65%]",
    },
    tags: [
      "Voorkom onnodige retouren",
      "Nastuur-zending aanmaken",
      "Snelle actie-knoppen",
    ],
    pageUrl: "",
  },
  //////////////
  {
    title: "Retour",
    heading: "Razendsnel retouren verwerken met de app",
    subText:
      "Retouren afhandelen kost veel tijd, sommige kijken er al niet meer naar om. Zonde! Want er gaat veel mis bij retouren en dat kost jouw geld.",
    bullets: {
      label: "Met 1 scan:",
      items: [
        "De retourreden en of deze op tijd retour is gemeld",
        "Direct goedkeuren, afkeuren of on-hold zetten",
        "Maak foto/notitie tijdens afkeuren en mail klant direct",
        "Vraagt compensatie bij Bol.com voor onterechte retour",
      ],
    },
    img: { url: "/images/home/features/retour.svg", className: "pb-[72%]" },
    tags: ["Voorkom retourfraude", "Bespaar op retourkosten"],
    pageUrl: "",
  },
  //////////////
  {
    title: "Bol.com klantvragen",
    heading: "Klantvragen afhandelen met de juiste toolkit",
    subText: "Nooit meer een klantvraag te laat beantwoorden.",
    bullets: {
      label: "",
      items: [
        "Standaard ontvangstmail (altijd op tijd met reageren)",
        "Snelle afhandel en zoekfuncties",
        "1 klantvragenoverzicht voor al jouw winkels",
        "Klantvragen makkelijk opslaan/groeperen voor later",
      ],
    },
    img: {
      url: "/images/home/features/klantvragen-bol.svg",
      className: "pb-[70%]",
    },
    tags: ["Versnel dagelijkse processen ", "Bescherming prestatienormen"],
    pageUrl: "",
  },
  //////////////
  {
    title: "MeldingenBox",
    heading: "Een extra oogje in het zeil",
    subText:
      "Houd toezicht op al jouw  dagelijkse processen zodat jij niet meer voor verassingen komt te staan en op tijd kunt ingrijpen.",
    bullets: {
      label: "",
      items: [
        "VVB-toeslagen",
        "Verkopers onder jouw listing",
        "Ontvangen compensaties Bol.com ",
        "Voorgestelde mailtjes voor elk scenario (optie)",
      ],
    },
    img: {
      url: "/images/home/features/melding-box.svg",
      className: "pb-[70%]",
    },
    tags: [
      "Extra monitoring",
      "Extra monitoring",
      "Melding nieuwe productreviews",
    ],
    pageUrl: "",
  },
  //////////////
  {
    title: "MailCampagnes",
    heading: "Creeer je eigen klantvragen",
    subText:
      "Laat klanten direct reageren op jouw campagnes. Scheelt weer een bol-vraag en jij bent sneller op de hoogte dan via het bol-contactformulier",
    bullets: {
      label: "",
      items: [
        "Eigen klantvragen afhandelen net zoals bol-vragen ",
        "Kant ’n klare campagnes ",
        "Gezondere prestatienormen",
        "Vraag om eerlijke review terwijl je factuur verstuurd",
      ],
    },
    img: {
      url: "/images/home/features/mail-campagnes.svg",
      className: "pb-[63%]",
    },
    tags: ["Direct contact", "Snellere afhandeling"],
    pageUrl: "",
  },
  //////////////
  {
    title: "Facturatie",
    heading: "Je bol-administratie zorgeloos op orde",
    subText:
      "Maakt klantfacturen aan en bundelt dit per bol-factuur. Zo klopt je administratie altijd en kun je probleemloos de bol-factuur blijven gebruiken van de Belastingdienst.",
    bullets: {
      label: "",
      items: [
        "Download maandelijks 1 PDF bundel per bol-factuur",
        "Begin vanaf 1 januari 2023 of vanaf nu (optioneel)",
        "Handmatig of automatisch facturen uploaden naar Bol.com",
        "Overzicht zakelijke BE klanten per kwartaal voor BTW aangifte",
      ],
    },
    img: { url: "/images/home/features/facturatie.svg", className: "pb-[65%]" },
    tags: [
      "Zakelijke BE klanten altijd 0% BTW factuur",
      "Makkelijk overstappen",
    ],
    pageUrl: "",
  },
  //////////////
  {
    title: "",
    heading: "Voorspelt wanneer je producten uitverkocht raken",
    subText:
      "Voorkom dat je geen voorraad hebt wanneer je sales ineens harder gaan dan gepland.",
    bullets: {
      label: "",
      items: [
        "Voorkom dat je geen voorraad hebt wanneer je sales ineens harder gaan dan gepland.",
        "Houd je bol-voorraad boven de 500 tegen salestracking",
        "Meerdere winkels met 1 voorraad systeem",
        "Dagelijks up-to-date",
      ],
    },
    img: {
      url: "/images/home/features/voorraadbeheer.svg",
      className: "pb-[69%]",
    },
    tags: ["Actuele voorraad", "Inkoopmeldingen"],
    pageUrl: "",
  },
];

export { voorgesteldeFeature, featuresData };
