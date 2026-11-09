import React from 'react';
import { useAuth } from '@/hooks/useAuth'; // Assume this hook provides authentication status

const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Determine if the user is logged in

  if (isAuthenticated) {
    return (
      <div className="app-shell logged">
        <aside className="sidebar">Sidebar content</aside>
        <main className="main-content">
          <nav className="navbar">Navbar content</nav>
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell public">
      <main className="centered-content">
        {children}
      </main>
    </div>
  );
};

export default AppShell;
