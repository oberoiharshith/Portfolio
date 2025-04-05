
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-data-navy text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Harshith Oberoi. All rights reserved.</p>
            <p className="text-sm mt-1">oberoiharshith@gmail.com</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/harshith-oberoi-95548a18a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/oberoiharshith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLjZSJ3VhEZRJxMoHkcSCcescvi3uxhVce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
