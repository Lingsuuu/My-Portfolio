import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="min-h-screen bg-soft-black text-white">
      <Navbar />
      <main className="relative z-10 overflow-hidden rounded-[36px] shadow-[0_0_80px_rgba(212,161,90,0.14)]">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
