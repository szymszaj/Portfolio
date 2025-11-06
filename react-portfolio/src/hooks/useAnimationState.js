import { useState, useEffect } from "react";

export const useAnimationState = () => {
  const [hasAnimated, setHasAnimated] = useState(() => {
    return sessionStorage.getItem("hasAnimated") === "true";
  });

  useEffect(() => {
    if (!hasAnimated) {
      sessionStorage.setItem("hasAnimated", "true");
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return sessionStorage.getItem("hasAnimated") === "true";
};
