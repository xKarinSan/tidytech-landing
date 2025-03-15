
import React from 'react';
import { Button } from "@/components/ui/button";
import { Code, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white/90 backdrop-blur-sm fixed top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-brand-teal" />
          <span className="font-bold text-xl text-brand-blue">CleanCode</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-brand-gray hover:text-brand-blue transition-colors font-medium">Features</a>
          <a href="#problem" className="text-brand-gray hover:text-brand-blue transition-colors font-medium">Why Us</a>
          <a href="#cta" className="text-brand-gray hover:text-brand-blue transition-colors font-medium">Get Started</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">Log in</Button>
          <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>Try Free</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
