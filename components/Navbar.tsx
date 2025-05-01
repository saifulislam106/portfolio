

"use client";

import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  // const { setTheme, theme } = useTheme();

  return (
    <nav className="w-full py-4 shadow-sm fixed top-0 bg-white dark:bg-black z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold tracking-tight text-primary">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Saiful Islam
          </span>
        </div>
      <NavbarLinks  />
      </div>
    </nav>
  );
};
