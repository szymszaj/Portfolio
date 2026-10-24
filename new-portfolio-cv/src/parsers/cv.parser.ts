import type { Cv as CvGlobal, Media } from "@/payload-types";
import type { CvViewModel } from "@/types/cv";

function resolveProjectImage(zdjecie: string | Media | null | undefined): {
  url: string | null;
  alt: string;
} {
  if (zdjecie && typeof zdjecie === "object") {
    const media = zdjecie as Media;
    return {
      url: media.sizes?.card?.url ?? media.url ?? null,
      alt: media.alt ?? "",
    };
  }
  return { url: null, alt: "" };
}

export function parseCv(data: CvGlobal): CvViewModel {
  return {
    header: {
      imie: data.imie ?? "",
      tytul: data.tytul ?? "",
    },
    about: {
      opis: data.opis ?? null,
    },
    projects: (data.projekty ?? []).map((item, index) => {
      const image = resolveProjectImage(item.zdjecie);
      return {
        id: item.id ?? `projekt-${index}`,
        nazwa: item.nazwa,
        opis: item.opis ?? null,
        link: item.link ?? null,
        obrazekUrl: image.url,
        obrazekAlt: image.alt || item.nazwa,
      };
    }),
    experience: (data.doswiadczenie ?? []).map((item, index) => ({
      id: item.id ?? `doswiadczenie-${index}`,
      firma: item.firma,
      stanowisko: item.stanowisko,
      okres: item.okres ?? null,
      opis: item.opis ?? null,
    })),
    education: (data.wyksztalcenie ?? []).map((item, index) => ({
      id: item.id ?? `wyksztalcenie-${index}`,
      szkola: item.szkola,
      kierunek: item.kierunek ?? null,
      okres: item.okres ?? null,
    })),
    skills: (data.umiejetnosci ?? []).map((item, index) => ({
      id: item.id ?? `umiejetnosc-${index}`,
      nazwa: item.nazwa,
    })),
    languages: (data.jezyki ?? []).map((item, index) => ({
      id: item.id ?? `jezyk-${index}`,
      jezyk: item.jezyk,
      poziom: item.poziom ?? null,
    })),
    contact: {
      email: data.email ?? null,
      linkedin: data.linkedin ?? null,
      github: data.github ?? null,
    },
  };
}
