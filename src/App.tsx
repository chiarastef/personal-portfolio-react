import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      localStorage.setItem("currentTheme", !prevState ? "dark" : "light");
      return !prevState;
    });
  };

  const checkIfDarkMode = () => {
    const currentTheme = localStorage.getItem("currentTheme");
    if (currentTheme === null) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(isDark ? true : false);
      localStorage.setItem("currentTheme", isDark ? "dark" : "light");
    } else {
      setIsDarkMode(currentTheme === "dark");
    }
  };

  React.useEffect(() => {
    checkIfDarkMode();
  }, []);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
