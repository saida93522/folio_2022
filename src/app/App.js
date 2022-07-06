import { Suspense, lazy } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "../theme/Themes";
import useDarkMode from "../hooks/HandleTheme";
import Preload from "../page/Preload";

import "../styles/App.css";

const Home = lazy(() => import("../page/Home"));

function App() {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Suspense fallback={<Preload />}>
      <NextUIProvider theme={themeMode}>
        <Home homeTheme={themeMode} toggleTheme={toggleTheme} />
      </NextUIProvider>
    </Suspense>
  );
}

export default App;
