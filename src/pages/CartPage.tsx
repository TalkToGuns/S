import { Container } from '../components/ui/Container';
import { ShoppingCart, Trash2 } from 'lucide-react';

export function CartPage() {
  // This would typically come from a cart context or state management
  const cartItems = [];
  const cartTotal = 0;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <ShoppingCart className="h-8 w-8" />
            <h1 className="text-3xl font-serif">Shopping Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <a href="/" className="btn btn-primary">
                Continue Shopping
              </a>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Cart items would go here */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-medium">Total</span>
                  <span className="text-2xl font-serif">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="mt-8 space-x-4">
                  <button className="btn btn-primary">
                    Proceed to Checkout
                  </button>
                  <button className="btn btn-secondary">
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}