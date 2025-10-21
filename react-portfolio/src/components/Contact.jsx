import { useState, useRef } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheck,
  FiX,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setStatus({
          type: "success",
          message: "Wiadomość została wysłana pomyślnie!",
        });
        setFormData({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message:
          "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative border-b border-neutral-900 pb-24 overflow-hidden">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-16 text-center text-4xl font-bold relative z-10 drop-shadow"
      >
        Skontaktuj się ze mną
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="relative p-4 md:p-12 bg-gradient-to-br from-neutral-950/90 via-neutral-900/80 to-neutral-950/90 rounded-3xl shadow-2xl backdrop-blur-xl border border-neutral-800/50 overflow-hidden"
        >
          <StarsBackground />

          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-neutral-800/30 rounded-2xl backdrop-blur-sm border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    Email
                  </h3>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-neutral-300 hover:text-white transition-colors duration-200 break-all"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-neutral-800/30 rounded-2xl backdrop-blur-sm border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    Telefon
                  </h3>

                  <a
                    href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
                    className="text-neutral-300 hover:text-white transition-colors duration-200 break-all"
                  >
                    {CONTACT.phoneNo}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-neutral-800/30 rounded-2xl backdrop-blur-sm border border-neutral-700/50 hover:border-neutral-600/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    Lokalizacja
                  </h3>

                  <p className="text-neutral-300">{CONTACT.address}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Wyślij mi wiadomość
                </h3>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  Masz pytania lub chcesz porozmawiać o współpracy? Napisz do
                  mnie, odpowiem tak szybko jak to możliwe.
                </p>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 text-center justify-center ${
                    status.type === "success"
                      ? "bg-green-500/10 border border-green-500/30 text-green-400"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <FiCheck className="w-5 h-5" />
                  ) : (
                    <FiX className="w-5 h-5" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </motion.div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-neutral-800/40 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                      placeholder="Jan Kowalski"
                    />
                  </motion.div>

                  <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Adres email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-neutral-800/40 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                      placeholder="jan@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Temat
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-neutral-800/40 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200"
                    placeholder="Temat wiadomości?"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Wiadomość
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-5 py-4 bg-neutral-800/40 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 resize-none"
                    placeholder="Napisz swoją wiadomość tutaj..."
                  />
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex justify-center"
                >
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                    className={`px-8 py-4 rounded-xl font-semibold text-white shadow-xl transition-all duration-200 flex items-center gap-3 text-lg ${
                      isLoading
                        ? "bg-neutral-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-2xl hover:shadow-purple-500/25"
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Wyślij wiadomość
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
