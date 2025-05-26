
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-muted-foreground py-10 mt-24">
      <div className="max-w-5xl mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Portfolio Name with Gradient */}
        <div className="text-xl font-bold">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Saiful Islam
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#education" className="hover:text-primary transition-colors">Education</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://github.com/saifulislam106"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saiful-islam-s106915/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Optional copyright */}
      <div className="mt-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Saiful Islam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
