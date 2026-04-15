'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Services', path: '/services' },
  { name: 'Produits', path: '/produits' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-solar-orange p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className={cn(
              "text-xl font-display font-extrabold tracking-tight",
              scrolled ? "text-solar-dark" : "text-solar-dark lg:text-white"
            )}>
              ADO SOLAR <span className="text-solar-orange">ENERGY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  'text-sm font-semibold transition-colors hover:text-solar-orange',
                  pathname === link.path
                    ? 'text-solar-orange'
                    : scrolled ? 'text-solar-dark' : 'text-solar-dark lg:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-solar-orange text-white px-6 py-2 rounded-full font-bold hover:bg-solar-orange/90 transition-colors shadow-lg"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 rounded-md",
                scrolled ? "text-solar-dark" : "text-solar-dark lg:text-white"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden',
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="flex flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-semibold py-2 border-b border-gray-100',
                pathname === link.path ? 'text-solar-orange' : 'text-solar-dark'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-solar-orange text-white px-6 py-3 rounded-xl font-bold text-center mt-2"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </nav>
  );
}
