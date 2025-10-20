import VSCODE from "../assets/3.png";
import PROFILE from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "./Typewriter";
import { HERO_TITLES, HERO_TABS } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState("work");

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative border-b border-neutral-900 pb-24 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex flex-col items-center lg:items-start">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="text-6xl lg:text-8xl font-thin tracking-tight mb-8"
              >
                Szymon Zych
              </motion.h1>
              <motion.div
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent">
                  <Typewriter
                    words={HERO_TITLES}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pause={1400}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-3">
                {HERO_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                        : "bg-neutral-800/50 text-neutral-400 hover:text-white hover:bg-neutral-700/50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>

              <motion.div
                className="relative p-6 bg-gradient-to-br from-neutral-950/80 to-neutral-900/60 rounded-2xl border border-neutral-800/50 backdrop-blur-xl shadow-xl min-h-[200px]"
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${
                    HERO_TABS.find((t) => t.id === activeTab)?.color
                  } opacity-10 rounded-full blur-2xl`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${
                        HERO_TABS.find((t) => t.id === activeTab)?.color
                      }`}
                    >
                      {(() => {
                        const activeTabData = HERO_TABS.find(
                          (t) => t.id === activeTab
                        );
                        const IconComponent = activeTabData?.icon;
                        return IconComponent ? (
                          <IconComponent className="w-5 h-5 text-white" />
                        ) : null;
                      })()}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {HERO_TABS.find((t) => t.id === activeTab)?.label}
                    </h3>
                  </div>

                  <p className="text-neutral-300 leading-relaxed">
                    {HERO_TABS.find((t) => t.id === activeTab)?.content}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex justify-center"
          >
            <div
              className="relative cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div
                className={`relative w-80 h-96 md:w-96 md:h-[500px] flip-card-inner flip-card-interactive ${
                  isFlipped ? "flipped" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.8s ease-in-out",
                }}
                onClick={handleCardClick}
              >
                <div className="flip-card-front absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/50">
                  <img
                    className="w-full h-full object-cover"
                    src={VSCODE}
                    alt="Szymon - Workspace"
                  />
                </div>

                <div className="flip-card-back absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/50">
                  <img
                    className="w-full h-full object-cover"
                    src={PROFILE}
                    alt="Szymon - Profile"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
