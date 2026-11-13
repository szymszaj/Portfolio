import { prerenderToNodeStream } from "react-dom/static";
import Root from "./Root.jsx";

export { fetchCmsContent } from "./lib/sanity";

/** Render do HTML-a; prerenderToNodeStream czeka na wszystkie Suspense. */
export const render = async (initialContent) => {
  const errors = [];

  const { prelude } = await prerenderToNodeStream(
    <Root initialContent={initialContent} />,
    {
      onError(error) {
        errors.push(error);
      },
    },
  );

  prelude.setEncoding("utf8");

  let html = "";
  for await (const chunk of prelude) {
    html += chunk;
  }

  if (errors.length > 0) {
    throw errors[0];
  }

  return html;
};
