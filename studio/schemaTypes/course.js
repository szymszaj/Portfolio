import {defineField, defineType} from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Kurs',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Tytuł', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'provider', title: 'Platforma', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'duration', title: 'Czas trwania', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {list: [{title: 'Ukończono', value: 'completed'}, {title: 'W trakcie', value: 'inProgress'}]},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'completedDate',
      title: 'Data zakończenia',
      type: 'string',
      description: 'Np. "2025". Puste jeśli kurs w trakcie.',
    }),
    defineField({name: 'description', title: 'Opis', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({
      name: 'technologies',
      title: 'Technologie',
      type: 'array',
      of: [{type: 'string'}],
      validation: (r) => r.required().min(1),
    }),
    defineField({name: 'level', title: 'Poziom', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'instructor', title: 'Instruktor', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'progress',
      title: 'Postęp (%)',
      type: 'number',
      validation: (r) => r.required().min(0).max(100),
    }),
    defineField({name: 'certificateUrl', title: 'Link do certyfikatu (opcjonalnie)', type: 'url'}),
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
    select: {title: 'title', subtitle: 'provider'},
  },
})
