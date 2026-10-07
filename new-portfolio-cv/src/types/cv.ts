export type CvHeaderViewModel = {
  imie: string;
  tytul: string;
};

export type CvAboutViewModel = {
  opis: string | null;
};

export type CvExperienceItemViewModel = {
  id: string;
  firma: string;
  stanowisko: string;
  okres: string | null;
  opis: string | null;
};

export type CvEducationItemViewModel = {
  id: string;
  szkola: string;
  kierunek: string | null;
  okres: string | null;
};

export type CvSkillViewModel = {
  id: string;
  nazwa: string;
};

export type CvLanguageViewModel = {
  id: string;
  jezyk: string;
  poziom: string | null;
};

export type CvContactViewModel = {
  email: string | null;
  linkedin: string | null;
  github: string | null;
};

export type CvViewModel = {
  header: CvHeaderViewModel;
  about: CvAboutViewModel;
  experience: CvExperienceItemViewModel[];
  education: CvEducationItemViewModel[];
  skills: CvSkillViewModel[];
  languages: CvLanguageViewModel[];
  contact: CvContactViewModel;
};
