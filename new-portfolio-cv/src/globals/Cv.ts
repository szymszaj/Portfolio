import type { GlobalConfig } from 'payload'

export const Cv: GlobalConfig = {
  slug: 'cv',
  label: 'CV',
  admin: {
    group: 'Treść',
  },
  fields: [
    {
      name: 'imie',
      type: 'text',
      label: 'Imię i nazwisko',
      required: true,
    },
    {
      name: 'tytul',
      type: 'text',
      label: 'Stanowisko / tytuł',
      required: true,
    },
    {
      name: 'opis',
      type: 'textarea',
      label: 'O mnie',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Adres e-mail',
    },
    {
      name: 'linkedin',
      type: 'text',
      label: 'Profil LinkedIn (adres URL)',
    },
    {
      name: 'github',
      type: 'text',
      label: 'Profil GitHub (adres URL)',
    },
    {
      name: 'doswiadczenie',
      type: 'array',
      label: 'Doświadczenie',
      labels: {
        singular: 'Wpis doświadczenia',
        plural: 'Wpisy doświadczenia',
      },
      fields: [
        {
          name: 'firma',
          type: 'text',
          label: 'Firma',
          required: true,
        },
        {
          name: 'stanowisko',
          type: 'text',
          label: 'Stanowisko',
          required: true,
        },
        {
          name: 'okres',
          type: 'text',
          label: 'Okres (np. 2021 – obecnie)',
        },
        {
          name: 'opis',
          type: 'textarea',
          label: 'Opis obowiązków',
        },
      ],
    },
    {
      name: 'wyksztalcenie',
      type: 'array',
      label: 'Wykształcenie',
      labels: {
        singular: 'Wpis wykształcenia',
        plural: 'Wpisy wykształcenia',
      },
      fields: [
        {
          name: 'szkola',
          type: 'text',
          label: 'Szkoła / uczelnia',
          required: true,
        },
        {
          name: 'kierunek',
          type: 'text',
          label: 'Kierunek',
        },
        {
          name: 'okres',
          type: 'text',
          label: 'Okres',
        },
      ],
    },
    {
      name: 'umiejetnosci',
      type: 'array',
      label: 'Umiejętności',
      labels: {
        singular: 'Umiejętność',
        plural: 'Umiejętności',
      },
      fields: [
        {
          name: 'nazwa',
          type: 'text',
          label: 'Nazwa umiejętności',
          required: true,
        },
      ],
    },
    {
      name: 'jezyki',
      type: 'array',
      label: 'Języki',
      labels: {
        singular: 'Język',
        plural: 'Języki',
      },
      fields: [
        {
          name: 'jezyk',
          type: 'text',
          label: 'Język',
          required: true,
        },
        {
          name: 'poziom',
          type: 'text',
          label: 'Poziom (np. B2, ojczysty)',
        },
      ],
    },
  ],
}
