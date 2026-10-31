import project1 from "../assets/projects/project-1.jpg";
import game from "../assets/projects/game.png";
import apartament from "../assets/projects/apartament.png";
import GH from "../assets/projects/GH.png";
import testy from "../assets/projects/testy.jpg";
import figma from "../assets/projects/figma.jpg";

export const translations = {
  hero: {
    titles: [
      "Frontend Developer (Mid).",
      "Web Application Builder.",
      "Student UEK.",
    ],
    lead: "Buduję wydajne i skalowalne aplikacje webowe w React i Next.js, od analizy wymagań, przez implementację, aż po wdrożenie produkcyjne.",
    cta: "Porozmawiajmy",
    scroll: "Przewiń",
    tabs: {
      work: {
        label: "Czym się zajmuję",
        content:
          "Jestem Frontend Developerem (Mid) z ponad 3-letnim doświadczeniem komercyjnym w pracy z React, Next.js, TypeScript oraz systemami CMS i Magento. Odpowiadam za realizację zadań frontendowych end-to-end: od analizy wymagań, przez implementację komponentów zgodnych z projektami UI (Figma), po wdrożenie i utrzymanie rozwiązań produkcyjnych. Testuję kod (Jest, Playwright), dbam o wydajność i coraz śmielej wykorzystuję narzędzia AI do generowania, refaktoryzacji i code review. Pracuję w środowisku Agile, korzystając na co dzień z Git, JIRA, Confluence i Figma.",
      },
      about: {
        label: "O mnie",
        content:
          "Technologia to dla mnie nie tylko praca, ale przede wszystkim pasja. W wolnym czasie tworzę własne pomysły i aplikacje, które pozwalają mi eksperymentować z nowymi rozwiązaniami i stale rozwijać umiejętności. Zachęcam do odwiedzenia mojego GitHuba, gdzie dzielę się projektami i kodem. Studiuję zarządzanie i sprzedaż na UEK, co poszerza moje spojrzenie na procesy biznesowe i ułatwia łączenie aspektów technicznych z praktycznymi potrzebami użytkowników.",
      },
      hobby: {
        label: "Hobby",
        content:
          "Poza programowaniem interesuję się sztuczną inteligencją i tym, jak zmienia warsztat developera, a także szerzej światem nowych technologii i geopolityką. W wolnym czasie gram w gry komputerowe, głównie shootery. Lubię też podróżować i odkrywać nowe miejsca, poznając ludzi oraz kulturę różnych regionów świata.",
      },
    },
  },
  navbar: {
    logo: "SH",
    contactTooltip: "Skontaktuj się ze mną",
    modalTitle: "Skontaktuj się ze mną",
    modalSubtitle:
      "Napisz lub zadzwoń bezpośrednio, albo przejdź do formularza na dole strony.",
    modalCta: "Przejdź do formularza",
    toastRedirecting: "Przekierowywanie...",
    toastOpening: "Otwieramy",
    toastTime: "2s",
    contact: "Kontakt",
  },
  technologies: {
    title: "Technologie",
    subtitle: "Stack, z którym pracuję na co dzień komercyjnie",
  },
  projects: {
    title: "Wybrane",
    titleHighlight: "projekty",
    viewProject: "Zobacz projekt",
    viewCode: "Zobacz kod",
    technologies: "Technologie:",
    description: "Opis:",
    projectLink: "Link do projektu:",
    clickToSeeMore: "Kliknij, aby zobaczyć więcej",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Otwarty na nowe wyzwania",
    subtitle:
      "Szukasz Frontend Developera do zespołu? Chętnie opowiem więcej o swoim doświadczeniu i porozmawiam o rekrutacji.",
    formTitle: "Wyślij mi wiadomość",
    formNote:
      "Napisz w sprawie rekrutacji lub współpracy, a odezwę się zwykle w ciągu jednego dnia roboczego.",
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
      notConfigured:
        "Formularz nie jest jeszcze skonfigurowany. Napisz proszę bezpośrednio na adres e-mail powyżej.",
    },
    contactInfo: {
      email: "Email",
      phone: "Telefon",
      location: "Lokalizacja",
    },
  },
  courses: {
    title: "Kursy",
    titleHighlight: "i certyfikaty",
    subtitle: "Ciągły rozwój i poszerzanie kompetencji",
    viewCertificate: "Zobacz certyfikat",
    completed: "Ukończono",
    inProgress: "W trakcie",
    duration: "Czas trwania",
    provider: "Platforma",
    level: "Poziom",
    instructor: "Instruktor",
    progress: "Postęp",
    completedCount: "ukończonych",
    inProgressCount: "w trakcie",
  },
  experience: {
    title: "Moje",
    titleHighlight: "doświadczenie",
    year: "Rok",
    role: "Stanowisko",
    company: "Firma",
    description: "Opis",
    technologies: "Technologie",
  },
  education: {
    title: "Moje",
    titleHighlight: "wykształcenie",
    subtitle: "Wiedza akademicka i techniczna, która uzupełnia doświadczenie komercyjne",
    period: "Okres",
    inProgress: "W trakcie",
    completed: "Ukończono",
  },
  manifesto: {
    line1: {
      muted: "Frontend Developer",
      strong: "z ponad 3-letnim doświadczeniem komercyjnym",
    },
    line2: {
      strong: "React, Next.js, TypeScript",
      muted: "oraz systemy CMS i Magento",
    },
    line3: {
      strong: "Od analizy wymagań",
      accent: "po wdrożenie produkcyjne.",
    },
  },
  approach: {
    headline: ["Od pomysłu", "do produkcji."],
    paragraphs: [
      "Prowadzę zadania frontendowe end-to-end: analizuję wymagania, przekładam makiety z Figmy na typowane komponenty, a następnie odpowiadam za wdrożenie i utrzymanie rozwiązania na produkcji.",
      "Pracuję w metodyce Agile, korzystając na co dzień z Git, JIRA i Confluence. Współpracuję z grafikami, testerami i backendowcami. Kod zabezpieczam testami jednostkowymi i automatycznymi.",
    ],
    cta: "Porozmawiajmy o projekcie",
  },
  APPROACH_STEPS: [
    {
      title: "Analiza i architektura",
      description:
        "Rozpoznanie wymagań, dobór stacku i przygotowanie struktury projektu w React, Next.js lub Gatsby.",
    },
    {
      title: "Implementacja",
      description:
        "Typowane komponenty zgodne z makietami, podział na Server i Client Components, spójny system oparty o Tailwind.",
    },
    {
      title: "Testy i code review",
      description:
        "Testy jednostkowe (Jest) i automatyczne (Playwright), przegląd kodu i dbanie o porządek w repozytorium.",
    },
    {
      title: "Wdrożenie i utrzymanie",
      description:
        "Buildy w GitHub Actions, wdrożenia na Vercel i Netlify, a potem bieżące poprawki i rozwój na produkcji.",
    },
  ],
  about: {
    eyebrow: "O mnie",
    headline: "Frontend Developer, który dowozi od analizy po produkcję",
    lead: "Ponad 3 lata komercyjnego doświadczenia z React, Next.js, TypeScript oraz systemami CMS i Magento. Odpowiadam za zadania frontendowe end-to-end: od analizy wymagań, przez implementację komponentów zgodnych z Figmą, po wdrożenie i utrzymanie rozwiązań produkcyjnych.",
    expertiseTitle: "Czym się zajmuję",
    languagesTitle: "Języki",
    interestsTitle: "Zainteresowania",
    scrollHint: "Przewiń dalej",
  },
  ABOUT_STATS: [
    { value: "3+", label: "lata komercyjnie" },
    { value: "3", label: "firmy w CV" },
    { value: "8", label: "projektów w portfolio" },
    { value: "9", label: "ukończonych kursów" },
  ],
  EXPERTISE: [
    {
      id: "frontend",
      index: "01",
      title: "Frontend Development",
      accent: "accent",
      points: [
        "Aplikacje w React.js i Next.js: typowane komponenty z podziałem na Server i Client Components",
        "TypeScript i JavaScript: interfejsy, typowanie propsów oraz odpowiedzi z API",
        "Semantyczny HTML, responsywne układy i stylowanie w Tailwind CSS zgodnie z makietami",
        "Architektura atomowa i spójny system projektowy",
      ],
    },
    {
      id: "quality",
      index: "02",
      title: "Testowanie i jakość",
      accent: "success",
      points: [
        "Testy jednostkowe utrzymujące jakość kodu (Jest)",
        "Automatyzacja testów przy użyciu Playwright",
        "Code review i dbanie o porządek w repozytorium",
        "Analiza i naprawa błędów na produkcji",
      ],
    },
    {
      id: "cms",
      index: "03",
      title: "CMS i integracje",
      accent: "iris",
      points: [
        "WordPress jako headless CMS: własne motywy i komunikacja z REST API",
        "Magento 2: zarządzanie i konfiguracja systemu e-commerce",
        "Builder.io do tworzenia i zarządzania treściami stron",
        "Praca z danymi w formacie JSON i mapowanie ich na widoki",
      ],
    },
    {
      id: "workflow",
      index: "04",
      title: "Workflow i narzędzia",
      accent: "ember",
      points: [
        "Git (GitLab, GitHub, Bitbucket) oraz praca zgodna z workflow zespołu",
        "CI/CD: cykliczne buildy w GitHub Actions, wdrożenia na Vercel i Netlify",
        "JIRA i Confluence w codziennej pracy w metodyce Agile",
        "AI-assisted development: generowanie i refaktoryzacja kodu, wsparcie code review",
      ],
    },
  ],
  LANGUAGES: [
    { name: "Polski", level: "C2", description: "Biegły", value: 100 },
    { name: "Angielski", level: "B2", description: "Średniozaawansowany", value: 70 },
  ],
  INTERESTS: ["Podróże", "Gry wideo", "Technologia", "Sztuczna inteligencja"],
  PROJECTS: [
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
        "Tworzenie i wdrażanie komponentów do strony głównej firmy, zbudowanej i zarządzanej przez Builder.io. Odpowiadałem za ok. 60% elementów frontendu: od sekcji hero, przez animacje, po dynamiczne moduły. Dodatkowo tworzyłem podstrony case study na podstawie dokumentacji projektowej oraz dbałem o spójność wizualną całego projektu.",
      technologies: ["Next.js", "Builder.io", "Framer Motion", "TypeScript"],
      image: figma,
    },
    {
      title: "Budowa stron z Figmy",
      description:
        "Realizacja kilku stron internetowych od podstaw, od projektu z Figmy po finalne wdrożenie. Skupienie na czystym kodzie, zgodności z designem i elastyczności komponentów. Każda strona w pełni responsywna i przygotowana pod przyszłą rozbudowę.",
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
        "Projekt prywatny: nowoczesna strona dla apartamentu na wynajem. Zrealizowana w React z użyciem Tailwinda i lekkich animacji. Umożliwia prezentację oferty, galerii oraz kontakt z właścicielem. Stworzona od zera, łącznie z projektem graficznym.",
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
  ],
  COURSES: [
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
      title: "Kurs Tworzenia Stron WWW cz. II - SASS, JS, Bootstrap",
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
        "Podstawy HTML, CSS, semantyka, dobre praktyki pisania kodu i RWD, czyli responsywne strony internetowe!",
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
  ],
  EXPERIENCES: [
    {
      year: "2025 - obecnie",
      role: "Frontend Developer",
      company: "Indigital, Warszawa",
      description: [
        "Samodzielne prowadzenie projektów frontendowych: od konfiguracji i przygotowania architektury w React, Next.js i Gatsby, przez implementację komponentów na podstawie dostarczonych projektów UI, code review, aż po wdrożenie produkcyjne.",
        "Integracja aplikacji frontendowych z WordPress jako Headless CMS, w tym tworzenie motywów oraz implementacja komunikacji z API.",
        "Projektowanie i implementacja komponentów frontendowych pod nowe inwestycje (nowe strony) w oparciu o makiety z Figma.",
        "Aktualizacja danych i rozwiązywanie problemów technicznych pojawiających się na stronach produkcyjnych.",
        "Konfiguracja automatycznych, cyklicznych buildów (GitHub Actions, cron) oraz wdrożeń na Vercel/Netlify.",
        "Budowa typowanych komponentów React/Next.js z podziałem na Server i Client Components, zgodnie z architekturą atomową i systemem projektowym opartym o Tailwind CSS.",
        "Praca z repozytorium, dbanie o porządek w kodzie i commity zgodnie z workflow.",
        "Współpraca z zespołem grafików, testerów i backendowców.",
        "Optymalizacja wydajności stron internetowych pod kątem szybkości i responsywności.",
        "Utrzymywanie i aktualizacja istniejącego kodu w projektach frontendowych.",
        "Implementacja responsywnego designu dla różnych urządzeń i przeglądarek.",
        "Samodzielne wykonywanie przydzielonych zadań.",
        "Przeprowadzanie testów użytkowników i zbieranie feedbacku do dalszych usprawnień.",
      ],
      technologies: [
        "React",
        "Next.js",
        "Gatsby",
        "TypeScript",
        "Tailwind CSS",
        "WordPress",
        "Figma",
        "GitHub Actions",
        "Vercel",
      ],
    },
    {
      year: "2023 - 2025",
      role: "Junior Frontend Developer",
      company: "Monogo, Lublin",
      description: [
        "Projektowanie i rozwój strony firmowej od podstaw w Next.js, obejmujące tworzenie komponentów, integrację z Builder.io oraz wdrażanie animacji.",
        "Builder.io: korzystanie z narzędzia do tworzenia i zarządzania treściami oraz elementami stron.",
        "Tworzenie i implementacja interfejsu sklepu internetowego w React.js z integracją systemu Magento 2 do zarządzania produktami i zamówieniami.",
        "Pisanie testów jednostkowych: tworzenie i utrzymywanie testów jednostkowych dla aplikacji w celu zapewnienia jakości kodu.",
        "Automatyzacja testów: tworzenie i zarządzanie testami automatycznymi przy użyciu narzędzia Playwright.",
        "Obsługa panelu: zarządzanie i konfiguracja systemu Magento 2.",
        "Samodzielne wykonywanie przydzielonych zadań.",
        "Implementacja responsywnego designu dla różnych urządzeń i przeglądarek.",
        "Regularna współpraca z kolegami i przełożonymi.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Builder.io",
        "Magento 2",
        "Playwright",
      ],
    },
    {
      year: "2023",
      role: "Web Development Assistant",
      company: "T & T. Biuro, Zakopane",
      description:
        "Pomoc przy stronach internetowych, tworzenie komponentów oraz poprawa strony w WordPress. Dodawanie reklam w Google Ads oraz Facebook.",
      technologies: ["WordPress", "Google Ads", "Facebook Ads"],
    },
  ],
  EDUCATION: [
    {
      school: "Uniwersytet Ekonomiczny w Krakowie",
      degree: "Studia I stopnia: Zarządzanie, sprzedaż",
      period: "2023 - 2026",
      status: "inProgress",
      description:
        "Studia poszerzające spojrzenie na procesy biznesowe. Ułatwiają łączenie aspektów technicznych z praktycznymi potrzebami użytkowników i biznesu.",
    },
    {
      school:
        "Zespół Szkół Technicznych i Placówek im. Stanisława Staszica, Nowy Targ",
      degree: "Technik geodeta",
      period: "do 2023",
      status: "completed",
      description:
        "Wykształcenie techniczne, które rozwinęło dokładność, analityczne myślenie i praktyczne podejście do rozwiązywania problemów.",
    },
  ],
};
