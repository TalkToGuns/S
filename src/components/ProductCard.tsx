import { ShoppingCart } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Typography } from './ui/Typography';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card>
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <Typography variant="h4" className="mb-2">
          {product.name}
        </Typography>
        <Typography className="mb-4">
          {product.description}
        </Typography>
        <div className="flex items-center justify-between">
          <Typography variant="h3" className="font-medium">
            ${product.price.toFixed(2)}
          </Typography>
          <Button
            onClick={() => onAddToCart(product.id)}
            variant="primary"
            size="sm"
            className="gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}