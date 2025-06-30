import { useEffect, useState } from 'react';

export function useTheme() {
  const [theme, setThemeState] = useState(() => localStorage.theme || null);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const isDark = theme === 'dark' || (!theme && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, [theme]);

  function setTheme(newTheme: 'light' | 'dark' | null) {
    if (newTheme === 'dark' || newTheme === 'light') {
      localStorage.theme = newTheme;
    } else {
      localStorage.removeItem('theme');
    }
    setThemeState(newTheme);
  }

  return { theme, setTheme };
}
