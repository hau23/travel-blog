// components/MockPost.tsx

type MockPostProps = {
  location: string;
  description: string;
  image: string;
};

export default function MockPost({ location, description, image }: MockPostProps) {
  return (
    <div 
    key={location + image}
    className="bg-white shadow-lg rounded-lg p-4 mb-4 w-full motion-preset-slide-left motion-duration-700">
      <img src={image} 
      alt={location} className="h-40 w-full object-cover rounded-md mb-3 "/>
      <h3 className="text-lg font-semibold text-gray-800">{location}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
