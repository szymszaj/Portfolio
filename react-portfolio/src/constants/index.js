import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/game.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import { FiCode, FiUser, FiHeart } from "react-icons/fi";

export const HERO_TITLES = ["Front-end Developer", "Web Application Builder"];

export const HERO_TABS = [
  {
    id: "work",
    label: "Czym się zajmuję",
    icon: FiCode,
    content:
      "Jestem Front-end Developerem z trzyletnim doświadczeniem w tworzeniu nowoczesnych i skalowalnych aplikacji webowych. Specjalizuję się w React, Next.js oraz TypeScript, skupiając się na wydajności, dostępności i intuicyjnym doświadczeniu użytkownika. Realizuję projekty e-commerce oraz rozwijam się w kierunku architektury głębokiego front-endu.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "about",
    label: "O mnie",
    icon: FiUser,
    content:
      "Technologia to dla mnie nie tylko praca, ale przede wszystkim pasja. W wolnym czasie tworzę własne pomysły i aplikacje, które pozwalają mi eksperymentować z nowymi rozwiązaniami i stale rozwijać umiejętności. Zachęcam do odwiedzenia mojego GitHuba, gdzie dzielę się projektami i kodem. Studiuję zarządzanie na UEK, co poszerza moje spojrzenie na procesy biznesowe i ułatwia łączenie aspektów technicznych z praktycznymi potrzebami użytkowników.",

    color: "from-purple-500 to-pink-500",
  },

  {
    id: "hobby",
    label: "Hobby",
    icon: FiHeart,
    content:
      "Poza programowaniem interesuję się geopolityką, podróżami oraz światem nowych technologii, szczególnie sprzętu komputerowego i innowacji w branży IT. W wolnym czasie gram w gry komputerowe, głównie shootery. Lubię też podróżować i odkrywać nowe miejsca, poznając ludzi oraz kulturę różnych regionów świata.",
    color: "from-red-500 to-orange-500",
  },
];

export const NAVBAR_TEXTS = {
  logo: "SH",
  contactTooltip: "Skontaktuj się ze mną",
  modalTitle: "Skontaktuj się ze mną",
  modalSubtitle:
    "Masz pytania lub chcesz porozmawiać o współpracy? Napisz do mnie!",
  toastRedirecting: "Przekierowywanie...",
  toastOpening: "Otwieramy",
  toastTime: "2s",
};

export const TECHNOLOGIES_TEXTS = {
  title: "Technologie",
};

export const PROJECTS_TEXTS = {
  title: "Wybrane",
  titleHighlight: "projekty",
  viewProject: "Zobacz projekt",
  viewCode: "Zobacz kod",
  technologies: "Technologie:",
  description: "Opis:",
  projectLink: "Link do projektu:",
};

export const CONTACT_TEXTS = {
  title: "Skontaktuj się ze mną",
  subtitle:
    "Masz pytania lub chcesz porozmawiać o współpracy? Napisz do mnie, odpowiem tak szybko jak to możliwe.",
  formTitle: "Wyślij mi wiadomość",
  labels: {
    name: "Imię i nazwisko",
    email: "Adres email",
    subject: "Temat",
    message: "Wiadomość",
  },
  placeholders: {
    name: "Jan Kowalski",
    email: "jan@example.com",
    subject: "O czym chcesz porozmawiać?",
    message: "Napisz swoją wiadomość tutaj...",
  },
  buttons: {
    send: "Wyślij wiadomość",
    sending: "Wysyłanie...",
  },
  messages: {
    success: "Wiadomość została wysłana pomyślnie!",
    error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
  },
  contactInfo: {
    email: "Email",
    phone: "Telefon",
    location: "Lokalizacja",
  },
};

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "(Junior +) Front-end Developer",
    company: "Indigital",
    description: [
      "Integracja frontendu z systemem WordPress.",
      "Projektowanie i implementacja komponentów frontendowych pod nowe inwestycje zgodnie z makietami z Figma.",
      "Tworzenie i rozwój nowych stron internetowych od podstaw.",
      "Implementacja responsywnego designu dla różnych urządzeń i przeglądarek.",
      "Aktualizacja danych i rozwiązywanie problemów technicznych na stronach produkcyjnych.",
      "Rozbudowa funkcjonalności WordPress, w tym integracje, mailery i obsługa formularzy.",
      "Zdobywanie wiedzy z zakresu podstaw backendu (Node.js, REST API, obsługa baz danych).",
      "Praca z repozytorium, dbanie o porządek w kodzie i commity zgodnie z workflow.",
      "Współpraca z zespołem grafików, testerów i backendowców, dzielenie się wiedzą i doświadczeniem.",
    ],
    technologies: [
      "JavaScript",
      "Gatsby",
      "Next.js",
      "Figma",
      "WordPress",
      "API Integration",
      "Basic Backend",
    ],
  },
  {
    year: "2023 - 2025",
    role: "Junior Front-end Developer",
    company: "Monogo",
    description: `Tworzenie sklepu internetowego z wykorzystaniem technologii React.js oraz Tailwind CSS. Tworzenie nowoczesnych aplikacji z wykorzystaniem Next.js oraz integracja z Builder.io, co pozwala na dynamiczne zarządzanie treścią i szybsze wdrażanie nowych funkcji. Tworzenie i wdrażanie testów jednostkowych dla aplikacji klienckiej. Automatyzacja testów dla bloga na stronie sklepu. Aktywny rozwój umiejętności w zakresie Git, React.js oraz JavaScript, co przyczynia się do optymalizacji procesów i podniesienia jakości kodu.`,
    technologies: [
      "Javascript",
      "React.js",
      "Tailwind CSS",
      "Playwright",
      "Next.js",
      "Builder.io",
    ],
  },

  {
    year: "2023",
    role: "Web Development Assistant",
    company: "",
    description: `Pomoc przy stronach internetowych, tworzenie komponentów oraz poprawa strony w WordPress. Dodawanie reklam w Google Ads oraz Facebook.`,
    technologies: ["WordPress", "Google Ads", "Facebook Ads"],
  },
];

export const PROJECTS = [
  {
    title: "Strona z ofertami w Next.js",
    image: project1,
    description:
      "Stworzenie nowoczesnej i szybkiej strony z ofertami od zera w technologii Next.js. Projekt obejmował zaprojektowanie i wdrożenie dynamicznego systemu prezentacji ofert, z możliwością łatwego zarządzania treścią oraz pełną responsywnością. Zastosowane rozwiązania umożliwiają łatwą rozbudowę oraz optymalizację SEO.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Stały support stron internetowych",
    image: project4,
    description:
      "Zapewniam stały support i utrzymanie stron internetowych. Obejmuje to aktualizacje, monitoring, rozwiązywanie problemów technicznych, a także rozwijanie i ulepszanie istniejących funkcjonalności. Gwarantuję szybki czas reakcji i indywidualne podejście do każdego klienta.",
    technologies: ["Next.js", "WordPress", "React", "Support", "Maintenance"],
  },
  {
    title:
      "Tworzenie strony internetowej korzystajac z  custom components + integracja z Builder.io",
    image: project1,
    description:
      "Projektowanie i wdrożenie nowoczesnej strony internetowej z użyciem autorskich, kastomowych komponentów w Next, w pełni zintegrowanych z systemem zarządzania treścią Builder.io. Pozwala to na łatwe rozbudowywanie strony przez klienta, dynamiczne zarządzanie treścią oraz szybkie wdrażanie nowych sekcji lub podstron bez konieczności ingerencji w kod. Rozwiązanie zapewnia wysoką wydajność, elastyczność i pełną responsywność.",
    technologies: ["React", "Next.js", "TypeScript", "Builder.io", "Tailwind"],
  },
  {
    title: "Sklep Internetowy",
    image: project1,
    description:
      "Stworzyłem czysty i profesjonalny wygląd sklepu internetowego, wykorzystując React i Tailwind CSS. Byłem odpowiedzialny za zaprojektowanie i wdrożenie całego wyglądu sklepu, zapewniając estetyczne i responsywne doświadczenie użytkownika.",
    technologies: ["React", "JavaScript", "Tailwind", "headless"],
  },
  {
    title: "Testy Jednostkowe",
    image: project4,
    description:
      "Tworzenie aplikacji z testami jednostkowymi. W projekcie implementowałem testy jednostkowe, aby zapewnić wysoką jakość kodu i niezawodność aplikacji.",
    technologies: ["React.js", "JavaScript", "Unit Testing"],
  },
  {
    title: "Strona internetowa – storytelling",
    image: project1,
    description:
      "Kompleksowe wykonanie strony internetowej prezentującej storytelling marki wraz z atrakcyjną szatą graficzną, animacjami i dbałością o UX/UI. Projekt dostępny pod adresem: [the-story-behind-your-website.vercel.app](https://the-story-behind-your-website.vercel.app/)",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    link: "https://the-story-behind-your-website.vercel.app/",
  },
  {
    title: "Strona internetowa dla prywatnego obiektu noclegowego",
    image: project1,
    description:
      "Projekt i wdrożenie strony internetowej dla apartamentu na wynajem. Strona prezentuje ofertę, galerię zdjęć oraz umożliwia kontakt z właścicielem. Projekt dostępny pod adresem: [apartament-u-moniki.vercel.app](https://apartament-u-moniki.vercel.app/)",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
    link: "https://apartament-u-moniki.vercel.app/",
  },
  {
    title: "Gra przy użyciu JavaScript",
    image: project2,
    description:
      "Moje projekty na GitHub, gra, która ćwiczy umiejętności i szkolenie w JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Strona Portfolio",
    image: project3,
    description:
      "Moje projekty na GitHub, osobista strona portfolio prezentująca projekty, umiejętności i informacje kontaktowe.",
    technologies: ["HTML", "CSS", "SCSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "Polska",
  phoneNo: "+48 695615115 ",
  email: "szymonzych936@gmail.com",
};
