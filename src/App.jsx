import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Programs } from "./components/Programs";
import { Reviews } from "./components/Reviews";
import { Team } from "./components/Team";
function App() {
  return (
    <div className="site-shell">
      <div className="sticky top-0 z-30 h-16">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Programs />
      <Reviews />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
