export const dictionary = {
  actions: {
    print: "Zapisz jako PDF",
    themeToggleToLight: "Przełącz na tryb jasny",
    themeToggleToDark: "Przełącz na tryb ciemny",
  },
  sections: {
    about: "O mnie",
    projects: "Projekty",
    experience: "Doświadczenie",
    education: "Wykształcenie",
    skills: "Umiejętności",
    languages: "Języki",
    contact: "Kontakt",
  },
  empty: {
    projects: "Projekty pojawią się tutaj po dodaniu w panelu CMS.",
    experience: "Brak wpisów o doświadczeniu.",
    education: "Brak wpisów o wykształceniu.",
    skills: "Brak wpisanych umiejętności.",
    languages: "Brak wpisanych języków.",
  },
  contact: {
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    form: {
      heading: "Napisz wiadomość",
      nameLabel: "Imię",
      namePlaceholder: "Jak się do Ciebie zwracać",
      emailLabel: "E-mail",
      emailPlaceholder: "Adres do odpowiedzi",
      messageLabel: "Wiadomość",
      messagePlaceholder: "O czym chcesz porozmawiać?",
      submit: "Wyślij",
      sending: "Wysyłanie…",
      success: "Dziękuję, wiadomość dotarła. Odezwę się wkrótce.",
      error:
        "Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio na e-mail.",
    },
  },
  header: {
    photoAlt: "Zdjęcie profilowe",
    ctaExperience: "Zobacz doświadczenie",
    ctaContact: "Napisz do mnie",
  },
  projects: {
    viewLabel: "Zobacz projekt",
  },
} as const;
