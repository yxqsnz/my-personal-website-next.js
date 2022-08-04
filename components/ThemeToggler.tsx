import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className="focus:outline-none"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  );
}
