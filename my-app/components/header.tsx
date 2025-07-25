// components/Header.tsx
import React from 'react';
import Link from 'next/link'; // For navigation links in Next.js

const Header: React.FC = () => {
   return (
      <header className="col-span-full w-full bg-taupe-50 text-taupe-950 opacity-90 h-full">
         <div className="flex justify-center items-center h-full">
            <nav className="grid grid-cols-3 gap-x-4 max-w-sm w-full ">
               <Link href="/" className="rounded-lg  hover:bg-taupe-100 p-4 text-center flex justify-center">
                  Post
               </Link>
               <Link href="/about" className="rounded-lg  hover:bg-taupe-100 p-4 text-center flex justify-center">
                  About
               </Link>
               <Link href="/login" className="rounded-lg hover:bg-taupe-100 p-4 text-center flex justify-center">
                  Login
               </Link>
            </nav>
         </div>
      </header>
   );
};

export default Header;