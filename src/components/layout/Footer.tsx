
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, 
  Github, Twitter, Linkedin,
  Mail, Phone
} from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: ['Features', 'Integrations', 'Pricing', 'Updates']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Contact']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Newsletter', 'Documentation', 'Support']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">ContentFlow AI</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your content creation with AI-powered tools. 
              Reach global audiences with intelligent translation and targeting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-gray-400 text-sm">
              © 2025 ContentFlow AI. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contact@contentflow.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer ;