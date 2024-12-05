'use client'

import { Facebook, Twitter, Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Social Connect Section */}
      <div className=" py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-4xl font-medium text-gray-700">
              Stay connected with fresh-eat
            </h2>
            <div className="flex gap-4">
              <Link href="#" className="bg-[#8BC34A] rounded-full p-3">
                <Facebook className="w-8 h-8 text-white" />
              </Link>
              <Link href="#" className="bg-[#8BC34A] rounded-full p-3">
                <Twitter className="w-8 h-8 text-white" />
              </Link>
              <Link href="#" className="bg-[#8BC34A] rounded-full p-3">
                <Instagram className="w-8 h-8 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[url('/images/grocery-list/footer-bg.png')] bg-cover bg-center text-white py-16">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="flex justify-between items-start mb-12">
            {/* Brand Section */}
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold mb-4">FRESH-EATS</h2>
              <p className="text-lg">
                Fresh-eat provides you with the best recipes and good cooking ideas.
              </p>
            </div>
        

            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">User Analysis</Link></li>
                <li><Link href="#">Profile</Link></li>
                <li><Link href="#">Blogs</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#">Recipes Database</Link></li>
                <li><Link href="#">Meal Planner</Link></li>
                <li><Link href="#">Recipes Search</Link></li>
                <li><Link href="#">Recipes Profile</Link></li>
                <li><Link href="#">Grocery List</Link></li>
                <li><Link href="#">Pricing</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-end items-center pt-8 border-t border-white/20">
            <div className="flex gap-6">
              <Link href="#">Terms</Link>
              <Link href="#">Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
