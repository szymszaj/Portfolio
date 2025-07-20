import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent">
          SH
        </span>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {[
          {
            href: "https://www.linkedin.com/in/szymon-zych-5b2950296/",
            icon: FaLinkedin,
          },
          { href: "https://github.com/szymszaj", icon: FaGithub },
          { href: "https://x.com/SzymonZych12", icon: FaXTwitter },
        ].map(({ href, icon: Icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 no-underline hover:text-purple-400"
          >
            <Icon />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
