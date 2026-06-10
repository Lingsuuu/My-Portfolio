import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiInstagram } from "react-icons/fi";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[380px_1fr] md:px-10">
        <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-gold/90">
              Contact
            </p>
            <h2 className="text-4xl font-black text-white">
              Let's build something exceptional.
            </h2>
            <p className="text-white/70">
              Reach out for collaborations, freelance projects, or just to say
              hello. I’m always open to new opportunities.
            </p>
          </div>

          <div className="space-y-4 text-white/80">
            <div className="flex items-start gap-4">
              <FiMail className="mt-1 text-gold" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>arjaylead@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiPhone className="mt-1 text-gold" />
              <div>
                <p className="font-semibold text-white">Whatsapp</p>
                <p>+639634270259</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiInstagram className="mt-1 text-gold" />
              <div>
                <p className="font-semibold text-white">Instagram</p>
                <p>@king_dyey</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiMapPin className="mt-1 text-gold" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p>Philippines</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-glow backdrop-blur-xl">
          <form
            className="space-y-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-white/80">
                <span className="text-sm font-semibold text-white">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
              <label className="space-y-2 text-white/80">
                <span className="text-sm font-semibold text-white">Email</span>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
              </label>
            </div>
            <label className="space-y-2 text-white/80">
              <span className="text-sm font-semibold text-white">Subject</span>
              <input
                type="text"
                placeholder="Project idea"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
            <label className="space-y-2 text-white/80">
              <span className="text-sm font-semibold text-white">Message</span>
              <textarea
                rows={6}
                placeholder="Tell me more about your project"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#d9a45b] via-[#f1d4a5] to-[#d4a15a] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:shadow-[0_0_30px_rgba(212,161,90,0.35)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
