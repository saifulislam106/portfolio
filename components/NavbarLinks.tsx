'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu } from 'lucide-react';

export function NavbarLinks() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="ml-auto">
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-2">
        <Link href="#about">
          <Button className="hover:text-blue-600" variant="ghost">
            About
          </Button>
        </Link>
        <Link href="#projects">
          <Button className="hover:text-blue-600" variant="ghost">
            Projects
          </Button>
        </Link>
        <Link href="#skills">
          <Button className="hover:text-blue-600" variant="ghost">
            Skills
          </Button>
        </Link>
        <Link href="#education">
          <Button className="hover:text-blue-600" variant="ghost">
            Education
          </Button>
        </Link>
        <Link href="#contact">
          <Button className="hover:text-blue-600">Contact</Button>
        </Link>
        {mounted && (
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-14 z-50 flex flex-col space-y-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4 rounded-md shadow-md md:hidden min-w-[180px]">
          <Link href="#about">
            <Button
              className="w-full justify-start bg-muted hover:bg-muted/80"
              variant="ghost"
            >
              About
            </Button>
          </Link>
          <Link href="#projects">
            <Button
              className="w-full justify-start bg-muted hover:bg-muted/80"
              variant="ghost"
            >
              Projects
            </Button>
          </Link>
          <Link href="#skills">
            <Button
              className="w-full justify-start bg-muted hover:bg-muted/80"
              variant="ghost"
            >
              Skills
            </Button>
          </Link>
          <Link href="#education">
            <Button
              className="w-full justify-start bg-muted hover:bg-muted/80"
              variant="ghost"
            >
              Education
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              className="w-full justify-start bg-muted hover:bg-muted/80"
              variant="ghost"
            >
              Contact
            </Button>
          </Link>
          {mounted && (
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full justify-start bg-muted hover:bg-muted/80"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

