import { HERO_CONTENT } from "../constants";
import VSCODE from "../assets/3.png";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const HERO_TITLES = [
  "Junior Front-end Developer",
  "React Enthusiast",
  "Next.js & TypeScript Fan",
];

const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Szymon Zych
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-2xl md:text-3xl tracking-tight text-transparent flex items-center flex-wrap break-words w-full"
            >
              <Typewriter
                words={HERO_TITLES}
                typingSpeed={80}
                deletingSpeed={40}
                pause={1400}
              />
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="rounded-2xl"
              src={VSCODE}
              alt="Szymon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
