import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { Switch } from "@nextui-org/react";

const ToggleTheme = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <Switch
      className="md:space-x-14 switch w-full h-full"
      checked={isLight}
      size="xs"
      color={"white"}
      onChange={toggleTheme}
      iconOff={<MoonIcon filled />}
      iconOn={<SunIcon filled />}
      shadow={false}
    ></Switch>
  );
};

export default ToggleTheme;
