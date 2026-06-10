import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gold/90">
            Skills
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Technology expertise that delivers premium outcomes
          </h2>
          <p className="max-w-2xl text-white/70">
            Clean component-based architecture, optimized performance, and
            polished interfaces for modern digital products.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              whileHover={{ scale: 1.02 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-gold"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
                {skill.title}
              </h3>
              <ul className="space-y-4 text-white/80">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm leading-7"
                  >
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
