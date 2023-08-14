import { useEffect, useState } from 'react';

type ThemeType = 'light' | 'dark';

type IUseDarkmodeReturnState = [ThemeType, () => void];

function useDarkmode(defaultTheme: string = 'light'): IUseDarkmodeReturnState {
  const [theme, setTheme] = useState<ThemeType>(
    (localStorage.getItem('theme') as ThemeType) ?? defaultTheme
  );

  useEffect(() => {
    setTheme((localStorage.getItem('theme') as ThemeType) ?? defaultTheme);
  }, []);

  function toggleTheme() {
    const themeToChange = theme === 'light' ? 'dark' : 'light';
    setTheme(themeToChange);
    localStorage.setItem('theme', themeToChange);
  }

  useEffect(() => {
    const HTMLDoc = document.documentElement;

    if (theme === 'dark' && !HTMLDoc.classList.contains('dark')) {
      HTMLDoc.classList.add('dark');
    } else if (theme === 'light') HTMLDoc.classList.remove('dark');
  }, [theme]);

  return [theme, toggleTheme];
}

export default useDarkmode;
