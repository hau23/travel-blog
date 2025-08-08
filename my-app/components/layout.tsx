// components/Layout.tsx
'use client';

import React from 'react';
import Header from './header'; // Import your Header
import Footer from './footer'; // Import your Footer
import HeroSection from './HeroSection'; // Import your HeroSection
import { SessionProvider } from 'next-auth/react';

// Define the shape of props your Layout component expects
interface LayoutProps {
  children: React.ReactNode; // This means it expects any renderable React content
  showHero?: boolean; // Optional prop to control hero visibility
}

const Layout: React.FC<LayoutProps> = ({ children, showHero = false }) => {
  return (
    <SessionProvider>
      <div className="min-h-screen flex flex-col bg-taupe-50 bg-gradient-to-br from-taupe-50 via-taupe-100 to-taupe-200">
        <Header />
        {showHero && <HeroSection />}
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </SessionProvider>
  );
};

export default Layout;