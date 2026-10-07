export interface ExperienceItem {
  id?: string | null;
  firma: string;
  stanowisko: string;
  okres?: string | null;
  opis?: string | null;
}

export interface EducationItem {
  id?: string | null;
  szkola: string;
  kierunek?: string | null;
  okres?: string | null;
}

export interface SkillItem {
  id?: string | null;
  nazwa: string;
}

export interface LanguageItem {
  id?: string | null;
  jezyk: string;
  poziom?: string | null;
}

export interface Cv {
  id: string;
  imie?: string | null;
  tytul?: string | null;
  opis?: string | null;
  email?: string | null;
  linkedin?: string | null;
  github?: string | null;
  doswiadczenie?: ExperienceItem[] | null;
  wyksztalcenie?: EducationItem[] | null;
  umiejetnosci?: SkillItem[] | null;
  jezyki?: LanguageItem[] | null;
  updatedAt?: string;
  createdAt?: string;
}

export interface User {
  id: string;
  email: string;
  updatedAt: string;
  createdAt: string;
}

export interface Config {
  globals: {
    cv: Cv;
  };
  collections: {
    users: User;
  };
}

declare module "payload" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface GeneratedTypes extends Config {}
}