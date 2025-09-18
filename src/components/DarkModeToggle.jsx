// src/components/DarkModeToggle.jsx
import React, { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false); // start LIGHT

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(d => !d)}>
      {isDark ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}
