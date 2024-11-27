import { Link } from 'react-router-dom';
import { NavItem } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
}

export function MobileMenu({ isOpen, items }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {items.map((item) => (
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
  );
}