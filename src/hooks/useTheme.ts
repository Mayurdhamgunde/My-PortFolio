// import { useState, useEffect } from 'react';

// export function useTheme() {
//   const [theme, setTheme] = useState<'light' | 'dark'>(() => {
//     if (typeof window !== 'undefined') {
//       const savedTheme = localStorage.getItem('theme');
//       return (savedTheme as 'light' | 'dark') || 'light';
//     }
//     return 'light';
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove('light', 'dark');
//     root.classList.add(theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   return { theme, toggleTheme };
// }

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return (savedTheme as 'light' | 'dark') || 'dark';
    }
    return 'dark';
  });

  // Apply dark mode immediately to prevent flickering
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const savedTheme = localStorage.getItem('theme') || 'dark';

      root.classList.add(savedTheme);
      localStorage.setItem('theme', savedTheme);
    }
  }, []); // Runs once on mount

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}