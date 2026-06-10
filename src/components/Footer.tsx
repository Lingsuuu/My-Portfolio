import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/70 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-white/70 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-semibold uppercase tracking-[0.3em] text-gold">
            Arjay Dael
          </p>
          <p className="mt-4 text-sm text-white/70">
            © 2025 Arjay Dael. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-white/80">
          <a
            href="#"
            className="inline-flex items-center gap-2 transition hover:text-gold"
          >
            <FiInstagram /> Instagram
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 transition hover:text-gold"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 transition hover:text-gold"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
