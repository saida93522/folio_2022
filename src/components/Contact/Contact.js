import { Container, Grid, Col, Text, Link } from "@nextui-org/react";
import Header from "../Header/Header";
import { CgArrowTopRight } from "@react-icons/all-files/cg/CgArrowTopRight";
import React from "react";

const Contact = () => {
  const title = "get In Touch";
  return (
    <section
      id="contact"
      className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none"
    >
      <Container className="space-y-2 md:space-y-4">
        <Header title={title} />
        <Grid.Container wrap="wrap" gap={2} justify="center">
          <Col span={10}>
            <Text className="fs_sm w-5/6 md:w-3/5" css={{ fontSize: "$fs_sm" }}>
              Please feel free to reach out if you are interested in working
              together or if you simply want to say hello. My inbox is always
              open.
            </Text>
          </Col>

          <Col span={10}>
            <Link
              className="mt-10 btn break-word flex flex-wrap relative inline-block px-8 py-3 overflow-hidden border border-taupe group focus:outline-none focus:ring "
              href="mailto:saidahussen4@gmail.com"
              css={{ color: "$titleColor", fontSize: "$fs_md" }}
            >
              <span className="absolute inset-y-0 right-0 w-[2px] transition-all bg-dark_taupe group-hover:w-full group-active:bg-dark_taupe"></span>
              <span className="relative text-sm font-medium transition-colors group-hover:text-white">
                Say Hello
              </span>
              <CgArrowTopRight className="relative transition-colors group-hover:text-white" />
            </Link>
          </Col>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default React.memo(Contact);
