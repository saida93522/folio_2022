import { Container, Grid, Text, Col, Spacer } from "@nextui-org/react";
import Header from "../Header/Header";
import React from "react";

const About = () => {
  const title = "about";
  return (
    <section
      id="about"
      className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none relative"
    >
      <div className="hidden sm:block hero-wrapper bg-right lg:bg-center w-full"></div>

      <Container id="about" className="space-y-2 md:space-y-4">
        <Header title={title} />
        <Grid.Container wrap="wrap" gap={2} justify={"center"}>
          <Col span={10} className="bg-stone-50s0">
            <Text className="fs_sm w-5/6 md:w-3/5" css={{ fontSize: "$fs_sm" }}>
              Hello my name is Saida Hussen, and I'm an ambitious developer with
              proven experience developing and designing software in a
              test-driven environment.
            </Text>
            <Spacer y={1} />
          </Col>
          <Col span={10}>
            <Text className="fs_sm w-5/6 md:w-3/5" css={{ fontSize: "$fs_sm" }}>
              I specialize in web-based applications with an emphasis on
              usability and simplicity. I am passionate about building stunning
              websites and putting creative ideas into action. My goal is to
              create amazing things that will have a positive influence on the
              world.
            </Text>
          </Col>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default React.memo(About);
