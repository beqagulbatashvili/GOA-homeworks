import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(function (prevTheme) {
      return prevTheme === "light" ? "dark" : "light";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ padding: "10px" }}>
      <h1>Current Theme: {theme}</h1>
    </header>
  );
}

function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
      }}
    >
      <p>This content changes with the theme</p>
      <ThemeButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}
