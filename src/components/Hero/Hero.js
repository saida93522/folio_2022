import { Container, Row, Col, Text } from "@nextui-org/react";
import { IoIosArrowRoundDown } from "@react-icons/all-files/io/IoIosArrowRoundDown";
import React from "react";

const Hero = () => {
  return (
    <section
      data-scroll-section
      className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none"
    >
      <Container
        data-scroll
        data-scroll-speed="3"
        className="space-y-2 md:space-y-4"
      >
        <Row className="bg-green-2000">
          <Text
            i
            className="hero-font"
            css={{ fontSize: "$fs_subHero", color: "$titleColor" }}
          >
            Saida Hussen
          </Text>
        </Row>

        <Row className="bg-green-00" justify="center">
          <Col span={"5"}>
            <Text
              i
              className="hero-font"
              css={{ fontSize: "$fs_subHero", color: "$titleColor" }}
            >
              Portfolio 2022
            </Text>
          </Col>

          <Col>
            <svg
              viewBox="0 100 900 300"
              className="circles bg-stone-60s0 text-fs hero-font"
              width="100%"
              height="100%"
            >
              <defs>
                <path
                  d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                  id="textcircle"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="6s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite"
                  />
                </path>
              </defs>
              <text dy="100" textLength="1220">
                <textPath
                  stroke="currentColor"
                  fill="currentColor"
                  href="#textcircle"
                >
                  • Available For Hire
                </textPath>
                <IoIosArrowRoundDown className="bg-gray-100 w-full h-full" />
              </text>
            </svg>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
