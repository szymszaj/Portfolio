import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import StarsBackground from "./StarsBackground";
import { FiPhone, FiMail } from "react-icons/fi";

export const Contact = () => {
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
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 max-w-xl mx-auto px-4 py-10 bg-neutral-950/70 rounded-2xl shadow-xl backdrop-blur-md border border-neutral-800 overflow-hidden">
        {/* <StarsBackground /> */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className="text-neutral-300 text-base md:text-lg flex items-center gap-2 relative z-10"
        >
          <span className="font-medium text-neutral-100">Adres:</span>{" "}
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.6 }}
          className="text-neutral-300 text-base md:text-lg flex items-center gap-2 relative z-10"
        >
          <span className="font-medium text-neutral-100"></span>
          <a
            href={`tel:${CONTACT.phoneNo.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition"
            title={`Zadzwoń na ${CONTACT.phoneNo}`}
          >
            <FiPhone className="inline text-lg" />
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          href={`mailto:${CONTACT.email}`}
          className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-700 to-purple-500 text-white font-semibold text-base shadow-lg transition 
            hover:from-purple-600 hover:to-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 flex items-center gap-2 relative z-10"
        >
          <FiMail className="inline text-lg" />
          {CONTACT.email}
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
