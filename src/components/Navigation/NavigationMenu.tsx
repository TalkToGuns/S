import { Link } from 'react-router-dom';
import { NavItem } from '../../types';

interface NavigationMenuProps {
  items: NavItem[];
}

export function NavigationMenu({ items }: NavigationMenuProps) {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-8">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors group relative"
          >
            {item.title}
            {item.image && (
              <div className="absolute hidden group-hover:block top-full left-0 w-64 p-4 mt-2 bg-white rounded-lg shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}