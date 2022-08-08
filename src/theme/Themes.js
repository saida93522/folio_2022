import { createTheme } from "@nextui-org/react";

const fonts = {
  myFonts:
    "'serif','Helvetica Neue','Helvetica Neue', 'Helvetica Neue', Helvetica, Arial, serif",
};

const fontSizes = {
  fs_hero: "clamp(2.95rem, calc(4.82rem + -1.94vw), 4.48rem)",
  fs_subHero: "clamp(1.23rem, calc(0.55rem + 3.38vw), 3.51rem)",
  title: "clamp(0.79rem, calc(-0.23rem + 7.63vw), 3.82rem)",
  subtitle: "clamp(0.57rem, calc(0.16rem + 2.05vw), 1.95rem)",
  fs_md: "clamp(0.53rem, calc(0.23rem + 1.52vw), 1.56rem)",
  fs_sm: "clamp(0.5rem, calc(0.28rem + 1.11vw), 1.25rem)",
  fs_xs: "clamp(0.41rem, calc(0.34rem + 0.34vw), 0.64rem)",
};

export const darkTheme = createTheme({
  type: "dark",

  theme: {
    stroke: {
      strokeColor: "#A78682",
    },
    colors: {
      // brand colors
      primary: "#A78682",
      background: "#131515",
      text: "#FAF9F6",
      titleColor: "#A78682",
      lineColor: "#FAF9F6",
      navColor: "#ECEDEE",
      heroTitle: " #525252",
      heroSvg: "#A78682",
    },
    space: {},
    fonts,
    fontSizes,
  },
});

export const lightTheme = createTheme({
  type: "light",
  theme: {
    stroke: {
      strokeColor: "#000",
    },
    colors: {
      background: "#EFEBE0",
      text: "#000",
      titleColor: "#131515",
      primary: "#131515",
      lineColor: "#000001",
      navColor: "#000",
    },

    space: {},
    fonts,
    fontSizes,
  },
});
