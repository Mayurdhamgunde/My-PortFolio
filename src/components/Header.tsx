import React from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
            MD
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Projects
            </a>
            <a href="#achievements" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Achievements
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#achievements"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}