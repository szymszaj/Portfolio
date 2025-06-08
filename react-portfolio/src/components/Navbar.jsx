import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
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
          { href: "https://www.facebook.com", icon: FaFacebook },
          { href: "https://x.com/SzymonZych12", icon: FaXTwitter },
        ].map(({ href, icon: Icon }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-whitetransition-colors duration-300"
          >
            <Icon />
            <span className="absolute left-0 bottom-[-8px] h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
