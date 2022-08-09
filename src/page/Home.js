import Nav from "../components/Navbar/Nav";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { Container } from "@nextui-org/react";

const Home = ({ homeTheme, toggleTheme }) => {
  return (
    <div className="main-app min-w-full min-h-screen top-0 left-0 relative">
      <Nav homeTheme={homeTheme} toggleTheme={toggleTheme} />

      <main className="main relative overflow-x-hidden w-screen ">
        <div className="animate fixed -inset-1/2"></div>
        <Container className="absolute xs:pl-5 sm:pl-14 md:pl-24 lg:pl-28 left-14 md:left-14">
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default Home;
