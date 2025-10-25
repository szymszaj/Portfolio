import { useLanguage } from "./useLanguage";
import { translations } from "../constants/translations";

export const useTranslations = () => {
  const { language } = useLanguage();

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t, language };
};
