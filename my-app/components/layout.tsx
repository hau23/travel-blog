// components/Layout.tsx
import React from 'react';
import Header from './header'; // Import your Header
import Footer from './footer'; // Import your Footer

// Define the shape of props your Layout component expects
interface LayoutProps {
  children: React.ReactNode; // This means it expects any renderable React content
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // This div ensures your layout takes at least the full screen height
    // and stacks header, main, and footer vertically.
    <div className="grid grid-cols-6 min-h-screen gap-4">
      <Header /> 
      <main className="flex-grow container mx-auto px-4 py-8">
        {children} 
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;