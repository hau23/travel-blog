// components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-taupe-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand Area */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <Link href="/" className="text-2xl font-extrabold text-taupe-900 hover:text-taupe-700 transition-colors tracking-tight">
              Travel Tales
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "/post", label: "Post" },
              { href: "/login", label: "Login" },
              { href: "/account", label: "Account" },
              { href: "/about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-taupe-700 hover:text-taupe-900 px-3 py-2 rounded-md text-base font-semibold transition-all duration-200
                  after:content-[''] after:block after:h-0.5 after:bg-taupe-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-taupe-700 hover:text-taupe-900 hover:bg-taupe-100 p-2 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
              title="Toggle mobile menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;