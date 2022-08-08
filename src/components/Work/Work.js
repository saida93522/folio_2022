import { Grid, Container, Col } from "@nextui-org/react";
import { Projects } from "./Projects";
import React from "react";
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
    <section
      id="work"
      className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none"
    >
      <Container id="work" className="space-y-2 md:space-y-4">
        <Header title={title} />
        <Grid.Container gap={2} className="overflow-scroll" justify={"center"}>
          {myProjects.map((item, index) => (
            <Col span={10} key={index}>
              <Projects item={item} />
            </Col>
          ))}
        </Grid.Container>
      </Container>
    </section>
  );
};

export default React.memo(Work);
