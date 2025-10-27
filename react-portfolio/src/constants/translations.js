import project1 from "../assets/projects/project-1.jpg";
import game from "../assets/projects/game.png";
import apartament from "../assets/projects/apartament.png";
import GH from "../assets/projects/GH.png";
import testy from "../assets/projects/testy.jpg";
import figma from "../assets/projects/figma.jpg";

export const translations = {
  PL: {
    hero: {
      titles: [
        "Front-end Developer.",
        "Web Application Builder.",
        "Student UEK.",
      ],
      tabs: {
        work: {
          label: "Czym się zajmuję",
          content:
            "Jestem Front-end Developerem (Junior+) z ponad trzyletnim doświadczeniem komercyjnym w pracy z React, Next.js, TypeScript oraz systemami CMS. Tworzę nowoczesne i skalowalne aplikacje webowe, dbając o jakość kodu, wydajność oraz zgodność z projektami UI (Figma). Posiadam doświadczenie w integracjach z WordPress, Builder.io i Magento, a także w tworzeniu komponentów, testów jednostkowych (Jest) i automatycznych (Playwright). Pracuję w środowisku Agile, wykorzystując na co dzień narzędzia takie jak Git, JIRA, Confluence i Figma. Obecnie rozwijam się w kierunku mid developera, realizując coraz bardziej złożone zadania i pogłębiając wiedzę z zakresu architektury front-endu.",
        },
        about: {
          label: "O mnie",
          content:
            "Technologia to dla mnie nie tylko praca, ale przede wszystkim pasja. W wolnym czasie tworzę własne pomysły i aplikacje, które pozwalają mi eksperymentować z nowymi rozwiązaniami i stale rozwijać umiejętności. Zachęcam do odwiedzenia mojego GitHuba, gdzie dzielę się projektami i kodem. Studiuję zarządzanie na UEK, co poszerza moje spojrzenie na procesy biznesowe i ułatwia łączenie aspektów technicznych z praktycznymi potrzebami użytkowników.",
        },
        hobby: {
          label: "Hobby",
          content:
            "Poza programowaniem interesuję się geopolityką oraz światem nowych technologii, szczególnie sprzętu komputerowego i innowacji w branży IT. W wolnym czasie gram w gry komputerowe, głównie shootery. Lubię też podróżować i odkrywać nowe miejsca, poznając ludzi oraz kulturę różnych regionów świata.",
        },
      },
    },
    navbar: {
      logo: "SH",
      contactTooltip: "Skontaktuj się ze mną",
      modalTitle: "Skontaktuj się ze mną",
      modalSubtitle:
        "Masz pytania lub chcesz porozmawiać o współpracy? Napisz do mnie!",
      toastRedirecting: "Przekierowywanie...",
      toastOpening: "Otwieramy",
      toastTime: "2s",
      contact: "Kontakt",
    },
    technologies: {
      title: "Technologie",
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
        technologies: [
          "Next.js 15",
          "React",
          "Server Components",
          "TypeScript",
        ],
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
        description:
          "Tworzenie sklepu internetowego z wykorzystaniem technologii React.js oraz Tailwind CSS. Tworzenie nowoczesnych aplikacji z wykorzystaniem Next.js oraz integracja z Builder.io, co pozwala na dynamiczne zarządzanie treścią i szybsze wdrażanie nowych funkcji. Tworzenie i wdrażanie testów jednostkowych dla aplikacji klienckiej. Automatyzacja testów dla bloga na stronie sklepu. Aktywny rozwój umiejętności w zakresie Git, React.js oraz JavaScript, co przyczynia się do optymalizacji procesów i podniesienia jakości kodu.",
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
        description:
          "Pomoc przy stronach internetowych, tworzenie komponentów oraz poprawa strony w WordPress. Dodawanie reklam w Google Ads oraz Facebook.",
        technologies: ["WordPress", "Google Ads", "Facebook Ads"],
      },
    ],
  },
  EN: {
    hero: {
      titles: [
        "Front-end Developer.",
        "Web Application Builder.",
        "UEK Student.",
      ],
      tabs: {
        work: {
          label: "What I Do",
          content:
            "I am a Front-end Developer (Junior+) with over three years of commercial experience working with React, Next.js, TypeScript, and CMS systems. I create modern and scalable web applications, ensuring code quality, performance, and compliance with UI designs (Figma). I have experience in integrations with WordPress, Builder.io, and Magento, as well as in creating components, unit tests (Jest), and automated tests (Playwright). I work in an Agile environment, using tools such as Git, JIRA, Confluence, and Figma on a daily basis. Currently, I am developing towards a mid-level developer, working on increasingly complex tasks and deepening my knowledge of front-end architecture.",
        },
        about: {
          label: "About Me",
          content:
            "Technology is not just my work, but above all my passion. In my free time, I create my own ideas and applications that allow me to experiment with new solutions and constantly develop my skills. I encourage you to visit my GitHub, where I share projects and code. I study management at UEK, which broadens my perspective on business processes and makes it easier to combine technical aspects with practical user needs.",
        },
        hobby: {
          label: "Hobbies",
          content:
            "Besides programming, I am interested in geopolitics and the world of new technologies, especially computer hardware and innovations in the IT industry. In my free time, I play computer games, mainly shooters. I also like to travel and discover new places, getting to know people and the culture of different regions of the world.",
        },
      },
    },
    navbar: {
      logo: "SH",
      contactTooltip: "Contact Me",
      modalTitle: "Contact Me",
      modalSubtitle:
        "Have questions or want to talk about collaboration? Write to me!",
      toastRedirecting: "Redirecting...",
      toastOpening: "Opening",
      toastTime: "2s",
      contact: "Contact",
    },
    technologies: {
      title: "Technologies",
    },
    projects: {
      title: "Selected",
      titleHighlight: "projects",
      viewProject: "View Project",
      viewCode: "View Code",
      technologies: "Technologies:",
      description: "Description:",
      projectLink: "Project Link:",
      clickToSeeMore: "Click to see more",
    },
    contact: {
      title: "Contact Me",
      subtitle:
        "Have questions or want to talk about collaboration? Write to me, I will reply as soon as possible.",
      formTitle: "Send Me a Message",
      labels: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "John Doe",
        email: "john@example.com",
        subject: "What would you like to talk about?",
        message: "Write your message here...",
      },
      buttons: {
        send: "Send Message",
        sending: "Sending...",
      },
      messages: {
        success: "Message sent successfully!",
        error: "An error occurred while sending the message. Please try again.",
      },
      contactInfo: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
    },
    courses: {
      title: "Courses",
      titleHighlight: "& Certificates",
      subtitle: "Continuous development and expanding competencies",
      viewCertificate: "View Certificate",
      completed: "Completed",
      inProgress: "In Progress",
      duration: "Duration",
      provider: "Platform",
      level: "Level",
      instructor: "Instructor",
      progress: "Progress",
      completedCount: "completed",
      inProgressCount: "in progress",
    },
    experience: {
      title: "My",
      titleHighlight: "experience",
      year: "Year",
      role: "Role",
      company: "Company",
      description: "Description",
      technologies: "Technologies",
    },
    PROJECTS: [
      {
        title: "Online Course Platform",
        description:
          "Commercial project based on Next.js and WordPress. I was responsible for creating components from Figma, implementing CMS for content management, and refining UX and responsiveness details. The site sells online courses and is fully editable via WordPress panel.",
        technologies: ["Next.js", "TypeScript", "WordPress", "Figma"],
        image: figma,
      },
      {
        title: "Company Homepage",
        description:
          "Creating and implementing components for the company's homepage, built and managed by Builder.io. I was responsible for approximately 60% of frontend elements — from hero sections, through animations, to dynamic modules. Additionally, I created case study subpages based on project documentation and ensured visual consistency throughout the project.",
        technologies: ["Next.js", "Builder.io", "Framer Motion", "TypeScript"],
        image: figma,
      },
      {
        title: "Building Sites from Figma",
        description:
          "Implementation of several websites from scratch — from Figma design to final deployment. Focus on clean code, design compliance, and component flexibility. Each site is fully responsive and prepared for future expansion.",
        technologies: ["Next.js", "React", "TypeScript", "Figma"],
        image: project1,
      },
      {
        title: "Magento Store Integration",
        description:
          "E-commerce project where I handled UX and store maintenance. I was responsible for adding products, frontend fixes, and optimizing appearance and usability. The project required combining technical and business aspects.",
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
        title: "Unit Testing",
        description:
          "In the nordicspirit project, I was responsible for writing unit and automated tests. The goal was to increase code stability and quality. Work included testing components, views, and application logic.",
        technologies: ["React", "TypeScript", "Playwright", "Unit Testing"],
        image: testy,
      },
      {
        title: "Accommodation Website",
        description:
          "Private project: modern website for apartment rental. Built in React using Tailwind and light animations. Enables presentation of offers, galleries, and contact with the owner. Created from scratch, including graphic design.",
        technologies: ["React", "Tailwind", "Framer Motion", "TypeScript"],
        image: apartament,
      },
      {
        title: "Browser Game in JavaScript",
        description:
          "Small hobby project written in pure JavaScript. Simple game that helped develop programming logic and DOM manipulation. Allowed me to combine learning with fun and creativity.",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: game,
        link: "https://szymszaj.github.io/alien-attack/Physics-Game/index.html",
      },
      {
        title: "More Projects",
        description:
          "These are just selected works. On my GitHub, you'll find more projects I work on in my free time. I also encourage conversation — I'd be happy to tell you more about myself, my experiences, and approach.",
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
        level: "Intermediate",
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
        level: "Intermediate",
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
          "Comprehensive Next.js 15 and React course with the latest features, Server Components, App Router, and modern development patterns.",
        technologies: [
          "Next.js 15",
          "React",
          "Server Components",
          "TypeScript",
        ],
        level: "Advanced",
        instructor: "Maximilian Schwarzmüller",
        progress: 6,
      },
      {
        title: "WordPress + WooCommerce + AI Course. 2025",
        provider: "Udemy",
        duration: "22h",
        status: "completed",
        completedDate: "2025",
        description:
          "Creating professional WordPress sites, WooCommerce stores, and integration with AI tools.",
        technologies: ["WordPress", "WooCommerce", "PHP", "AI Integration"],
        level: "Intermediate",
        instructor: "Dariusz Pichałski",
        progress: 100,
      },
      {
        title: "10 Projects in Pure JavaScript",
        provider: "Udemy",
        duration: "10h",
        status: "completed",
        completedDate: "2023",
        description:
          "Practical course building 10 different projects in pure JavaScript. From simple apps to advanced projects.",
        technologies: ["JavaScript", "DOM", "API", "Local Storage"],
        level: "Intermediate",
        instructor: "Mateusz Maj",
        progress: 100,
      },
      {
        title: "JavaScript - The Only Course You Need!",
        provider: "Udemy",
        duration: "7h",
        status: "completed",
        completedDate: "2023",
        description:
          "Complete JavaScript course from basics to advanced concepts. ES6+, async/await, DOM manipulation, app design.",
        technologies: ["JavaScript", "ES6+", "DOM", "Async Programming"],
        level: "Beginner",
        instructor: "Mateusz Maj",
        progress: 100,
      },
      {
        title: "Web Development Course pt. II - SASS, JS, Bootstrap",
        provider: "Udemy",
        duration: "10h+",
        status: "completed",
        completedDate: "2023",
        description:
          "Advanced web development course using SASS, JavaScript, and Bootstrap. Responsive layouts and modern CSS techniques.",
        technologies: ["SASS", "JavaScript", "Bootstrap", "CSS3"],
        level: "Beginner",
        instructor: "Mateusz Maj",
        progress: 100,
      },
      {
        title: "Web Development Course pt. I - HTML, CSS, RWD",
        provider: "Udemy",
        duration: "10h+",
        status: "completed",
        completedDate: "2023",
        description:
          "HTML, CSS basics, semantics, good coding practices, and RWD - responsive websites!",
        technologies: ["HTML", "CSS", "RWD"],
        level: "Beginner",
        instructor: "Mateusz Maj",
        progress: 100,
      },
      {
        title: "Emmet: Write Faster and More Efficient HTML & CSS Code!",
        provider: "Udemy",
        duration: "8h",
        status: "completed",
        completedDate: "2023",
        description:
          "Learning Emmet shortcuts and techniques for faster HTML and CSS writing. Productivity increase in daily work.",
        technologies: ["Emmet", "HTML", "CSS", "Productivity"],
        level: "Beginner",
        instructor: "Mateusz Maj",
        progress: 100,
      },
    ],
    EXPERIENCES: [
      {
        year: "2025 - Present",
        role: "(Junior +) Front-end Developer",
        company: "Indigital",
        description: [
          "Frontend integration with WordPress system.",
          "Design and implementation of frontend components for new investments according to Figma mockups.",
          "Creating and developing new websites from scratch.",
          "Implementing responsive design for different devices and browsers.",
          "Updating data and solving technical problems on production sites.",
          "Expanding WordPress functionality, including integrations, mailers, and form handling.",
          "Gaining knowledge in backend basics (Node.js, REST API, database handling).",
          "Working with repository, maintaining code order and commits according to workflow.",
          "Collaborating with team of designers, testers, and backend developers, sharing knowledge and experience.",
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
        description:
          "Creating an online store using React.js and Tailwind CSS. Building modern applications with Next.js and integration with Builder.io, which allows for dynamic content management and faster implementation of new features. Creating and implementing unit tests for client applications. Automating tests for the store's blog. Actively developing skills in Git, React.js, and JavaScript, which contributes to process optimization and code quality improvement.",
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
        description:
          "Helping with websites, creating components, and improving sites in WordPress. Adding ads in Google Ads and Facebook.",
        technologies: ["WordPress", "Google Ads", "Facebook Ads"],
      },
    ],
  },
};
