import Nav from "../components/Navbar/Nav";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Contact from "../components/Contact/Contact";
import { Container } from "@nextui-org/react";

const Home = ({ homeTheme, toggleTheme }) => {
  return (
    <div className="main-app min-w-full min-h-screen top-0 left-0 relative">
      <div className="animate fixed -inset-1/2"></div>
      {/* <div className="gif_bg absolute inset-0 isolate ">
        <div className="w-full h-full absolute bg-neutral-800	opacity-90"></div>
      </div> */}

      <Nav homeTheme={homeTheme} toggleTheme={toggleTheme} />
      <main className="main relative overflow-x-hidden w-screen ">
        <Container className="absolute bg-neutral-7000	xs:pl-5 sm:pl-14 md:pl-24 lg:pl-28 left-14 md:left-14">
          <Hero />
          <About />
          <Skills />
          <Work />
          <Contact />
        </Container>
      </main>
    </div>
  );
};

export default Home;
