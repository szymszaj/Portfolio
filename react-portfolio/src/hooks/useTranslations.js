import { useMemo } from "react";
import { translations } from "../constants/translations";
import { useCmsContentContext, deepMerge } from "../context/cmsStore";

export const useTranslations = () => {
  const cmsContent = useCmsContentContext();
  const content = useMemo(
    () => (cmsContent ? deepMerge(translations, cmsContent) : translations),
    [cmsContent],
  );

  const t = (key) => {
    const keys = key.split(".");
    let value = content;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return { t };
};
