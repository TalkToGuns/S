import { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Typography } from '../../components/ui/Typography';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Product } from '../../types';
import { products } from '../../data/products';

export function ProductManagement() {
  const [productList, setProductList] = useState<Product[]>(products);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: 'e-liquids' as Product['category']
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      image: formData.image,
      category: formData.category
    };
    
    setProductList([...productList, newProduct]);
    // Reset form
    setFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      category: 'e-liquids'
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Container>
        <Typography variant="h1" className="mb-8">Product Management</Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <Typography variant="h3" className="mb-6">Add New Product</Typography>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as Product['category'] })}
                  className="w-full p-2 border rounded"
                >
                  <option value="e-liquids">E-Liquids</option>
                  <option value="devices">Devices</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              
              <Button type="submit" variant="primary" className="w-full">
                Add Product
              </Button>
            </form>
          </Card>
          
          <div>
            <Typography variant="h3" className="mb-6">Current Products</Typography>
            <div className="space-y-4">
              {productList.map((product) => (
                <Card key={product.id} className="p-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <Typography variant="h4">{product.name}</Typography>
                      <Typography variant="small">${product.price.toFixed(2)}</Typography>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setProductList(productList.filter(p => p.id !== product.id));
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}