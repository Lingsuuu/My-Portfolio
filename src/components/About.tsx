import { motion } from "framer-motion";
// import InteractiveComputer from "./InteractiveComputer";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden border-t border-white/10 py-24"
    >
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-[420px_1fr] md:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glow md:p-8">
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(212,161,90,0.14),transparent_38%)]" />
          {/* <div className="relative z-10 h-full min-h-[420px] w-full overflow-hidden rounded-[24px] bg-[#080b10]">
            <InteractiveComputer />
          </div> */}
        </div>

        <div className="relative z-10 space-y-8 text-white">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold/90">
              About Me
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              I am a Frontend Developer dedicated to creating modern,
              responsive, and user-centered web experiences. With experience in
              HTML, CSS, JavaScript, Tailwind CSS, React, and WordPress, I
              specialize in transforming designs into functional and visually
              appealing websites.
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              I have built responsive web applications, customized WordPress
              websites, and developed dynamic user interfaces that prioritize
              performance, accessibility, and usability. My focus is on
              delivering clean, maintainable code while ensuring a seamless
              experience across all devices.
            </p>
            <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              I am constantly learning and improving my skills to stay up to
              date with the latest frontend technologies and industry best
              practices, allowing me to build efficient, scalable, and engaging
              digital solutions.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
