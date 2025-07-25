// pages/index.tsx
import React from 'react';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    // This is the content that will be rendered inside the <main> tag of your Layout.
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Welcome to Your Travel Blog!
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
  );
};

export default HomePage;