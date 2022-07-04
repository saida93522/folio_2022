import { Container, Row, Text } from "@nextui-org/react";
import { IoIosArrowRoundDown } from "@react-icons/all-files/io/IoIosArrowRoundDown";

const Hero = () => {
  return (
    <section className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none">
      <Container fluid className="space-y-2 md:space-y-4">
        <Row>
          <Text
            i
            h1
            className="hero-font"
            css={{ fontSize: "$fs_hero", color: "$titleCoslor" }}
          >
            Saida Hussen
          </Text>
        </Row>

        <Row className="" justify="center">
          <Text
            i
            h1
            className="hero-font"
            css={{ fontSize: "$fs_hero", color: "$titleColor" }}
          >
            Portfolio 2022
          </Text>

          <svg
            viewBox="0 100 900 300"
            className="circles bg-stone-6000 "
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
            <text dy="100" textLength="1220" className="text-fs hero-font">
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
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
