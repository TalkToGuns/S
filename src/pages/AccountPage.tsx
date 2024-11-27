import { useNavigate } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';

export function AccountPage() {
  const navigate = useNavigate();
  const isAuthenticated = false; // TODO: Implement auth state management

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <Container>
          <div className="max-w-md mx-auto">
            <Card className="p-8 text-center animate-fade-in">
              <Typography variant="h2" className="mb-4">Sign In Required</Typography>
              <Typography className="mb-6">
                Please sign in or create an account to access this page
              </Typography>
              <div className="space-y-4">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => navigate('/login')}
                >
                  Sign In
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/signup')}
                >
                  Create Account
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Container>
        <Typography variant="h1" className="mb-8">My Account</Typography>
        {/* Account dashboard content will go here */}
      </Container>
    </div>
  );
}