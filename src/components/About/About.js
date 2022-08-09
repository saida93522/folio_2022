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
      <Container id="about" className="space-y-2 md:space-y-4">
        <Header title={title} />
        <Grid.Container wrap="wrap" gap={2} justify={"center"}>
          <Col span={10}>
            <Text className="fs_sm w-5/6 md:w-3/5" css={{ fontSize: "$fs_sm" }}>
              Hello! I'm Saida. I am an aspiring software developer based in
              Minneapolis, Minnesota. I specialize in web-based applications
              with an emphasis on usability and simplicity.
            </Text>
            <Spacer y={1} />
          </Col>
          <Col span={10}>
            <Text className="fs_sm w-5/6 md:w-3/5" css={{ fontSize: "$fs_sm" }}>
              I am passionate about building stunning websites and putting
              creative ideas into action. My mission is to create amazing things
              that have a positive impact on the world, which is why I am
              excited to be able to contribute significantly to a fast-growing
              company.
            </Text>
          </Col>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default React.memo(About);
