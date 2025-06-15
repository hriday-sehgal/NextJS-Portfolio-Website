// components/ui/navbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    {
      name: "Blog",
      path: "https://decodewithhriday.vercel.app/blogs",
      target: "_blank",
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getContactLink = () => {
    if (pathname === "/projects") {
      return "/projects#contact";
    }
    return "#contact";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 border-b bg-white/80 border-gray-200"
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className="text-xl font-bold text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Hriday Sehgal
          </Link>
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleMenu}
              className="border-gray-200"
            >
              {isOpen ? (
                <X className="h-4 w-4 text-gray-900" />
              ) : (
                <Menu className="h-4 w-4 text-gray-900" />
              )}
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="ghost"
                  className="text-gray-700 hover:bg-gray-100"
                >
                  <Link
                    href={link.path}
                    target={link.target || "_self"}
                    rel={
                      link.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.name}
                  </Link>
                </Button>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="ghost"
                className="text-gray-700 hover:bg-gray-100"
              >
                <Link href={getContactLink()} onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 backdrop-blur-md border-b z-40 bg-white/90 border-gray-200">
          <div className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link) => (
              <Button
                asChild
                variant="ghost"
                key={link.name}
                className="w-full text-center text-gray-900"
              >
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  target={link.target || "_self"}
                  rel={
                    link.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                >
                  {link.name}
                </Link>
              </Button>
            ))}
            <Button
              asChild
              variant="ghost"
              className="w-full text-center text-gray-900"
            >
              <Link href={getContactLink()} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
