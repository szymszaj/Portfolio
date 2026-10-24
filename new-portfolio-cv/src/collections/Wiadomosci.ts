import type { CollectionConfig } from "payload";

export const Wiadomosci: CollectionConfig = {
  slug: "wiadomosci",
  labels: {
    singular: "Wiadomość",
    plural: "Wiadomości",
  },
  admin: {
    useAsTitle: "imie",
    defaultColumns: ["imie", "email", "createdAt"],
    description: "Wiadomości wysłane przez formularz kontaktowy na stronie.",
  },
  access: {
    create: () => true,
    read: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: "imie",
      type: "text",
      label: "Imię",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "E-mail",
      required: true,
    },
    {
      name: "wiadomosc",
      type: "textarea",
      label: "Treść wiadomości",
      required: true,
    },
  ],
};
