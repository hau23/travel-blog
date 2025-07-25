// pages/index.tsx
import React from 'react';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
   return (
      <>
         {/* This is the content that will be rendered inside the <main> tag of your Layout. */}
         <div className="bg-taupe-50 h-full col-span-3 flex flex-row">
            <div className="h-full flex flex-col justify-center items-center p-8">
               <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
                  A place where you share your dearest memories
               </h1>
               <p className="text-lg text-gray-700 mb-6">
                  Embark on a journey through captivating stories and breathtaking destinations.
                  Start exploring now!
               </p>
               {/* You can add a button, image, or list of recent posts here */}
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Explore Posts
               </button>
            </div>
         </div>
         <div className="bg-taupe-50 h-full col-span-3">

         </div>
      </>
   );
};

export default HomePage;