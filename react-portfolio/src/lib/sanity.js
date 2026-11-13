import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "z5td8f6b";
const dataset = import.meta.env.VITE_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
});

const CONTENT_QUERY = `{
  "siteContent": *[_type == "siteContent"][0]{
    hero,
    about,
    "expertise": expertise[]{
      "id": id.current,
      index,
      title,
      accent,
      points
    }
  },
  "projects": *[_type == "project"] | order(order asc){
    title,
    description,
    technologies,
    link,
    "image": image.asset->url
  },
  "courses": *[_type == "course"] | order(order asc){
    title,
    provider,
    duration,
    status,
    completedDate,
    description,
    technologies,
    level,
    instructor,
    progress,
    certificateUrl
  },
  "experiences": *[_type == "experience"] | order(order asc){
    year,
    role,
    company,
    description,
    technologies
  },
  "education": *[_type == "education"] | order(order asc){
    school,
    degree,
    period,
    status,
    description
  }
}`;

const mapToTranslationsShape = (data) => {
  if (!data) return {};

  const result = {};
  const { siteContent, projects, courses, experiences, education } = data;

  if (siteContent?.hero) {
    result.hero = {
      titles: siteContent.hero.titles,
      lead: siteContent.hero.lead,
      tabs: {
        work: siteContent.hero.work,
        about: siteContent.hero.about,
        hobby: siteContent.hero.hobby,
      },
    };
  }

  if (siteContent?.about) {
    result.about = {
      eyebrow: siteContent.about.eyebrow,
      headline: siteContent.about.headline,
      lead: siteContent.about.lead,
    };
    if (siteContent.about.stats?.length) {
      result.ABOUT_STATS = siteContent.about.stats;
    }
    if (siteContent.about.languages?.length) {
      result.LANGUAGES = siteContent.about.languages;
    }
    if (siteContent.about.interests?.length) {
      result.INTERESTS = siteContent.about.interests;
    }
  }

  if (siteContent?.expertise?.length) {
    result.EXPERTISE = siteContent.expertise;
  }

  if (projects?.length) result.PROJECTS = projects;
  if (courses?.length) result.COURSES = courses;
  if (experiences?.length) result.EXPERIENCES = experiences;
  if (education?.length) result.EDUCATION = education;

  return result;
};

export const fetchCmsContent = async () => {
  const data = await sanityClient.fetch(CONTENT_QUERY);
  return mapToTranslationsShape(data);
};
