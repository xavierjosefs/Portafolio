import NavBar from './components/organism/NavBar';
import Hero from './components/organism/Hero';
import Slogan from './components/organism/Slogan';
import AboutMe from './components/organism/AboutMe';
import SkillsMarquee from './components/organism/SkillsMarquee';
import Projects from './components/organism/Projects';

export default function App() {
  return (
      <>
        <NavBar />
        <Hero />
        <Slogan />
        <AboutMe />
        <SkillsMarquee />
        <Projects />
      </>
      
  );
}

