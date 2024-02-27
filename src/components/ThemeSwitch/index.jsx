import { ThemeModeContext } from "../ThemeModeContext";
import { useContext } from "react";

const ThemeSwitch = () => {
    const { themeMode, toggleThemeMode } = useContext(ThemeModeContext);

    const toggleTheme = () => {
        toggleThemeMode();
    };

    return (
        <button onClick={toggleTheme}>
            {themeMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
    );
};

export default ThemeSwitch;
