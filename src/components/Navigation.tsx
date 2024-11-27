import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { NavItem } from '../types';

const navigation: NavItem[] = [
  {
    title: "E-Liquids",
    href: "/e-liquids",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&q=80",
    description: "Premium flavors crafted for distinguished tastes"
  },
  {
    title: "Devices",
    href: "/devices",
    image: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?auto=format&fit=crop&q=80",
    description: "Sophisticated devices for the discerning enthusiast"
  },
  {
    title: "Accessories",
    href: "/accessories",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    description: "Essential luxuries for your vaping experience"
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif tracking-wider">
              Vapor Élan
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="text-gray-300 hover:text-white">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/account" className="text-gray-300 hover:text-white">
              <User className="h-6 w-6" />
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}