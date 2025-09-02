import React from "react";

export const themes = {
  light: { foreground: "#333333", background: "#BAE2FF" },
  dark:  { foreground: "#ffffff", background: "#222222" },
};

export const MyThemeContext = React.createContext({
  theme: themes.light,
  setTheme: () => {},
  darkMode: false,
});

export default function MyThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(themes.light);
  const darkMode = theme.background === themes.dark.background;

  const value = React.useMemo(() => ({ theme, setTheme, darkMode }), [theme, darkMode]);

  return (
    <MyThemeContext.Provider value={value}>
      {children}
    </MyThemeContext.Provider>
  );
}