import type { Cv as CvGlobal } from "@/payload-types";
import type { CvViewModel } from "@/types/cv";

export function parseCv(data: CvGlobal): CvViewModel {
  return {
    header: {
      imie: data.imie ?? "",
      tytul: data.tytul ?? "",
    },
    about: {
      opis: data.opis ?? null,
    },
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
