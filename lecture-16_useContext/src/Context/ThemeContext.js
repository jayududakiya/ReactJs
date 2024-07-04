import React from "react";
// Create Context 

const ThemeContext = React.createContext({
  themeMode: "light",
  lightTheme: () => {
      themeModes.themeMode = 'light'
  },
  darkTheme: () => {
      themeModes.themeMode  = "dark"
  },
});

// export context 

export const ThemeContextProvider = ThemeContext.Provider;

// Export And create use Context with Custom hook 

export function useTheme () {
  return React.useContext(ThemeContext)
}

export default ThemeContext;
