import { useEffect } from "react";
import { useLenis } from "lenis/react";

const INTRO_MS = 2000;
const END_EVENTS = ["pointerdown", "keydown", "wheel", "touchstart"];

export const useIntro = (contentRef) => {
  const lenis = useLenis();

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.intro !== "play") return undefined;

    const content = contentRef.current;
    content?.setAttribute("inert", "");
    lenis?.stop();

    let timer = 0;

    const finish = () => {
      clearTimeout(timer);
      root.dataset.intro = "done";
      root.classList.remove("intro-lock");
      content?.removeAttribute("inert");
      lenis?.start();
      END_EVENTS.forEach((event) => window.removeEventListener(event, finish));
    };

    END_EVENTS.forEach((event) =>
      window.addEventListener(event, finish, { passive: true }),
    );
    timer = setTimeout(finish, INTRO_MS);

    return () => {
      clearTimeout(timer);
      END_EVENTS.forEach((event) => window.removeEventListener(event, finish));
    };
  }, [lenis, contentRef]);
};
