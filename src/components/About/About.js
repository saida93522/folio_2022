import { Container, Grid, Text } from "@nextui-org/react";
import Header from "../Header/Header";

const About = () => {
  const title = "about";
  return (
    <section className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none relative">
      <div className="hidden sm:block hero-wrapper bg-right lg:bg-center"></div>

      <Container className="space-y-2 md:space-y-4">
        <Grid.Container wrap="wrap" gap={2} className="overflow-scroll">
          <Header title={title} />
          <Grid>
            <Text
              className="fs_sm pb-2 w-5/6 md:w-3/5"
              css={{ fontSize: "$fs_sm" }}
            >
              Hello my name is Saida Hussen, and I'm an ambitious developer with
              proven experience developing and designing software in a
              test-driven environment.
            </Text>
          </Grid>
          <Grid>
            <Text className="fs_sm w-5/6 md:w-3/5" css={{ fontSize: "$fs_sm" }}>
              I am passionate about building stunning websites and putting
              creative ideas into action. My goal is to create beautiful things
              that will have a positive influence on the world.
            </Text>
          </Grid>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default About;
