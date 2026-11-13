import { createContext, useContext } from "react";

export const CmsContext = createContext(null);

const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === "string" && value.trim() === "");

export const deepMerge = (base, overrides) => {
  if (isEmpty(overrides)) return base;
  if (Array.isArray(overrides)) return overrides;
  if (typeof overrides !== "object") return overrides;

  const merged = { ...base };
  for (const key of Object.keys(overrides)) {
    merged[key] = deepMerge(base?.[key], overrides[key]);
  }
  return merged;
};

export const useCmsContentContext = () => useContext(CmsContext);
