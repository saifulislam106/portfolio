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
        <Link href="#projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link href="#skills">
          <Button variant="ghost">Skills</Button>
        </Link>
        <Link href="#resume">
          <Button variant="ghost">Resume</Button>
        </Link>
        <Link href="#contact">
          <Button>Contact</Button>
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
        <div className="absolute right-4 top-14 z-50 flex flex-col space-y-2 bg-popover p-4 rounded-md shadow-md md:hidden">
          <Link href="#projects">
            <Button variant="ghost" className="w-full justify-start">
              Projects
            </Button>
          </Link>
          <Link href="#skills">
            <Button variant="ghost" className="w-full justify-start">
              Skills
            </Button>
          </Link>
          <Link href="#resume">
            <Button variant="ghost" className="w-full justify-start">
              Resume
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="w-full justify-start">Contact</Button>
          </Link>
          {mounted && (
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full justify-start"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
