import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  loop = true,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1400,
  className = "",
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: number;

    if (!isDeleting && charIndex < words[wordIndex].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else {
      if (!isDeleting && charIndex === words[wordIndex].length) {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) =>
          prev + 1 === words.length ? (loop ? 0 : prev) : prev + 1
        );
      }
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [charIndex, isDeleting, wordIndex]);

  return <span className={className}>{text}|</span>;
};

export default Typewriter;
