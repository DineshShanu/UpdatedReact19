import { createContext, useState, use } from "react";

export const ThemContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handelToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemContext.Provider value={{ theme, handelToggleTheme }}>
      {children}
    </ThemContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handelToggleTheme } = use(ThemContext);

  return (
    <div
      className={`p-4 vh-100 text-center ${
        theme === "dark" ? "bg-dark" : "bg-white"
      }`}
    >
      <h1
        className={`my-4 text-xl ${
          theme === "light" ? "text-dark" : "text-white"
        }`}
      >
        Dark Light Mode Website.
      </h1>
      <p
        className={`my-4 text-l ${
          theme === "light" ? "text-dark" : "text-white"
        }`}
      >
        Hello!! My React v19 👍
      </p>
      <button onClick={handelToggleTheme} className="btn btn-primary">
        {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};
