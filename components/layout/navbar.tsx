"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-[2000px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">NextAuth</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="#features" className="text-foreground/60 hover:text-foreground">
                Features
              </Link>
              <Link href="#pricing" className="text-foreground/60 hover:text-foreground">
                Pricing
              </Link>
              <Link href="#about" className="text-foreground/60 hover:text-foreground">
                About
              </Link>
              <Link href="#contact" className="text-foreground/60 hover:text-foreground">
                Contact
              </Link>
              <ModeToggle />
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="border-t py-4 md:hidden">
              <div className="flex flex-col space-y-4">
                <Link href="#features" className="text-foreground/60 hover:text-foreground">
                  Features
                </Link>
                <Link href="#pricing" className="text-foreground/60 hover:text-foreground">
                  Pricing
                </Link>
                <Link href="#about" className="text-foreground/60 hover:text-foreground">
                  About
                </Link>
                <Link href="#contact" className="text-foreground/60 hover:text-foreground">
                  Contact
                </Link>
                <div className="flex items-center space-x-4">
                  <ModeToggle />
                  <Link href="/login">
                    <Button variant="ghost">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}