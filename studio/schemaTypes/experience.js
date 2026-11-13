import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Doświadczenie',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Okres (np. "2025 - obecnie")',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({name: 'role', title: 'Stanowisko', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'company', title: 'Firma', type: 'string'}),
    defineField({
      name: 'description',
      title: 'Opis (lista punktów)',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologie',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
      description: 'Najnowsze doświadczenie powinno mieć najniższą wartość.',
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {title: 'Kolejność', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'role', subtitle: 'company'},
  },
})
