"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoSvg from "../Public/assets/Logo.svg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image src={LogoSvg} alt="Logo" width={40} height={40} />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/" isActive>
              Homepage
            </NavLink>
            <NavLink href="/impact">Impact</NavLink>
            <NavLink href="/olympiad">SNIPE Olympiad</NavLink>
            <NavLink href="/faqs">FAQs & MYTHs</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md text-sm font-medium">
              Updates
            </button>
            <button className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium">
              Register Now
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink href="/" isActive>
            Homepage
          </MobileNavLink>
          <MobileNavLink href="/impact">Impact</MobileNavLink>
          <MobileNavLink href="/olympiad">SNIPE Olympiad</MobileNavLink>
          <MobileNavLink href="/faqs">FAQs & MYTHs</MobileNavLink>
          <MobileNavLink href="/about">About Us</MobileNavLink>
          <MobileNavLink href="/contact">Contact Us</MobileNavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
              Updates
            </button>
          </div>
          <div className="mt-3 flex items-center px-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium w-full">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children, isActive = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex text-black  items-center px-1 pt-1 border-b-2 text-sm font-semibold ${isActive ? "text-secondary" : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, isActive = false }) {
  return (
    <Link
      href={href}
      className={`block pl-3 pr-4 py-2 border-l-4 text-black font-medium ${isActive ? "text-secondary" : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"}`}
    >
      {children}
    </Link>
  );
}
