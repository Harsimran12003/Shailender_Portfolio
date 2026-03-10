import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import CareerHighlights from "../components/CareerHighlights";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";

function MainPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <CareerHighlights />
      <Experience />
      <Achievements />
    </div>
  );
}

export default MainPage;
