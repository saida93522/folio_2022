import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { Switch } from "@nextui-org/react";

const ToggleTheme = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  return (
    <Switch
      className="md:space-x-14 switch "
      checked={isDark}
      size="xs"
      color={"dark"}
      onChange={toggleTheme}
      iconOff={<SunIcon filled />}
      iconOn={<MoonIcon filled />}
      shadow={false}
    ></Switch>
  );
};

export default ToggleTheme;
