import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { NavigationMenu } from './NavigationMenu';
import { MobileMenu } from './MobileMenu';
import { navigation } from '../../data/navigation';

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
          
          <NavigationMenu items={navigation} />

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

      <MobileMenu isOpen={isOpen} items={navigation} />
    </nav>
  );
}