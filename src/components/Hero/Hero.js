import React from "react";
import { useTheme, Container, Text, Grid } from "@nextui-org/react";
import AnimateHero from "./AnimateHero";
import { ReactComponent as Framer } from "../../assets/vector1.svg";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className="content min-h-screen flex items-center xs:pl-3 pr-4 overflow-none">
      <Container className="space-y-s2 md:space-y-s4 bg-stone-7000">
        <Grid.Container gap={2} justify={"space-around"} className="">
          <Grid className="h-full flex flex-col justify-center ">
            <AnimateHero>
              <Framer
                className="hidden sm:block"
                width="40%"
                height="100%"
                style={{ color: theme.colors.primary.value }}
              />

              <Text
                i
                className="hero-font block"
                css={{ fontSize: "$fs_subHero", color: "$titleColor" }}
              >
                Saida Hussen
              </Text>

              <Text
                i
                className="hero-font"
                css={{ fontSize: "$fs_subHero", color: "$titleColor" }}
              >
                Portfolio 2022
              </Text>
            </AnimateHero>
          </Grid>
          <Grid>
            <svg
              className="relative svg-hero md:-bottom-14 right-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 0 500 480"
            >
              <defs>
                <path
                  d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                  id="textcircle"
                >
                  <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="16s"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    repeatCount="indefinite"
                  />
                </path>
              </defs>
              <text dy="70" textLength="1220">
                <textPath href="#textcircle">
                  • Scroll To Learn More • Scroll To Learn More
                </textPath>
              </text>
            </svg>
          </Grid>
        </Grid.Container>
      </Container>
    </section>
  );
};

export default React.memo(Hero);
