'use client'

import { Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
];

const companyLinks = [
  { text: "About Us", href: "#" },
  { text: "User Analysis", href: "#" },
  { text: "Profile", href: "#" },
  { text: "Blogs", href: "#" },
];

const serviceLinks = [
  { text: "Recipes Database", href: "#" },
  { text: "Meal Planner", href: "#" },
  { text: "Recipes Search", href: "#" },
  { text: "Recipes Profile", href: "#" },
  { text: "Grocery List", href: "#" },
  { text: "Pricing", href: "#" },
];

export default function Footer() {
  return (
    <>
      {/* Social Connect Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-8 md:py-16"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 text-center md:text-left"
            >
              Stay connected with fresh-eat
            </motion.h2>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={social.href}
                      className="bg-green rounded-full p-3 inline-block hover:bg-green-400 transition-colors duration-200"
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <footer className="bg-[url('/images/grocery-list/footer-bg.png')] bg-cover bg-center text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xs"
            >
              <h2 className="text-2xl font-bold mb-4">FRESH-EATS</h2>
              <p className="text-lg text-gray-200">
                Fresh-eat provides you with the best recipes and good cooking ideas.
              </p>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={link.href} className="hover:text-green-300 transition-colors duration-200">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {serviceLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={link.href} className="hover:text-green-300 transition-colors duration-200">
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-4 text-gray-200">Lorem ipsum dolor sit amet consectetur.</p>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20"
          >
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 Fresh-Eats. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-green-300 transition-colors duration-200">Terms</Link>
              <Link href="#" className="hover:text-green-300 transition-colors duration-200">Policy</Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}