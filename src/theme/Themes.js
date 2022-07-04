import { createTheme } from "@nextui-org/react";

const fonts = {
  myFonts:
    "'serif','Helvetica Neue','Helvetica Neue', 'Helvetica Neue', Helvetica, Arial, serif",
};

const fontSizes = {
  fs_hero: "clamp(2.55rem, calc(0.77rem + 8.91vw), 8.57rem)",
  fs_subHero: "clamp(1.23rem, calc(0.55rem + 3.38vw), 3.51rem)",
  title: "clamp(0.79rem, calc(-0.23rem + 7.63vw), 3.82rem)",
  subtitle: "clamp(0.57rem, calc(0.16rem + 2.05vw), 1.95rem)",
  fs_sm: "clamp(0.5rem, calc(0.28rem + 1.11vw), 1.25rem)",
  fs_xs: "clamp(0.41rem, calc(0.34rem + 0.34vw), 0.64rem)",
};

export const darkTheme = createTheme({
  type: "dark",

  theme: {
    colors: {
      // brand colors
      background: "#131515",
      text: "#FAF9F6",
      titleColor: "#A78682",
      lineColor: "#FAF9F6",
      navColor: "#ECEDEE",
      heroTitle: " #525252",
    },
    space: {},
    fonts,
    fontSizes,
  },
});

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      // background: "#E0DECA",
      // background: "#FEE715FF",
      // background: "#839788",
      // background: "#EdEDdddE",
      background: "#EFEBE0",
      text: "#000",
      titleColor: "#A78682",

      // titleColor: "#B85042",
      lineColor: "#000001",
      navColor: "#000",
    },

    space: {},
    fonts,
    fontSizes,
  },
});
