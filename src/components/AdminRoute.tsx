import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}