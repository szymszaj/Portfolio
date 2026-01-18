import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiUser,
  FiCode,
  FiTarget,
  FiHeart,
  FiStar,
  FiBookOpen,
} from "react-icons/fi";
import StarsBackground from "./StarsBackground";

const About = () => {
  const [activeTab, setActiveTab] = useState("passion");

  const tabs = [
    {
      id: "passion",
      label: "Pasja",
      icon: FiHeart,
      content:
        "Jestem pasjonatem technologii i entuzjastą rozwoju osobistego. Moje zainteresowanie dziedziną informatyki narodziło się z fascynacji możliwościami, jakie niesie ze sobą świat cyfrowy.",
      color: "from-red-500 to-pink-500",
    },
    {
      id: "goals",
      label: "Cele",
      icon: FiTarget,
      content:
        "Moim głównym celem zawodowym jest stać się wykwalifikowanym programistą, zdolnym do tworzenia innowacyjnych rozwiązań oraz rozwijania aplikacji, które mają wpływ na ludzi i otaczający nas świat.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "learning",
      label: "Nauka",
      icon: FiBookOpen,
      content:
        "Jednym z moich najważniejszych atutów jest pasja do nauki nowych rzeczy. Uwielbiam wyzwania, które stawiają przede mną technologie i rozwiązania informatyczne, i jestem gotów stale poszerzać swoją wiedzę oraz umiejętności.",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "interests",
      label: "Zainteresowania",
      icon: FiStar,
      content:
        "Uwielbiam rozwiązywać zagadki i wyzwania, dlatego często spędzam czas nad projektami programistycznymi. Gra w gry komputerowe i sport stanowią dla mnie doskonałe narzędzia do rozwijania umiejętności zręcznościowych i koncentracji.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const stats = [
    { label: "Lata doświadczenia", value: "3+", icon: FiCode },
    { label: "Projekty", value: "15+", icon: FiTarget },
    { label: "Technologie", value: "10+", icon: FiStar },
  ];

  return (
    <section className="relative border-b border-neutral-900 pb-24 overflow-hidden">
      <StarsBackground />

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl font-bold relative z-10 drop-shadow"
      >
        O <span className="text-purple-400">mnie</span>
      </motion.h2>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative group">
              <motion.div
                className="relative p-6 bg-gradient-to-br from-neutral-950/90 to-neutral-900/70 rounded-3xl border border-neutral-800/50 backdrop-blur-xl shadow-2xl overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <motion.img
                        className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-xl border border-neutral-700/50"
                        src={profilePic}
                        alt="Szymon Zych"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent rounded-2xl"></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Szymon Zych
                    </h3>
                    <p className="text-purple-400 font-medium mb-4">
                      Junior Front-end Developer
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm text-neutral-400">
                      <FiUser className="w-4 h-4" />
                      <span>Passionate Developer & Tech Enthusiast</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group p-4 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 rounded-2xl border border-neutral-700/50 text-center hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 rounded-lg bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
                      <stat.icon className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => (
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
              className="relative p-8 bg-gradient-to-br from-neutral-950/90 to-neutral-900/70 rounded-3xl border border-neutral-800/50 backdrop-blur-xl shadow-xl min-h-[300px]"
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${
                  tabs.find((t) => t.id === activeTab)?.color
                } opacity-10 rounded-full blur-3xl`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${
                      tabs.find((t) => t.id === activeTab)?.color
                    }`}
                  >
                    {(() => {
                      const activeTabData = tabs.find(
                        (t) => t.id === activeTab,
                      );
                      const IconComponent = activeTabData?.icon;
                      return IconComponent ? (
                        <IconComponent className="w-6 h-6 text-white" />
                      ) : null;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {tabs.find((t) => t.id === activeTab)?.label}
                  </h3>
                </div>

                <p className="text-neutral-300 leading-relaxed text-lg">
                  {tabs.find((t) => t.id === activeTab)?.content}
                </p>

                <div className="mt-6 pt-6 border-t border-neutral-700/50">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                        tabs.find((t) => t.id === activeTab)?.color
                      }`}
                    ></div>
                    <span>
                      Kliknij na inne zakładki aby dowiedzieć się więcej
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
