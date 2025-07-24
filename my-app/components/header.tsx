// components/Header.tsx
import React from 'react';
import Link from 'next/link'; // For navigation links in Next.js

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200">
          My Travel Blog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-200">
                Home
              </Link>
            </li>
            {/* You'll add more links here later, e.g., for About, Posts */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;