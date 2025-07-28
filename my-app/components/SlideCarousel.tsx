// components/RightSidebar.tsx

import { useEffect, useState } from 'react';
import MockPost from './MockPost';

type Post = {
  location: string;
  description: string;
  image: string;
};

const mockPosts: Post[] = [
  {

    location: 'Santorini, Greece',
    description: 'Blue domes and sunsets that steal your breath.',
    image: 'https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/030/284/medium/0135489fca35fdfd131c6e539fa0e31e/article-slovenia-ljubljana-triple-bridge.jpg',
  },
  {
    location: 'Kyoto, Japan',
    description: 'Temples, tea, and timeless traditions.',
    image: 'https://www.mensjournal.com/.image/t_share/MTk2MTM2NjY0Mzg4MzQ3MDI1/kyoto.jpg',
  },
  {
    location: 'Banff, Canada',
    description: 'Lakes so turquoise it feels unreal.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKtdofeXwOrAfMxlIWryX7tB09pcGgOEG_g&s',
  },
];
/*
export default function RightSidebar() {
  const [visibleIndex, setVisibleIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % mockPosts.length);
    }, 3000); // Change post every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 max-w-sm flex justify-center items-center">
      <MockPost {...mockPosts[visibleIndex]} />
    </div>
  );
} */

export default function SlideCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mockPosts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
      {mockPosts.map((post, index) => {
        const offset = index - activeIndex;

        let transformStyles = '';

        if (offset === 0) {
          // Active
          transformStyles = 'translate-y-0 scale-100 z-30';
        } else if (offset === -1 || (activeIndex === 0 && index === mockPosts.length - 1)) {
          // Left post
          transformStyles = 'translate-x-[-60%] translate-y-10 scale-90 z-10';
        } else if (offset === 1 || (activeIndex === mockPosts.length - 1 && index === 0)) {
          // Right post
          transformStyles = 'translate-x-[60%] translate-y-10 scale-90 z-10';
        } else {
          // Hidden (for anything else)
          transformStyles = 'opacity-0 pointer-events-none';
        }

        return (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out w-[280px] h-[360px] ${transformStyles}`}
          >
            <div className="bg-white rounded-lg shadow-xl p-4 w-full h-full">
              <img
                src={post.image}
                alt={post.location}
                className="h-40 w-full object-cover rounded mb-3"
              />
              <h3 className="text-lg font-bold text-gray-800">{post.location}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}