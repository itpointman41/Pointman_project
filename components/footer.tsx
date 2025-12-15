'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-green-500 mb-4">Pointman Internation Services Inc.</h3>
            <p className="text-gray-400 text-sm mb-4">
              Pointing mankind to the best direction
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold mb-6">For Job Seekers</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  Career Advice
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  My Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  Resume Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500 transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-green-500 mt-1" />
                <a href="mailto:support@recplatform.com" className="hover:text-green-500 transition-colors">
                  support@recplatform.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-green-500 mt-1" />
                <a href="tel:+1234567890" className="hover:text-green-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-green-500 mt-1 shrink-0" />
                <span>1291 3rd Floor GT Realty Bldg. Batangas St. Cor. Uruguay St. Brgy. San Isidro, Makati City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Links */}
          <ul className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <li>
              <Link href="#" className="hover:text-green-500 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-500 transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-500 transition-colors">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-500 transition-colors">
                Accessibility
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <p className="text-gray-400 text-sm text-right">
            &copy; 2025 Pointman International Services Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
