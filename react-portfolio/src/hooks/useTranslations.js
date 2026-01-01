import { translations } from "../constants/translations";

export const useTranslations = () => {
  const t = (key) => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t };
};
