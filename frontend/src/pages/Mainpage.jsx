import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import CareerHighlights from "../components/CareerHighlights";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import LeadershipEvents from "../components/LeadershipEvents";
import Publications from "../components/Publications";
import Education from "../components/Education";
import SkillsLanguages from "../components/SkillsLanguages";
import CommunityService from "../components/CommunityService";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />
      <About />
      <CareerHighlights />
      <Experience />
      <Achievements />
      <LeadershipEvents />
      <Publications />
      <Education />
      <SkillsLanguages />
      <CommunityService />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default MainPage;
