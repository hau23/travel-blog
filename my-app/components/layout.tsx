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
    <div className="grid grid-cols-6 grid-rows-12 min-h-screen grid-auto-rows-fr">
      <Header /> 
      <main className="col-span-full row-start-2 row-end-12 grid grid-cols-6">
        {children} 
      </main>
      <Footer /> 
    </div>
  );
};

export default Layout;