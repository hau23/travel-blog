// pages/index.tsx
import React from 'react';
import type { NextPage } from 'next';

import SlideCarousel from '../components/SlideCarousel';

const HomePage: NextPage = () => {
   return (
      <>
         {/* Featured Content Section */}
         <section className="bg-taupe-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-taupe-900 mb-4">
                     Featured Stories
                  </h2>
                  <p className="text-lg text-taupe-700 max-w-2xl mx-auto">
                     Discover the latest travel adventures and inspiring journeys from our community
                  </p>
               </div>
               
               <div className="bg-white rounded-2xl shadow-lg p-8">
                  <SlideCarousel />
               </div>
            </div>
         </section>
      </>
   );
};

export default HomePage;