import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projekt',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Tytuł', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'description', title: 'Opis', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({
      name: 'technologies',
      title: 'Technologie',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({name: 'image', title: 'Zdjęcie', type: 'image', validation: (r) => r.required()}),
    defineField({name: 'link', title: 'Link (opcjonalnie)', type: 'url'}),
    defineField({
      name: 'order',
      title: 'Kolejność wyświetlania',
      type: 'number',
      validation: (r) => r.required(),
    }),
  ],
  orderings: [
    {title: 'Kolejność', name: 'orderAsc', by: [{field: 'order', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', subtitle: 'order', media: 'image'},
  },
})
