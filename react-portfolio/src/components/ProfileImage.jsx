import PropTypes from "prop-types";

// Warianty generowane przez `npm run images` (scripts/generate-images.mjs).
const WIDTHS = [192, 288, 384, 576];

const srcSet = (ext) =>
  WIDTHS.map((width) => `/profile/profile-${width}.${ext} ${width}w`).join(", ");

const AVIF = srcSet("avif");
const WEBP = srcSet("webp");
const JPEG = srcSet("jpg");

/**
 * Zdjęcie profilowe w AVIF/WebP/JPEG. `sizes` musi odpowiadać realnej
 * szerokości renderowania, inaczej przeglądarka pobierze za duży wariant.
 */
const ProfileImage = ({
  className = "",
  sizes = "(min-width: 768px) 192px, 144px",
  loading = "lazy",
  fetchPriority = "auto",
  alt = "Szymon Zych",
}) => (
  <picture>
    <source type="image/avif" srcSet={AVIF} sizes={sizes} />
    <source type="image/webp" srcSet={WEBP} sizes={sizes} />
    <img
      src="/profile/profile-384.jpg"
      srcSet={JPEG}
      sizes={sizes}
      width={384}
      height={480}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      className={className}
    />
  </picture>
);

ProfileImage.propTypes = {
  className: PropTypes.string,
  sizes: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  fetchPriority: PropTypes.oneOf(["auto", "high", "low"]),
  alt: PropTypes.string,
};

export default ProfileImage;
