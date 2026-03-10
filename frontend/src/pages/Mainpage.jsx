import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import CareerHighlights from "../components/CareerHighlights";

function MainPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <CareerHighlights />
    </div>
  );
}

export default MainPage;
