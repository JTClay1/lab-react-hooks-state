import React, { useState, useEffect } from 'react';

// button flips dark/light mode by setting a data-theme attribute
const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  // click handler flips the boolean
  function handleToggle() {
    setIsDark(prev => !prev);
  }

  // whenever isDark changes, update <html data-theme="...">
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button onClick={handleToggle} aria-pressed={isDark}>
      {/* button text flips depending on mode */}
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
