import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchCmsContent } from "../lib/sanity";
import { CmsContext } from "./cmsStore";

export const CmsProvider = ({ children }) => {
  const [cmsContent, setCmsContent] = useState(null);

  useEffect(() => {
    fetchCmsContent()
      .then(setCmsContent)
      .catch((error) => {
        console.error(
          "Nie udało się pobrać treści z Sanity, używam lokalnych danych:",
          error,
        );
      });
  }, []);

  return (
    <CmsContext.Provider value={cmsContent}>{children}</CmsContext.Provider>
  );
};

CmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
