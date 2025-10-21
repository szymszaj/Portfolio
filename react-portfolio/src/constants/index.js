import project1 from "../assets/projects/project-1.jpg";
import game from "../assets/projects/game.png";
import apartament from "../assets/projects/apartament.png";
import GH from "../assets/projects/GH.png";
import testy from "../assets/projects/testy.jpg";
import figma from "../assets/projects/figma.jpg";
import { FiCode, FiUser, FiHeart } from "react-icons/fi";

export const HERO_TITLES = [
  "Front-end Developer.",
  "Web Application Builder.",
  "Student UEK.",
];

export const HERO_TABS = [
  {
    id: "work",
    label: "Czym się zajmuję",
    icon: FiCode,
    content:
      "Jestem Front-end Developerem (Junior+) z ponad trzyletnim doświadczeniem komercyjnym w pracy z React, Next.js, TypeScript oraz systemami CMS. Tworzę nowoczesne i skalowalne aplikacje webowe, dbając o jakość kodu, wydajność oraz zgodność z projektami UI (Figma). Posiadam doświadczenie w integracjach z WordPress, Builder.io i Magento, a także w tworzeniu komponentów, testów jednostkowych (Jest) i automatycznych (Playwright). Pracuję w środowisku Agile, wykorzystując na co dzień narzędzia takie jak Git, JIRA, Confluence i Figma. Obecnie rozwijam się w kierunku mid developera, realizując coraz bardziej złożone zadania i pogłębiając wiedzę z zakresu architektury front-endu.",
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
      "Poza programowaniem interesuję się geopolityką oraz światem nowych technologii, szczególnie sprzętu komputerowego i innowacji w branży IT. W wolnym czasie gram w gry komputerowe, głównie shootery. Lubię też podróżować i odkrywać nowe miejsca, poznając ludzi oraz kulturę różnych regionów świata.",
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
    title: "Platforma z kursami online",
    description:
      "Projekt komercyjny oparty o Next.js i WordPress. Odpowiadałem za tworzenie komponentów z Figmy, wdrożenie CMS-a do zarządzania treścią oraz dopracowanie szczegółów pod kątem UX i responsywności. Strona sprzedaje kursy online i jest w pełni edytowalna przez panel WordPressa.",
    technologies: ["Next.js", "TypeScript", "WordPress", "Figma"],
    image: figma,
  },
  {
    title: "Strona główna firmy",
    description:
      "Tworzenie i wdrażanie komponentów do strony głównej firmy, zbudowanej i zarządzanej przez Builder.io. Odpowiadałem za ok. 60% elementów frontendu — od sekcji hero, przez animacje, po dynamiczne moduły. Dodatkowo tworzyłem podstrony case study na podstawie dokumentacji projektowej oraz dbałem o spójność wizualną całego projektu.",
    technologies: ["Next.js", "Builder.io", "Framer Motion", "TypeScript"],
    image: figma,
  },

  {
    title: "Budowa stron z Figmy",
    description:
      "Realizacja kilku stron internetowych od podstaw — od projektu z Figmy po finalne wdrożenie. Skupienie na czystym kodzie, zgodności z designem i elastyczności komponentów. Każda strona w pełni responsywna i przygotowana pod przyszłą rozbudowę.",
    technologies: ["Next.js", "React", "TypeScript", "Figma"],
    image: project1,
  },
  {
    title: "Integracja sklepu z Magento",
    description:
      "Projekt e-commerce, w którym zajmowałem się stroną UX i utrzymaniem sklepu. Odpowiadałem za dodawanie produktów, poprawki frontendu oraz optymalizację wyglądu i użyteczności. Projekt wymagał łączenia aspektów technicznych z biznesowymi.",
    technologies: [
      "Magento",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Headless CMS",
    ],
    image: project1,
  },
  {
    title: "Testy jednostkowe",
    description:
      "W projekcie nordicspirit byłem odpowiedzialny za pisanie testów jednostkowych i automatycznych. Celem było zwiększenie stabilności i jakości kodu. Praca obejmowała testy komponentów, widoków i logiki aplikacji.",
    technologies: ["React", "TypeScript", "Playwright", "Unit Testing"],
    image: testy,
  },
  {
    title: "Strona dla obiektu noclegowego",
    description:
      "Projekt prywatny:  nowoczesna strona dla apartamentu na wynajem. Zrealizowana w React z użyciem Tailwinda i lekkich animacji. Umożliwia prezentację oferty, galerii oraz kontakt z właścicielem. Stworzona od zera, łącznie z projektem graficznym.",
    technologies: ["React", "Tailwind", "Framer Motion", "TypeScript"],
    image: apartament,
  },
  {
    title: "Gra przeglądarkowa w JavaScript",
    description:
      "Mały projekt hobbystyczny napisany w czystym JavaScript. Prosta gra, dzięki której rozwijałem logikę programistyczną i pracę z DOM-em. Pozwoliła mi połączyć naukę z zabawą i kreatywnością.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: game,
    link: "https://szymszaj.github.io/alien-attack/Physics-Game/index.html",
  },
  {
    title: "Więcej projektów",
    description:
      "To tylko wybrane realizacje, na moim GitHubie znajdziesz więcej projektów, nad którymi pracuję w wolnym czasie. Zachęcam również do rozmowy, chętnie opowiem więcej o sobie, moich doświadczeniach i podejściu.",
    technologies: ["szymszaj"],
    link: "https://github.com/szymszaj",
    image: GH,
  },
];

export const COURSES_TEXTS = {
  title: "Kursy",
  // titleHighlight: "certyfikaty",
  viewCertificate: "Zobacz certyfikat",
  completed: "Ukończono",
  inProgress: "W trakcie",
  duration: "Czas trwania",
  provider: "Platforma",
};

export const COURSES = [
  {
    title: "Understanding TypeScript",
    provider: "Udemy",
    duration: "22.5h",
    status: "inProgress",
    completedDate: null,
    description:
      "Boost your JavaScript projects with TypeScript: Learn all about core types, generics, TypeScript + React or Node & more!",
    technologies: ["React", "TypeScript"],

    level: "Średniozaawansowany",
    instructor: "Maximilian Schwarzmüller",
    progress: 1,
  },
  {
    title: "JavaScript - The Complete Guide 2025 (Beginner + Advanced)",
    provider: "Udemy",
    duration: "52h",
    status: "inProgress",
    completedDate: null,
    description:
      "Modern JavaScript from the beginning - all the way up to JS expert level!",
    technologies: ["JavaScript"],

    level: "Średniozaawansowany",
    instructor: "Maximilian Schwarzmüller",
    progress: 2,
  },
  {
    title: "Next.js 15 & React - The Complete Guide",
    provider: "Udemy",
    duration: "40.5h",
    status: "inProgress",
    completedDate: null,
    description:
      "Kompleksowy kurs Next.js 15 i React z najnowszymi funkcjonalnościami, Server Components, App Router oraz nowoczesne wzorce developmentu.",
    technologies: ["Next.js 15", "React", "Server Components", "TypeScript"],

    level: "Zaawansowany",
    instructor: "Maximilian Schwarzmüller",
    progress: 6,
  },
  {
    title: "Kurs WordPress + Woocommerce + AI. 2025",
    provider: "Udemy",
    duration: "22h",
    status: "completed",
    completedDate: "2025",
    description:
      "Tworzenie profesjonalnych stron WordPress, sklepów WooCommerce oraz integracja z narzędziami AI.",
    technologies: ["WordPress", "WooCommerce", "PHP", "AI Integration"],

    level: "Średniozaawansowany",
    instructor: "Dariusz Pichałski",
    progress: 100,
  },
  {
    title: "10 projektów w czystym JavaScript",
    provider: "Udemy",
    duration: "10h",
    status: "completed",
    completedDate: "2023",
    description:
      "Praktyczny kurs budowania 10 różnych projektów w czystym JavaScript. Od prostych aplikacji po zaawansowane projekty.",
    technologies: ["JavaScript", "DOM", "API", "Local Storage"],

    level: "Średniozaawansowany",
    instructor: "Mateusz Maj",
    progress: 100,
  },
  {
    title: "JavaScript - Jedyny Kurs, Którego Potrzebujesz!",
    provider: "Udemy",
    duration: "7h",
    status: "completed",
    completedDate: "2023",
    description:
      "Kompletny kurs JavaScript od podstaw po zaawansowane koncepty. ES6+, async/await, DOM manipulation, projektowanie aplikacji.",
    technologies: ["JavaScript", "ES6+", "DOM", "Async Programming"],

    level: "Podstawowy",
    instructor: "Mateusz Maj",
    progress: 100,
  },
  {
    title: " Kurs Tworzenia Stron WWW cz. II - SASS, JS, Bootstrap",
    provider: "Udemy",
    duration: "10h+",
    status: "completed",
    completedDate: "2023",
    description:
      "Zaawansowany kurs tworzenia stron z użyciem SASS, JavaScript i Bootstrap. Responsywne layouty i nowoczesne techniki CSS.",
    technologies: ["SASS", "JavaScript", "Bootstrap", "CSS3"],

    level: "podstawowy",
    instructor: "Mateusz Maj",
    progress: 100,
  },

  {
    title: "Kurs Tworzenia Stron WWW cz. I - HTML, CSS, RWD",
    provider: "Udemy",
    duration: "10h+",
    status: "completed",
    completedDate: "2023",
    description:
      "Podstawy HTML, CSS, semantyka, dobre praktyki pisania kodu i RWD, czyli responsywne strony internetowe!.",
    technologies: ["HTML", "CSS", "RWD"],

    level: "podstawowy",
    instructor: "Mateusz Maj",
    progress: 100,
  },
  {
    title: "Emmet: Pisz Szybszy i Wydajniejszy Kod HTML i CSS!",
    provider: "Udemy",
    duration: "8h",
    status: "completed",
    completedDate: "2023",
    description:
      "Nauka skrótów i technik Emmet do szybszego pisania HTML i CSS. Zwiększenie produktywności w codziennej pracy.",
    technologies: ["Emmet", "HTML", "CSS", "Productivity"],

    level: "Podstawowy",
    instructor: "Mateusz Maj",
    progress: 100,
  },
];

export const CONTACT = {
  address: "Polska",
  phoneNo: "+48 695615115 ",
  email: "szymonzych936@gmail.com",
};
