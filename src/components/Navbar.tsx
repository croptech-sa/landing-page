import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage2 = () => {
    const page2 = document.getElementById('page2');
    if (page2) {
      page2.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/20 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
        dir="rtl"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Right - Logo (always visible) */}
            <div className="flex items-center">
              <img 
                src="/logo.svg" 
                alt="شعار الموقع" 
                className="w-24 h-24 md:w-28 md:h-28"
              />
            </div>

            {/* Center - Navigation Links (desktop only) */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">
                قصتنا
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">
                احسب أثرك
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors duration-200 font-medium">
                المجلس الاستشاري
              </a>
              <button 
                onClick={scrollToPage2}
                className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
              >
                تواصل معنا
              </button>
            </div>

            {/* Left - Desktop: CTA Button and Theme Toggle, Mobile: Hamburger */}
            <div className="flex items-center space-x-4 space-x-reverse">
              {/* Desktop buttons */}
              <div className="hidden md:flex items-center space-x-4 space-x-reverse">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center hover:text-green-600 transition-all duration-300 group"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-white group-hover:text-green-600 transition-colors duration-300" />
                  ) : (
                    <Moon className="w-5 h-5 text-white group-hover:text-green-600 transition-colors duration-300" />
                  )}
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  ابدأ الآن
                </button>
              </div>

              {/* Mobile hamburger menu */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden w-8 h-8 flex items-center justify-center text-white hover:text-green-400 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Content */}
          <div className="absolute top-0 right-0 w-80 h-full bg-black/90 backdrop-blur-md border-l border-white/10" dir="rtl">
            <div className="flex flex-col h-full pt-24 px-6">
              {/* Navigation Links */}
              <div className="flex flex-col space-y-6 mb-8">
                <a 
                  href="#" 
                  onClick={closeMobileMenu}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-lg py-2"
                >
                  قصتنا
                </a>
                <a 
                  href="#" 
                  onClick={closeMobileMenu}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-lg py-2"
                >
                  احسب أثرك
                </a>
                <a 
                  href="#" 
                  onClick={closeMobileMenu}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-lg py-2"
                >
                  المجلس الاستشاري
                </a>
                <button 
                  onClick={scrollToPage2}
                  className="text-white hover:text-green-400 transition-colors duration-200 font-medium text-lg py-2 text-right"
                >
                  تواصل معنا
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-4 mt-auto mb-8">
                <button className="bg-white text-black px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-lg">
                  ابدأ الآن
                </button>
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                  className="flex items-center justify-center space-x-3 space-x-reverse w-full py-3 rounded-lg border border-white text-white hover:border-green-600 hover:text-green-600 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                  <span className="font-medium">تبديل المظهر</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;