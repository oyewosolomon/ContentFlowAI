import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown
} from 'lucide-react';
import SignupModal from '../sections/SignupModal';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      label: 'Products',
      href: '#products',
      submenu: [
        { label: 'Content Generation', href: '#content-generation' },
        { label: 'Translation', href: '#translation' },
        { label: 'Analytics', href: '#analytics' },
        { label: 'Integration', href: '#integration' }
      ]
    },
    {
      label: 'Solutions',
      href: '#solutions',
      submenu: [
        { label: 'Media Companies', href: '#media-companies' },
        { label: 'Marketing Agencies', href: '#marketing-agencies' },
        { label: 'Enterprise', href: '#enterprise' },
        { label: 'Startups', href: '#startups' }
      ]
    },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.a 
          href='/'
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold flex gap-2 items-center ${isScrolled ? 'text-gray-600':'text-white'}`}
          >
        <svg width="30px" height="30px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-content" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0769 22.5C10.0769 21.6716 10.7485 21 11.5769 21H22.4231C23.2515 21 23.9231 21.6716 23.9231 22.5C23.9231 23.3284 23.2515 24 22.4231 24H11.5769C10.7485 24 10.0769 23.3284 10.0769 22.5ZM10.0769 17C10.0769 16.1716 10.7485 15.5 11.5769 15.5H22.4231C23.2515 15.5 23.9231 16.1716 23.9231 17C23.9231 17.8284 23.2515 18.5 22.4231 18.5H11.5769C10.7485 18.5 10.0769 17.8284 10.0769 17ZM10.0769 11.5C10.0769 10.6716 10.7485 10 11.5769 10H22.4231C23.2515 10 23.9231 10.6716 23.9231 11.5C23.9231 12.3284 23.2515 13 22.4231 13H11.5769C10.7485 13 10.0769 12.3284 10.0769 11.5ZM18 7H10C8.34315 7 7 8.34315 7 10V18H3C1.34315 18 0 16.6569 0 15V3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V7Z" fill={` ${isScrolled ? '#4f46e5':'#ffffff' }`}></path></g></svg>
            ContentFlowAI
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href}
                  className={`flex items-center space-x-1 ${
                    isScrolled ? 'text-gray-600' : 'text-white'
                  } hover:text-indigo-600 transition-colors`}
                >
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem, subindex) => (
                      <a
                        key={subindex}
                        href={subitem.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button 
              onClick={() => setIsSignupOpen(true)} 
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </button>
          </div>
          
          <SignupModal 
            isOpen={isSignupOpen} 
            onClose={() => setIsSignupOpen(false)} 
          />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-6 py-4">
              {menuItems.map((item, index) => (
                <div key={index} className="py-2">
                  <a 
                    href={item.href}
                    className="text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.submenu.map((subitem, subindex) => (
                        <a
                          key={subindex}
                          href={subitem.href}
                          className="block text-gray-500 hover:text-indigo-600"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button 
                onClick={() => setIsSignupOpen(true)}
                className="w-full mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
