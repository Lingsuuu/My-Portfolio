import { motion } from "framer-motion";
import useActiveSection from "../hooks/useActiveSection";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const activeSection = useActiveSection();

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white/80 md:px-10">
        <a
          href="#home"
          className="font-semibold uppercase tracking-[0.28em] text-white"
        >
          Arjay Dael
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition duration-300 ${
                activeSection === item.id
                  ? "text-gold after:block after:h-[1px] after:w-full after:bg-gold after:mt-2"
                  : "hover:text-gold"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
