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
          {/* Logo */}
          <motion.a 
          href='/'
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${isScrolled ? 'text-gray-600':'text-white'}`}
          >
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
