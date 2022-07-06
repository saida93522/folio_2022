import { Container, Grid, Col, Text, Link } from "@nextui-org/react";
import Header from "../Header/Header";
import { CgArrowTopRight } from "@react-icons/all-files/cg/CgArrowTopRight";
import React from "react";

const Contact = () => {
  const title = "contact";
  return (
    <>
      {/* <div class="marquee">
        <div class="track">
          <div class="conent text-4xl fs_sm" css={{ fontSize: "$fs_lg" }}>
            &nbsp;Infinite Marquee with long sentence Infinite Marquee with long
            sentence Infinite Marquee with long sentence.
          </div>
        </div>
      </div> */}
      <section className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none">
        <Container className="space-y-2 md:space-y-4">
          <Grid.Container wrap="wrap" gap={2} justify="flex-start">
            <Header title={title} />
            <Grid sm={10}>
              <Col span={10}>
                <Text
                  className="fs_sm w-5/6 md:w-3/5"
                  css={{ fontSize: "$fs_sm" }}
                >
                  Please feel free to reach out if you are interested in working
                  together or if you simply want to say hello. My inbox is
                  always open.
                </Text>
              </Col>
            </Grid>
            <Grid>
              <Col span={12}>
                <Link
                  className="fs-lg break-word flex flex-wrap"
                  href="mailto:saidahussen4@gmail.com"
                  css={{ color: "$titleColor", fontSize: "$fs_md" }}
                >
                  saidahussen4@gmail.com
                  <CgArrowTopRight />
                </Link>
              </Col>
            </Grid>
          </Grid.Container>
        </Container>
      </section>
    </>
  );
};

export default React.memo(Contact);
