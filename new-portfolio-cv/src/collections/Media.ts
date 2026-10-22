import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Plik graficzny",
    plural: "Pliki graficzne",
  },
  admin: {
    description: "Zdjęcia projektów używane w sekcji „Projekty”.",
  },
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: "card",
        width: 960,
        height: 640,
        position: "centre",
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Opis alternatywny (alt)",
      required: true,
    },
  ],
}
