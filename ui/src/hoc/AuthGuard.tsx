import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import type { RootState } from '../redux/store';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: string[];   // protected route — only these roles can access
  guestOnly?: boolean;       // guest-only route — logged-in users get redirected away
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, allowedRoles, guestOnly }) => {
  const { isAuthenticated, userType } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  // Guest-only pages (login, register) — redirect already logged-in users to their dashboard
  if (guestOnly && isAuthenticated && userType) {
    return <Navigate to={userType === 'admin' ? '/admin-dashboard' : '/user-dashboard'} replace />;
  }

  // Protected pages — redirect unauthenticated users to login
  if (allowedRoles && !isAuthenticated) {
    const isAdminPath = location.pathname.startsWith('/admin');
    return <Navigate to={isAdminPath ? '/admin-login' : '/login'} state={{ from: location }} replace />;
  }

  // Role mismatch — redirect to their own dashboard
  if (allowedRoles && userType && !allowedRoles.includes(userType)) {
    return <Navigate to={userType === 'admin' ? '/admin-dashboard' : '/user-dashboard'} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
