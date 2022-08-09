import "./nav.css";
import { Container, Link, Row } from "@nextui-org/react";
import NavbarTop from "./NavbarTop";
import NavbarLeft from "./NavbarLeft";
import Toggle from "../../theme/ToggleTheme";

import { ReactComponent as Logo } from "../../assets/logo.svg";
const Nav = (props) => {
  return (
    <>
      <div className="nav-border nav ">
        <div className="nav-border-top">
          <div className="nav-border-t-t scale-x-100 bg-white"></div>
          <div className="nav-border-t-b scale-x-100 bg-white"></div>
          <div className="nav-border-t-l scale-y-100 bg-white"></div>
        </div>
        <div className="nav-border-left">
          <div className="nav-border-l-l scale-y-100 bg-white"></div>
          <div className="nav-border-l-r scale-y-100 bg-white"></div>
          <div className="nav-border-l-b scale-x-100 bg-white"></div>
        </div>
      </div>

      <Container className="w-full z-20 fixed ">
        <Row
          justify="flex-start"
          wrap="wrap"
          className="nav mix-blend-mode-exclusion overflow-hidden "
        >
          <Link
            href="/"
            className="fixed nav-logo"
            css={{ color: "$svgColor" }}
          >
            <Logo />
          </Link>

          <NavbarTop />
          <Link
            className="transition-all pointer-events-auto relative top-6"
            css={{ color: "$titleColor" }}
          >
            <Toggle
              homeTheme={props.homeTheme}
              toggleTheme={props.toggleTheme}
              width="$fs_sm"
            />
          </Link>
        </Row>
        <NavbarLeft />
      </Container>
    </>
  );
};

export default Nav;
