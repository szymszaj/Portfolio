"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ContactFormLabels = {
  heading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
};

type ContactFormProps = {
  labels: ContactFormLabels;
};

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm({ labels }: ContactFormProps) {
  const [values, setValues] = useState({ imie: "", email: "", wiadomosc: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("request-failed");

      setStatus("success");
      setValues({ imie: "", email: "", wiadomosc: "" });
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="space-y-4">
        <div>
          <label htmlFor="imie" className="mb-1.5 block text-sm text-muted">
            {labels.nameLabel}
          </label>
          <input
            id="imie"
            name="imie"
            type="text"
            required
            value={values.imie}
            onChange={(e) => setValues((v) => ({ ...v, imie: e.target.value }))}
            placeholder={labels.namePlaceholder}
            className="w-full rounded border border-line bg-surface px-3 py-2 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
            {labels.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            placeholder={labels.emailPlaceholder}
            className="w-full rounded border border-line bg-surface px-3 py-2 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <div>
          <label htmlFor="wiadomosc" className="mb-1.5 block text-sm text-muted">
            {labels.messageLabel}
          </label>
          <textarea
            id="wiadomosc"
            name="wiadomosc"
            required
            rows={4}
            value={values.wiadomosc}
            onChange={(e) => setValues((v) => ({ ...v, wiadomosc: e.target.value }))}
            placeholder={labels.messagePlaceholder}
            className="w-full resize-none rounded border border-line bg-surface px-3 py-2 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center rounded bg-accent px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? labels.sending : labels.submit}
        </button>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-accent"
            >
              {labels.success}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-500"
            >
              {labels.error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
