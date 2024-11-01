"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Tent } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Tent className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
                LemontreeKW
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/about" className="text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Link href="/gallery" className="text-foreground/80 hover:text-foreground">
              Gallery
            </Link>
            <Link href="/services" className="text-foreground/80 hover:text-foreground">
              Services
            </Link>
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300"
            >
              <Link href="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-background hover:text-foreground/80"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              Gallery
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              Services
            </Link>
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link href="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}