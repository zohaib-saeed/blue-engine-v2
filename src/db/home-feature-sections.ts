import { v4 as generateUuid } from "uuid";
import { genearteUuid } from "@/utils";

export const homeFeaturesSectionsData = [
  // ---------------------------
  {
    heading: "Voorgestelde acties",
    body: "Herkent situaties en automatiseert deze voor je.",
    images: [
      { src: "/images/home/voorgestelde/1.png", alt: "Voorgestelde actie 1" },
      { src: "/images/home/voorgestelde/2.png", alt: "Voorgestelde actie 2" },
      { src: "/images/home/voorgestelde/3.png", alt: "Voorgestelde actie 3" },
    ],
    meerInfo: "",
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
  },
  // ---------------------------
  {
    heading: "Orderverwerking",
    body: "Geoptimaliseerd voor partners die zelf verzenden.",
    meerInfo: "",
    images: [
      { src: "/images/home/orderverwerking/1.png", alt: "Orderverwerking 1" },
      { src: "/images/home/orderverwerking/2.png", alt: "Orderverwerking 2" },
      { src: "/images/home/orderverwerking/3.png", alt: "Orderverwerking 3" },
      { src: "/images/home/orderverwerking/4.png", alt: "Orderverwerking 4" },
      { src: "/images/home/orderverwerking/5.png", alt: "Orderverwerking 5" },
    ],
    tablistClass: generateUuid(),
    mainTab: 1,
    tabs: [
      {
        title: "Algemeen",
        value: generateUuid(),
        activeBullet: 2,
        chips: ["Top"],
        bullets: [
          "Inzicht klant eerder heeft besteld",
          "Direct mail",
          "Bulk Mailen",
          "Genereert picklist",
          "Notites toevoegen",
        ],
      },
      {
        title: "VVB",
        value: generateUuid(),
        activeBullet: 0,
        chips: ["Veelgebruikt"],

        bullets: [
          "Product + aantal direct op VVB label",
          "Magazijnlocatie + losse notitie op het VVB label",
          "Mogelijk om VVB orders nog te annuleren na bevestigen",
          "Verzendregels voor brievenbus en pakket",
          "Wachtrij voor orders met latere verzenddatum",
        ],
      },
      {
        title: "Non VVB",
        value: generateUuid(),
        activeBullet: 1,
        chips: ["Besparend"],
        bullets: [
          "Copy Buttons voor aanmaken eigen labels",
          "Notificatie Parcelshop klant voorkeur",
          "Verzonden bestellingen per dagdeel",
          "Non VVB wachtrij",
          "Pre-label brievenbuspost",
        ],
      },
    ],
  },
  // ---------------------------
  {
    heading: "TrackingView",
    body: "Inzicht in de status van al jouw (VVB) pakketten.",
    meerInfo: "",
    images: [
      { src: "/images/home/trackingview/1.png", alt: "TrackingView 1" },
      { src: "/images/home/trackingview/2.png", alt: "TrackingView 2" },
      { src: "/images/home/trackingview/3.png", alt: "TrackingView 3" },
      { src: "/images/home/trackingview/4.png", alt: "TrackingView 4" },
    ],
    tablistClass: generateUuid(),
    mainTab: 1,
    tabs: [
      {
        title: "Algemeen",
        value: generateUuid(),
        activeBullet: 1,
        chips: ["Nieuw"],
        bullets: [
          "Start geautomatiseerd onderzoek naar pakket",
          "Teruggestuurde pakketten overzicht",
          "Inzicht of (R)LIM is uitgekeerd",
          "Supersnelle communicatie tussen vervoerder en jij",
          "Makkelijk track 'n trace uploaden per dag",
        ],
      },
      {
        title: "Inzicht statussen",
        value: generateUuid(),
        activeBullet: 0,
        chips: ["Core"],
        bullets: [
          "Inzicht welke pakketten bij parcelshop liggen",
          "Notificaties als je vervoerder je pakket terugstuurt",
          "Bestellingen blijven hangen",
          "Overzicht welke pakketten teruggestuurd zijn zonder dat deze aangemeld zijn als retour",
          "Een nastuur opdracht maken",
        ],
      },
    ],
  },
  // ---------------------------------------------
  {
    heading: "Retourverwerking & scan-app ",
    body: "Verminderen. Verhelpen. Snel verwerken.",
    meerInfo: "",
    images: [
      { src: "/images/home/retourverwerking/1.png", alt: "Retourverwerking 1" },
      { src: "/images/home/retourverwerking/2.png", alt: "Retourverwerking 2" },
      { src: "/images/home/retourverwerking/3.png", alt: "Retourverwerking 3" },
      { src: "/images/home/retourverwerking/4.png", alt: "Retourverwerking 4" },
      // { src: '/images/home/retourverwerking/5.png', alt: 'Retourverwerking 5' },
    ],
    tablistClass: generateUuid(),
    mainTab: 2,
    tabs: [
      {
        title: "Verwerking",
        value: generateUuid(),
        activeBullet: 2,
        chips: ["Handig"],
        bullets: [
          "Retour accepteren met 1 klik",
          "Retour op on-hold kunnen zetten",
          "Nastuur-opdracht aanmaken",
          "Retourmanagement",
          "Uitgebreide retourrapportages",
          "Retouropmerkingen toevoegen",
        ],
      },
      {
        title: "Statussen",
        value: generateUuid(),
        activeBullet: 1,
        chips: ["Nieuw"],
        bullets: [
          "Overzicht verlopen retouren",
          "Inzicht oplosbare en niet-oplosbare retouren",
          "Melding wanneer buiten retourtermijn valt",
          "Notificatie zelfde bestelling al vaker retour gemeld",
        ],
      },
      {
        title: "Scan-app",
        value: generateUuid(),
        activeBullet: 2,
        chips: ["Veelgebruikt"],
        bullets: [
          "Retourpakket scannen via de barcode en verwerken met 1 klik",
          "Foto's en/of notities bijvoegegn",
          "Herkent retouren maar ook teruggestuurd of niet afgehaald.",
          "Maakt terugstuur verzoek aan bij afkeuren retour",
          "Automatisch vergoedingsaanvraag voor onterechte retour",
          "Inzicht in welke retouren werkelijk ontvangen zijn",
        ],
      },
    ],
  },
  // ---------------------------------------------
  {
    heading: "CaseHub",
    body: "Klantvragen direct naar jouw eigen klantomgeving.",
    meerInfo: "",
    images: [
      { src: "/images/home/casehub/1.png", alt: "CaseHub 1" },
      { src: "/images/home/casehub/2.png", alt: "CaseHub 2" },
      { src: "/images/home/casehub/3.png", alt: "CaseHub 3" },
    ],
    tablistClass: generateUuid(),
    mainTab: 0,
    tabs: [
      {
        title: "Algemeen",
        value: generateUuid(),
        activeBullet: 1,
        chips: ["Top"],
        bullets: [
          "Klanten kunnen direct reageren op jouw emails",
          "Verminderd het aantal klantvragen in bol.com",
          "Snelle afhandeling",
          "Inzicht of klant email geopend heeft",
        ],
      },
      {
        title: "Campagnes",
        value: generateUuid(),
        activeBullet: 0,
        chips: ["Gemak"],
        bullets: [
          "Kant n klare campagnes inclusief klik-buttons",
          "Email analytics",
          "Review campagnes opstellen",
          "BulkMailen",
        ],
      },
    ],
  },
  // ---------------------------------------------
  {
    heading: "Klantvragen Bol.com ",
    body: "Al jouw klantvragen op 1 plek",
    meerInfo: "",
    images: [
      { src: "/images/home/klantvragen/1.png", alt: "Klantvragen Bol.com 1" },
      { src: "/images/home/klantvragen/2.png", alt: "Klantvragen Bol.com 2" },
      { src: "/images/home/klantvragen/3.png", alt: "Klantvragen Bol.com 3" },
    ],
    tablistClass: generateUuid(),
    mainTab: 0,
    tabs: [
      {
        title: "Algemeen",
        value: generateUuid(),
        activeBullet: 4,
        chips: ["Veelgebruikt"],
        bullets: [
          "Supersnel klantvragen beantwoorden",
          "Maak vervolgacties aan voor klantvragen, zoals iets nasturen",
          "Responsetimer",
          "Geintegreerde communicatie tussen Bol, klant en vervoerder",
          "Indeling email templates",
        ],
      },
      {
        title: "Prestatienormen",
        value: generateUuid(),
        activeBullet: 1,
        chips: ["Top"],
        bullets: [
          "Houd rekening met jouw prestatienormen",
          "Tracking of klantvragen binnen 24 uur vallen",
        ],
      },
    ],
  },
  // ---------------------------------------------
  // {
  //   heading: 'Snelle aanpasssingen',
  //   body: 'Alles met 1 klik wijzigen, aanvragen of mailen.',
  //   meerInfo: '',
  //   tablistClass: generateUuid(),
  //   mainTab: 0,
  //   tabs: [
  //     {
  //       title: 'Algemeen',
  //       value: generateUuid(),
  //       activeBullet: 2,
  //       chips: ['Veelgebruikt'],
  //       bullets: [
  //         'Order samenvatting',
  //         'Supersnel prijs, voorraad, levertijd aanpassen met 1 klik',
  //         'Aanpassen van prijzen of levertijden op een specifiek moment',
  //         'Gegroepeerd wijzigen',
  //         'Notities toevoegen',
  //       ],
  //     },
  //     {
  //       title: 'Periodieke aanpassingen',
  //       value: generateUuid(),
  //       bullets: ['Periodiek prijzen en levertijden aanpassen volgens jouw schema'],
  //     },
  //   ],
  // },
  // ---------------------------------------------
  {
    heading: "Facturatie",
    body: "Nu met gescheiden NL en BE omzet.",
    meerInfo: "",
    images: [{ src: "/images/home/facturatie/1.png", alt: "Facturatie 1" }],
    tablistClass: generateUuid(),
    tabs: [
      {
        title: "Facturen uploaden",
        value: generateUuid(),
        activeBullet: 2,
        chips: ["Nieuw"],
        bullets: [
          "Facturen uploaden",
          "Maakt facturen en uploadt deze automatisch naar Bol.com",
          "Download jouw PDF facturen per maand in 1 bestand",
          "Per maand de omzet voor NL en voor BE",
        ],
      },
    ],
  },
];