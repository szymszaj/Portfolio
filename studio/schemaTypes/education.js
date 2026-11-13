import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Wykształcenie',
  type: 'document',
  fields: [
    defineField({name: 'school', title: 'Szkoła / Uczelnia', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'degree', title: 'Kierunek / Tytuł', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'period', title: 'Okres', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {list: [{title: 'Ukończono', value: 'completed'}, {title: 'W trakcie', value: 'inProgress'}]},
      validation: (r) => r.required(),
    }),
    defineField({name: 'description', title: 'Opis', type: 'text', rows: 3, validation: (r) => r.required()}),
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
    select: {title: 'school', subtitle: 'degree'},
  },
})
