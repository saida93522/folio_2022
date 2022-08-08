import { Container, Grid, Col, Text, Link } from "@nextui-org/react";
import Header from "../Header/Header";
import { CgArrowTopRight } from "@react-icons/all-files/cg/CgArrowTopRight";
import React from "react";

const Contact = () => {
  const title = "contact";
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
              className="fs-lg break-word flex flex-wrap"
              href="mailto:saidahussen4@gmail.com"
              css={{ color: "$titleColor", fontSize: "$fs_md" }}
            >
              saidahussen4@gmail.com
              <CgArrowTopRight />
            </Link>
          </Col>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default React.memo(Contact);
