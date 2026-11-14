import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchCmsContent } from "../lib/sanity";
import { CmsContext } from "./cmsStore";

export const CmsProvider = ({ children, initialContent = null }) => {
  const [cmsContent, setCmsContent] = useState(initialContent);

  useEffect(() => {
    fetchCmsContent()
      .then((content) => {
        if (content && Object.keys(content).length > 0) {
          setCmsContent(content);
        }
      })
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
  initialContent: PropTypes.object,
};
