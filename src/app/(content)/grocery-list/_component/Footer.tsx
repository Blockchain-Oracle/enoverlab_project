"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <footer className="relative bg-[url('/Images/grocery-list/footer-bg.png')] bg-cover bg-center text-white">
      {/* Social Connect Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-[#84C52A] py-12 md:py-20"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-white md:text-left md:text-4xl lg:text-5xl"
            >
              Stay connected with Fresh-Eats
            </motion.h2>

            <div className="flex gap-6">
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
                      className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/20 transition-all duration-300 hover:bg-white hover:shadow-lg"
                    >
                      <Icon className="h-7 w-7 text-white transition-colors group-hover:text-[#84C52A]" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Footer Content Grid */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-sm"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              FRESH-EATS
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Fresh-Eats empowers you with premium recipes and innovative
              cooking ideas to transform your culinary experience.
            </p>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-semibold">Company Info</h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-lg transition-all duration-300 hover:text-[#84C52A] hover:underline"
                  >
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
            <h3 className="mb-6 text-2xl font-semibold">Services</h3>
            <ul className="space-y-4">
              {serviceLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-lg transition-all duration-300 hover:text-[#84C52A] hover:underline"
                  >
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
            <h3 className="mb-6 text-2xl font-semibold">Contact Us</h3>
            <address className="space-y-4 not-italic">
              <p className="flex items-center text-lg text-gray-200">
                support@fresh-eats.com
              </p>
              <p className="flex items-center text-lg text-gray-200">
                +1 (555) 123-4567
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                123 Fresh Street
                <br />
                Foodie City, FC 12345
              </p>
            </address>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between border-t border-white/20 pt-8 md:flex-row"
        >
          <p className="mb-4 text-lg text-gray-300 md:mb-0">
            © 2024 Fresh-Eats. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-lg transition-all duration-300 hover:text-[#84C52A] hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-lg transition-all duration-300 hover:text-[#84C52A] hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
