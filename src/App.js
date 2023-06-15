import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <AboutMe />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
