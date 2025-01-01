import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <footer className="mt-16 p-8 bg-gray-900 text-gray-300 shadow-lg">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap justify-end space-x-1 space-y-8 items-start">
            {/* Quick Links Section */}
            <div className="flex-1">
              <h4 className="font-light text-lg mb-4">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/" className="hover:text-white font-thin">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/movie/:id" className="hover:text-white font-thin">
                    Movie Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/movieDetails/:id"
                    className="hover:text-white font-thin"
                  >
                    See Movie Details
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex-1">
              <h4 className="font-light text-lg mb-4">Support</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/faq" className="hover:text-white font-thin">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white font-thin">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white font-thin">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="flex-1">
              <h4 className="font-light text-lg mb-4">Follow Us</h4>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white font-thin"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white font-thin"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white font-thin"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div className="flex-1">
              <h4 className="font-light text-lg mb-4">About</h4>
              <ul className="space-y-1">
                <li>
                  <a href="/about" className="font-thin hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="font-thin hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="font-thin hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-right">
          <p>&copy; {currentYear} Srajal Dwivedi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
