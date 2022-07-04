import { Container, Grid, Col, Row, Text } from "@nextui-org/react";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";

import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiDjango } from "@react-icons/all-files/si/SiDjango";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiFigma } from "@react-icons/all-files/si/SiFigma";

const Skills = () => {
  const title = "skills";
  const softSkills = [
    "Adaptable",
    "TeamWork",
    "Accountability",
    "Curious",
    "Creative",
    "Problem Solver",
    "Empathy",
    "Resilient",
  ];

  return (
    <section className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none">
      <Container className="space-y-2 md:space-y-4">
        <Grid.Container wrap="wrap" gap={2} justify="flex-start">
          <Header title={title} />
          <Grid xs={12} md={6} className="soft-skills">
            <Col span={9}>
              <Row wrap={"wrap"} justify={"flex-start"}>
                <SubHeader subTitle={"Soft skills"} />
              </Row>
              <div className="flex flex-wrap items-start">
                {softSkills.map((skill, key) => (
                  <Text key={key} css={{ fontSize: "$fs_sm" }}>
                    ・{skill}
                  </Text>
                ))}
              </div>
            </Col>
          </Grid>

          <Grid xs={12} md={5} className="tool-skills">
            <Col>
              <Row wrap={"wrap"} justify={"flex-start"}>
                <SubHeader subTitle={"Software and tools"} />
              </Row>
              <div className="flex flex-wrap items-start icon-container h-full">
                <span className="hover:text-zinc-100 hover:bg-orange-600">
                  <SiHtml5 className="icon" />
                </span>

                <span className="hover:text-zinc-100 hover:bg-sky-600">
                  <SiCss3 className="icon " />
                </span>
                <span className="hover:bg-yellow-300 hover:text-black">
                  <DiJavascript1 className="icon " />
                </span>
                <span className="hover:bg-stone-900 hover:text-cyan-400">
                  <SiReact className="icon " />
                </span>
                <span className="hover:text-yellow-300 hover:bg-sky-800">
                  <SiPython className="icon" />
                </span>
                <span className="hover:text-zinc-100 hover:bg-green-800">
                  <SiDjango className="icon" />
                </span>
                <span className="hover:text-zinc-100 hover:bg-violet-800">
                  <SiBootstrap className="icon " />
                </span>
                <span className="hover:text-sky-500 hover:bg-zinc-100">
                  <SiTailwindcss className="icon " />
                </span>
                <span className="hover:text-fuchsia-500 hover:bg-stone-800">
                  <SiFigma className="icon" />
                </span>
              </div>
            </Col>
          </Grid>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default Skills;
