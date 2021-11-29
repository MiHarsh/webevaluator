import React, { useState } from "react";
import PropTypes from "prop-types";
import { setLocalStorage, getLocalStorage } from "shared/storageHelper";

const initialState = {
  theme: getLocalStorage("theme") || "light",
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setTheme = (theme) => {
    setState(theme);
    setLocalStorage("theme", theme);
    window.location.reload();
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = { children: PropTypes.node.isRequired };
