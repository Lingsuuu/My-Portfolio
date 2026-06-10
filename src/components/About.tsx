import { motion } from "framer-motion";

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
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
            alt="Profile"
            className="relative z-10 h-full min-h-[420px] w-full rounded-[24px] object-cover"
          />
        </div>

        <div className="relative z-10 space-y-8 text-white">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold/90">
              About Me
            </p>
            <h2 className="text-4xl font-black md:text-5xl">
              A modern developer with luxury design taste
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/80 md:text-lg">
              I'm a passionate Front End Web Developer with 2 years of
              experience building modern, scalable web applications. I
              specialize in creating beautiful, functional interfaces and robust
              backend systems that users love.
            </p>
          </div>

          <div className="grid gap-6 rounded-3xl border border-white/10 bg-black/50 p-8 shadow-glow">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gold/10 text-center leading-10 text-gold">
                  01
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold/90">
                    Education
                  </p>
                  <p className="text-base text-white/80">
                    Bachelor of Science in Information Technology
                  </p>
                  <p className="text-sm text-white/60">
                    Baliwag Polytechnic College — 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-gold/90">
                What I'm Good At
              </p>
              <ul className="grid gap-3 text-white/80 sm:grid-cols-2">
                {[
                  "Building responsive and accessible web applications",
                  "Database design and optimization",
                  "API Integration",
                  "Team collaboration and mentoring",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7">
                    <span className="text-gold">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
