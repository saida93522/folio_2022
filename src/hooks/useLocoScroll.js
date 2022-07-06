import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    const scrollEl = document.querySelector("#main");

    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.05,
      multiplier: 2,
      class: "is-reveal",
      smartPhone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });
  }, [start]);
}
