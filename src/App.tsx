import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import BeatLoader from "react-spinners/BeatLoader";
import { strings } from "./loc/strings";

function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const [language, setLanguage] = React.useState<string>("");

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => {
      localStorage.setItem("currentTheme", !prevState ? "dark" : "light");
      return !prevState;
    });
  };

  const changeLanguage = (langCode: string) => {
    setLanguage(langCode);
    strings.setLanguage(langCode);
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

  const getCurrentLanguage = () => {
    const lang = strings.getLanguage();
    setLanguage(lang !== null ? lang : "en");
  };

  React.useEffect(() => {
    setIsLoading(true);
    checkIfDarkMode();
    getCurrentLanguage();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="bg-neutral-50 h-dvh flex items-center justify-center">
          <BeatLoader color="#9feead" loading={isLoading} size={20} />
        </div>
      ) : (
        <div className={`${isDarkMode ? "dark" : ""}`}>
          <Navbar
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            language={language}
            changeLanguage={changeLanguage}
          />
          <Hero />
          <About />
          <Projects language={language} />
          <Footer language={language} />
        </div>
      )}
    </>
  );
}

export default App;
