'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (isOpen && nav && !nav.contains(event.target as Node) && 
          button && !button.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/recipes", label: "Recipes" },
    { href: "/meal-planner", label: "Meal Planner" },
    { href: "/grocery-list", label: "Grocery List" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-green hover:scale-105 transition-transform"
            onClick={handleLinkClick}
          >
            FRESH EAT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-600 hover:text-green transition-colors relative group ${
                    pathname === link.href ? "text-green" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? "w-full" : ""
                  }`} />
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-green hover:bg-green/10"
              >
                Login
              </Button>
              <Button 
                variant="default" 
                className="bg-green text-white hover:bg-green/90 transition-colors"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="menu-button"
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 bg-white shadow-lg">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-gray-600 hover:text-green transition-colors px-4 py-3 rounded-md 
                      active:bg-green/5 ${
                      pathname === link.href 
                        ? "text-green bg-green/10" 
                        : "hover:bg-gray-50"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-6 space-y-3 px-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-center text-gray-600 hover:text-green hover:bg-green/10 h-12"
                  onClick={handleLinkClick}
                >
                  Login
                </Button>
                <Button 
                  variant="default" 
                  className="w-full justify-center bg-green text-white hover:bg-green/90 h-12"
                  onClick={handleLinkClick}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
