// // components/Navbar.tsx
// 'use client';
// import Link from 'next/link';
// import { Button } from './ui/button';

// export const Navbar = () => (
//   <nav className="w-full py-4 shadow-sm fixed top-0 bg-white z-50">
//     <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
//       <Link href="/" className="text-xl font-bold">Saiful</Link>
//       <div className="space-x-4 hidden sm:block">
//         <Link href="#projects"><Button variant="ghost">Projects</Button></Link>
//         <Link href="#skills"><Button variant="ghost">Skills</Button></Link>
//         <Link href="#resume"><Button variant="ghost">Resume</Button></Link>
//         <Link href="#contact"><Button>Contact</Button></Link>
//       </div>
//     </div>
//   </nav>
// );

"use client";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";
// import { Moon, Sun } from "lucide-react";
// import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";

export const Navbar = () => {
  // const { setTheme, theme } = useTheme();

  return (
    <nav className="w-full py-4 shadow-sm fixed top-0 bg-white dark:bg-black z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        {/* <span className="text-xl font-bold">Saiful</span> */}
        <div className="text-2xl font-bold tracking-tight text-primary">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Saiful Islam
          </span>
        </div>
      <NavbarLinks />
        {/* <div className="space-x-4 flex items-center">
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
          <Button
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div> */}
      </div>
    </nav>
  );
};
