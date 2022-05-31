import "./app.css";
import useDarkMode from "./useDarkMode";
const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <div
      className="app"
      style={{
        background: theme === "Dark" ? "#212121" : "#fff",
        transition: ".2s all",
      }}
    >
      <button type="button" onClick={toggleTheme} className="switch">
        Switch Theme
      </button>
    </div>
  );
};

export default App;
