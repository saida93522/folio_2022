import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      background: "#050505",
      text: "#FAF9F6",
      color: "light",
      // you can also create your own color
      titleColor: "#9E949C",
      lineColor: "#FAF9F6",
      navColor: "#ECEDEE",
      toggleColor: "#8bb8",

      // ...  more colors
    },
    space: {},
    fonts: {
      myFonts:
        "'HelveticaNeue-Light',' Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, Lucida Grande, sans-serif",
    },
    fontSizes: {
      stepMinus3: "clamp(0.41rem, calc(0.34rem + 0.34vw), 0.64rem)",
      stepMinus2: "clamp(0.44rem, calc(0.33rem + 0.53vw), 0.8rem)",
      stepMinus1: "clamp(0.47rem, calc(0.31rem + 0.79vw), 1rem)",
      step0: "clamp(0.5rem, calc(0.28rem + 1.11vw), 1.25rem)",
      step1: "clamp(0.53rem, calc(0.23rem + 1.52vw), 1.56rem)",
      step2: "clamp(0.57rem, calc(0.16rem + 2.05vw), 1.95rem)",
      step3: "clamp(0.61rem, calc(0.06rem + 2.72vw), 2.44rem)",
      step4: "clamp(0.65rem, calc(-0.06rem + 3.56vw), 3.05rem)",
      step5: "clamp(0.79rem, calc(-0.23rem + 7.63vw), 3.82rem)",
    },
  },
});

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      background: "#EdEDdddE",
      text: "#000",
      color: "dark",
      // you can also create your own color
      lineColor: "#000001",
      navColor: "#000",

      // ...  more colors
    },
    space: {},
    fonts: {
      myFonts:
        "'HelveticaNeue-Light',' Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, Lucida Grande, sans-serif",
    },
    fontSizes: {
      stepMinus3: "clamp(0.41rem, calc(0.34rem + 0.34vw), 0.64rem)",
      stepMinus2: "clamp(0.44rem, calc(0.33rem + 0.53vw), 0.8rem)",
      stepMinus1: "clamp(0.47rem, calc(0.31rem + 0.79vw), 1rem)",
      step0: "clamp(0.5rem, calc(0.28rem + 1.11vw), 1.25rem)",
      step1: "clamp(0.53rem, calc(0.23rem + 1.52vw), 1.56rem)",
      step2: "clamp(0.57rem, calc(0.16rem + 2.05vw), 1.95rem)",
      step3: "clamp(0.61rem, calc(0.06rem + 2.72vw), 2.44rem)",
      step4: "clamp(0.65rem, calc(-0.06rem + 3.56vw), 3.05rem)",
      step5: "clamp(0.79rem, calc(-0.23rem + 7.63vw), 3.82rem)",
    },
  },
});
