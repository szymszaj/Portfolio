import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./sanity";

const builder = imageUrlBuilder(sanityClient);

/** URL z CDN Sanity: auto=format + w=. `source` to id assetu. */
export const sanityImageUrl = (source, width) =>
  builder.image(source).width(width).auto("format").fit("max").quality(75).url();

export const sanityImageSrcSet = (source, widths) =>
  widths.map((width) => `${sanityImageUrl(source, width)} ${width}w`).join(", ");

/** Propsy <img> z fallbackiem do lokalnego assetu z translations.js. */
export const cmsImageProps = ({ imageId, image }, { widths, sizes }) => {
  if (!imageId) return { src: image };

  return {
    src: sanityImageUrl(imageId, widths[widths.length - 1]),
    srcSet: sanityImageSrcSet(imageId, widths),
    sizes,
  };
};
