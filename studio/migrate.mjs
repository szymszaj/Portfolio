import {createClient} from '@sanity/client'
import {readFile} from 'node:fs/promises'
import path from 'node:path'
import {siteContent, projects, courses, experiences, education} from './data.mjs'

const token = process.env.SANITY_TOKEN
if (!token) {
  console.error('Brak SANITY_TOKEN. Ustaw zmienną środowiskową i spróbuj ponownie.')
  process.exit(1)
}

const projectId = process.env.SANITY_PROJECT_ID || 'z5td8f6b'
const dataset = process.env.SANITY_DATASET || 'production'
const assetsDir = path.resolve(
  process.cwd(),
  process.env.ASSETS_DIR || '../react-portfolio/src/assets/projects',
)

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

const imageAssetCache = new Map()

async function uploadImage(filename) {
  if (imageAssetCache.has(filename)) {
    return imageAssetCache.get(filename)
  }

  const filePath = path.join(assetsDir, filename)
  const buffer = await readFile(filePath)
  const asset = await client.assets.upload('image', buffer, {filename})
  console.log(`  ✓ wgrano obraz: ${filename}`)

  imageAssetCache.set(filename, asset._id)
  return asset._id
}

async function migrateSiteContent() {
  console.log('→ siteContent (hero, about, expertise)')

  const doc = {
    _id: 'siteContent',
    _type: 'siteContent',
    hero: {
      _type: 'object',
      titles: siteContent.hero.titles,
      lead: siteContent.hero.lead,
      work: siteContent.hero.work,
      about: siteContent.hero.about,
      hobby: siteContent.hero.hobby,
    },
    about: {
      _type: 'object',
      eyebrow: siteContent.about.eyebrow,
      headline: siteContent.about.headline,
      lead: siteContent.about.lead,
      stats: siteContent.about.stats,
      languages: siteContent.about.languages,
      interests: siteContent.about.interests,
    },
    expertise: siteContent.expertise.map((area) => ({
      _type: 'expertiseArea',
      _key: area.id,
      id: {_type: 'slug', current: area.id},
      index: area.index,
      title: area.title,
      accent: area.accent,
      points: area.points,
    })),
  }

  await client.createOrReplace(doc)
  console.log('  ✓ zapisano siteContent')
}

async function migrateProjects() {
  console.log('→ projects')

  for (const item of projects) {
    const assetId = await uploadImage(item.imageFile)

    const doc = {
      _id: `project-${item.order}`,
      _type: 'project',
      title: item.title,
      description: item.description,
      technologies: item.technologies,
      image: {_type: 'image', asset: {_type: 'reference', _ref: assetId}},
      order: item.order,
      ...(item.link ? {link: item.link} : {}),
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ ${item.title}`)
  }
}

async function migrateCourses() {
  console.log('→ courses')

  for (const item of courses) {
    const doc = {
      _id: `course-${item.order}`,
      _type: 'course',
      title: item.title,
      provider: item.provider,
      duration: item.duration,
      status: item.status,
      description: item.description,
      technologies: item.technologies,
      level: item.level,
      instructor: item.instructor,
      progress: item.progress,
      order: item.order,
      ...(item.completedDate ? {completedDate: item.completedDate} : {}),
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ ${item.title}`)
  }
}

async function migrateExperiences() {
  console.log('→ experiences')

  for (const item of experiences) {
    const doc = {
      _id: `experience-${item.order}`,
      _type: 'experience',
      year: item.year,
      role: item.role,
      description: item.description,
      technologies: item.technologies,
      order: item.order,
      ...(item.company ? {company: item.company} : {}),
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ ${item.role} @ ${item.company || 'Freelance'}`)
  }
}

async function migrateEducation() {
  console.log('→ education')

  for (const item of education) {
    const doc = {
      _id: `education-${item.order}`,
      _type: 'education',
      school: item.school,
      degree: item.degree,
      period: item.period,
      status: item.status,
      description: item.description,
      order: item.order,
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ ${item.school}`)
  }
}

async function run() {
  console.log(`Migracja do Sanity (projectId=${projectId}, dataset=${dataset})`)
  console.log(`Katalog ze zdjęciami: ${assetsDir}\n`)

  await migrateSiteContent()
  await migrateProjects()
  await migrateCourses()
  await migrateExperiences()
  await migrateEducation()

  console.log('\nGotowe. Wszystkie dokumenty zapisane w Sanity.')
}

run().catch((err) => {
  console.error('\nMigracja nie powiodła się:', err.message)
  process.exit(1)
})
