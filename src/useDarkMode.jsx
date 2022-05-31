import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    if (theme === "Light") {
      window.localStorage.setItem("theme", "Dark");
      setTheme("Dark");
    } else {
      window.localStorage.setItem("theme", "Light");
      setTheme("Light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
