import { Container, Grid, Col, Row, Text, Spacer } from "@nextui-org/react";
import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader";
import React from "react";
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
    "Adaptability",
    "Curious",
    "Communication",
    "Creative",
    "Teamwork",
    "Problem-Solver",
    "Accountability",
    "Empathy",
  ];

  return (
    <section
      id="skills"
      className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none"
    >
      <Container className="space-y-2 md:space-y-4">
        <Header title={title} />
        <Grid.Container wrap="wrap" gap={2} justify="center">
          <Col span={10}>
            <Row wrap={"wrap"} justify={"flex-start"}>
              <SubHeader subTitle={"Soft skills"} />
            </Row>
            <div className="flex flex-wrap items-start soft-skills">
              {softSkills.map((skill, key) => (
                <Text className="w-1/2" key={key} css={{ fontSize: "$fs_sm" }}>
                  ・{skill}
                </Text>
              ))}
            </div>
            <Spacer y={1} />
          </Col>

          <Col span={10}>
            <Row wrap={"wrap"} justify={"flex-start"}>
              <SubHeader subTitle={"Software and tools"} />
            </Row>
            <div className="flex flex-wrap items-start icon-container h-full tool-skills">
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
        </Grid.Container>
      </Container>
    </section>
  );
};

export default React.memo(Skills);
