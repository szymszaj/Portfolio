import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("PL");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "PL" ? "EN" : "PL"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
