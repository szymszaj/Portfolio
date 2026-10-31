import PropTypes from "prop-types";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiWordpress,
  SiGatsby,
  SiFigma,
  SiGit,
  SiNodedotjs,
  SiJest,
  SiVercel,
  SiGithubactions,
  SiJira,
} from "react-icons/si";
import { useTranslations } from "../hooks/useTranslations";
import SectionHeading from "./SectionHeading";
import SectionShell from "./SectionShell";
import Marquee from "./Marquee";

const PRIMARY_STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#E6EDF3" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#663399" },
  { name: "Gatsby", icon: SiGatsby, color: "#A676C2" },
];

const SECONDARY_STACK = [
  { name: "WordPress", icon: SiWordpress, color: "#4A9FD0" },
  { name: "Magento 2", icon: null, color: "#F26322" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Jest", icon: SiJest, color: "#C63D14" },
  { name: "Playwright", icon: null, color: "#45BA4B" },
  { name: "Vercel", icon: SiVercel, color: "#E6EDF3" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
];

const TechChip = ({ name, icon: Icon, color }) => (
  <div className="mx-3 flex items-center gap-3 rounded-xl border border-line bg-surface/90 px-5 py-3 transition-colors duration-300 hover:border-ink-subtle">
    {Icon ? (
      <Icon className="h-6 w-6 shrink-0" style={{ color }} />
    ) : (
      <span
        className="h-2.5 w-2.5 shrink-0 rounded-full"
        style={{ backgroundColor: color }}
      />
    )}
    <span className="whitespace-nowrap font-medium text-ink">{name}</span>
  </div>
);

TechChip.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  color: PropTypes.string.isRequired,
};

const Technologies = () => {
  const { t } = useTranslations();

  return (
    <SectionShell tint="iris" watermark="STACK" className="py-24 lg:py-32">
      <SectionHeading
        title={t("technologies.title")}
        subtitle={t("technologies.subtitle")}
      />

      <div className="relative z-10 space-y-5">
        <Marquee duration={45}>
          {PRIMARY_STACK.map((tech) => (
            <TechChip key={tech.name} {...tech} />
          ))}
        </Marquee>

        <Marquee reverse duration={55}>
          {SECONDARY_STACK.map((tech) => (
            <TechChip key={tech.name} {...tech} />
          ))}
        </Marquee>
      </div>
    </SectionShell>
  );
};

export default Technologies;
