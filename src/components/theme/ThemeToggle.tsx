import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "./useThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex h-12 w-12 items-center justify-center
        rounded-xl border border-border
        bg-card
        transition-all duration-300
        hover:scale-105
        hover:border-cyan-400/40
        cursor-pointer
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
