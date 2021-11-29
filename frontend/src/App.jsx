import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "styles/theme";
import { GlobalContext, GlobalProvider } from "context";
import RoutesList from "RoutesList";

import "bootstrap/dist/css/bootstrap.min.css";
import "styles/global.css";
import GlobalStyles from "styles/globalStyle";

function App() {
  const { theme } = useContext(GlobalContext);
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <RoutesList />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
