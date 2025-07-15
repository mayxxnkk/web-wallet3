import { BriefcaseBusiness, Github, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto flex justify-center gap-4 py-4 border-t">
      <a
        href="mailto:gurshaansinghd@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </a>
      <a
        href="https://github.com/gurshaan17/wallet"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition-colors"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href="https://gurshaan.xyz" 
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
