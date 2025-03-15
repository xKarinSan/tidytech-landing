
import React from 'react';
import { Code, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-brand-teal" />
              <span className="font-bold text-xl text-brand-blue">CleanCode</span>
            </div>
            <p className="text-brand-gray text-sm mb-4">
              Eliminate technical debt and inconsistencies from your codebase automatically.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-brand-gray hover:text-brand-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-blue mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-blue mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">API Reference</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-brand-blue mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-brand-gray hover:text-brand-blue transition-colors text-sm">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-brand-gray mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CleanCode. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-brand-gray hover:text-brand-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
