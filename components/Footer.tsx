import { BriefcaseBusiness, Github, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto flex justify-center gap-4 py-4 border-t">
      <a
        href="mailto:mynksingla@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/mayxxnkk/web-wallet3/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://mayxxnkk.netlify.app/" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <BriefcaseBusiness className="w-6 h-6" /> 
      </a>
    </footer>
  );
};

export default Footer;
