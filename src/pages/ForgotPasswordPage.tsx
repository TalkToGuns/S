import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Typography } from '../components/ui/Typography';
import { Card } from '../components/ui/Card';

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Implement password reset logic
    console.log('Password reset requested for:', email);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <Container>
          <div className="max-w-md mx-auto">
            <Card className="p-8 animate-fade-in text-center">
              <Typography variant="h2" className="mb-4">Check Your Email</Typography>
              <Typography className="mb-6">
                We've sent password reset instructions to {email}
              </Typography>
              <Link to="/login">
                <Button variant="outline" className="w-full">
                  Return to Login
                </Button>
              </Link>
            </Card>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <Container>
        <div className="max-w-md mx-auto">
          <Card className="p-8 animate-fade-in">
            <div className="text-center mb-8">
              <Typography variant="h2" className="mb-2">Reset Password</Typography>
              <Typography>Enter your email to reset your password</Typography>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Reset Password
              </Button>

              <Typography variant="small" className="text-center">
                Remember your password?{' '}
                <Link to="/login" className="text-black hover:underline">
                  Sign in
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
}