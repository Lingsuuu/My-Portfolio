import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import profileImage from "../assets/arjay dael.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-0 sm:pt-36 sm:pb-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#090909] to-[#050505]" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-16 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 md:flex-row md:items-center md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full max-w-2xl space-y-8"
        >
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-gold/90">
              Front End Web Developer
            </p>
            <h1 className="text-6xl font-black uppercase tracking-[0.18em] text-gold sm:text-7xl">
              Arjay Dael
            </h1>
            <p className="max-w-xl text-xl font-medium text-white/80 sm:text-2xl">
              Crafting premium interfaces with motion, performance, and modern
              branding.
            </p>
          </div>

          <div className="grid gap-6 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div className="space-y-4 text-sm text-white/80 sm:text-base">
              <div>
                <p className="text-white/90">Email</p>
                <p>arjaylead@gmail.com</p>
              </div>
              <div>
                <p className="text-white/90">Instagram</p>
                <p>@king_dyey</p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-white/80 sm:text-base">
              <div>
                <p className="text-white/90">Whatsapp</p>
                <p>+639634270259</p>
              </div>
              <div>
                <p className="text-white/90">Location</p>
                <p>Philippines</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              View Projects
              <FiArrowRight className="ml-2" />
            </a>
            <a
              href="/Arjay-Dael-CV.pdf"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:shadow-[0_0_25px_rgba(212,161,90,0.35)]"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-lg items-end justify-center"
        >
          <div className="absolute -right-16 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
          <img
            src={profileImage}
            alt="Arjay Dael"
            className="relative z-10 h-[770px] w-full rounded-[36px] object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
