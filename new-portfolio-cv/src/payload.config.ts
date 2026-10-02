import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { pl } from '@payloadcms/translations/languages/pl'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Cv } from './globals/Cv'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' — Panel CV',
    },
  },
  collections: [Users],
  globals: [Cv],
  editor: lexicalEditor(),
  i18n: {
    supportedLanguages: { pl },
    fallbackLanguage: 'pl',
  },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    // Projekt ma tylko jeden mały global (CV) bez wrażliwych, narastających danych,
    // więc automatyczne "pushowanie" schematu (jak przy dev) jest tu akceptowalne
    // również na produkcji – nie trzeba ręcznie zarządzać migracjami.
    push: true,
  }),
})
