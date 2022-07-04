import { Grid, Container } from "@nextui-org/react";
import { Projects } from "./Projects";

import Header from "../Header/Header";

const Work = () => {
  const title = "work";

  const myProjects = [
    {
      title: "TinyWanderlust",
      text: "A simple travel blog app using Django framework. AWS-S3 for storing static assets.",
      live: "https://tinywanderlust-blog-saida.herokuapp.com/",
    },
    {
      title: "Live Music Notes",
      text: "A music note app that allows users to browse shows sorted by artist or venue. Built with Django framework.",
      live: "https://github.com/saida93522/notes_app",
    },
    {
      title: "Weather Tune",
      text: "An application that generates a Spotify playlist for you, based on the weather in your current location.",
      live: "https://github.com/saida93522/weather-tune.git",
    },
  ];

  return (
    <section className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none">
      <Container className="space-y-2 md:space-y-4">
        <Grid.Container gap={2} className="overflow-scroll">
          <Header title={title} />

          {myProjects.map((item, index) => (
            <Grid sm={6} key={index}>
              <Projects item={item} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Work;
