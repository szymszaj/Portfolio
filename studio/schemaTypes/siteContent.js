import {defineField, defineType} from 'sanity'

const tabField = (name, title) =>
  defineField({
    name,
    title,
    type: 'object',
    fields: [
      defineField({name: 'label', title: 'Etykieta zakładki', type: 'string', validation: (r) => r.required()}),
      defineField({name: 'content', title: 'Treść', type: 'text', rows: 5, validation: (r) => r.required()}),
    ],
  })

export const siteContent = defineType({
  name: 'siteContent',
  title: 'Treść strony',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'titles',
          title: 'Tytuły (Typewriter)',
          type: 'array',
          of: [{type: 'string'}],
          validation: (r) => r.required().min(1),
        }),
        defineField({name: 'lead', title: 'Lead', type: 'text', rows: 4, validation: (r) => r.required()}),
        defineField({
          name: 'tagline',
          title: 'Jedno zdanie (górny pasek)',
          type: 'string',
          description: 'Krótkie zdanie w pasku nad sceną. Puste = tekst z translations.js.',
        }),
        tabField('work', 'Zakładka: Czym się zajmuję'),
        tabField('about', 'Zakładka: O mnie'),
        tabField('hobby', 'Zakładka: Hobby'),
      ],
    }),
    defineField({
      name: 'about',
      title: 'O mnie (sekcja)',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'headline', title: 'Nagłówek', type: 'string', validation: (r) => r.required()}),
        defineField({name: 'lead', title: 'Lead', type: 'text', rows: 4, validation: (r) => r.required()}),
        defineField({
          name: 'stats',
          title: 'Statystyki',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'stat',
              fields: [
                defineField({name: 'value', title: 'Wartość', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'label', title: 'Etykieta', type: 'string', validation: (r) => r.required()}),
              ],
              preview: {select: {title: 'value', subtitle: 'label'}},
            },
          ],
        }),
        defineField({
          name: 'languages',
          title: 'Języki',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'language',
              fields: [
                defineField({name: 'name', title: 'Nazwa', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'level', title: 'Poziom (np. C2)', type: 'string', validation: (r) => r.required()}),
                defineField({name: 'description', title: 'Opis', type: 'string', validation: (r) => r.required()}),
                defineField({
                  name: 'value',
                  title: 'Wartość % (0-100)',
                  type: 'number',
                  validation: (r) => r.required().min(0).max(100),
                }),
              ],
              preview: {select: {title: 'name', subtitle: 'level'}},
            },
          ],
        }),
        defineField({
          name: 'interests',
          title: 'Zainteresowania',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),
    defineField({
      name: 'expertise',
      title: 'Obszary kompetencji',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'expertiseArea',
          fields: [
            defineField({name: 'id', title: 'ID', type: 'slug', options: {source: 'title'}, validation: (r) => r.required()}),
            defineField({name: 'index', title: 'Numer (np. 01)', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'title', title: 'Tytuł', type: 'string', validation: (r) => r.required()}),
            defineField({
              name: 'accent',
              title: 'Kolor akcentu',
              type: 'string',
              options: {list: ['accent', 'success', 'iris', 'ember']},
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'points',
              title: 'Punkty',
              type: 'array',
              of: [{type: 'string'}],
              validation: (r) => r.required().min(1),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'index'}},
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Treść strony (singleton)'}
    },
  },
})
