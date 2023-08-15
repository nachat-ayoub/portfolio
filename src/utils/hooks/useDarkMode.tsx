import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

type ThemeType = 'light' | 'dark';

const themeAtom = atom<ThemeType>('light');

function useDarkmode(defaultTheme: string = 'light'): [ThemeType, () => void] {
  const [theme, setTheme] = useAtom(themeAtom);

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
