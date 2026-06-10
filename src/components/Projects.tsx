import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-gold/90">
            Projects
          </p>
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Featured work with refined polish
          </h2>
          <p className="max-w-2xl text-white/70">
            A collection of project highlights that reflect modern UI, motion,
            and performance-driven engineering.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-black/70 shadow-glow"
            >
              <div className="relative h-72 overflow-hidden rounded-t-[32px] bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              </div>
              <div className="space-y-5 p-8">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-gold/90">
                  <span>{project.tech[0]}</span>
                  <span>{project.tech.length} tools</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/70">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition duration-300 hover:bg-gold/15"
                  >
                    Live Demo <FiExternalLink />
                  </a>
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:border-gold hover:text-gold"
                  >
                    GitHub <FiGithub />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
