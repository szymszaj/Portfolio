import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * false w prerenderze i w pierwszym renderze klienta, true po hydracji.
 * Trzyma układy sterowane scrollem poza prerenderowanym HTML-em.
 */
export const useIsHydrated = () =>
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
