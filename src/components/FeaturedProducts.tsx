import { Container } from './ui/Container';
import { ProductCard } from './ui/ProductCard';
import { featuredProducts } from '../data/featured-products';

export function FeaturedProducts() {
  const handleAddToCart = (productId: string) => {
    console.log(`Adding product ${productId} to cart`);
    // TODO: Implement cart functionality
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-serif text-center mb-12">
          Featured Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}