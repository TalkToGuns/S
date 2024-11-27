import { Container } from '../components/ui/Container';
import { Typography } from '../components/ui/Typography';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Product } from '../types';

interface ProductsPageProps {
  category: Product['category'];
}

export function ProductsPage({ category }: ProductsPageProps) {
  const categoryProducts = products.filter(product => product.category === category);
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');

  const handleAddToCart = (productId: string) => {
    console.log(`Adding product ${productId} to cart`);
    // TODO: Implement cart functionality
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Container>
        <Typography variant="h1" className="mb-8 text-center">
          {categoryTitle}
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}