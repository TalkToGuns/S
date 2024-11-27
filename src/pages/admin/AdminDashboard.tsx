import { Container } from '../../components/ui/Container';
import { Typography } from '../../components/ui/Typography';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Container>
        <Typography variant="h1" className="mb-8">Admin Dashboard</Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Typography variant="h3" className="mb-4">Products</Typography>
            <Button 
              variant="primary"
              onClick={() => navigate('/admin/products')}
              className="w-full"
            >
              Manage Products
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Typography variant="h3" className="mb-4">Orders</Typography>
            <Button 
              variant="primary"
              onClick={() => navigate('/admin/orders')}
              className="w-full"
            >
              View Orders
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Typography variant="h3" className="mb-4">Users</Typography>
            <Button 
              variant="primary"
              onClick={() => navigate('/admin/users')}
              className="w-full"
            >
              Manage Users
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}