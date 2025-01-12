import React from 'react';
import Image from 'next/image';
import Image1 from '../../public/images/Case Studies/DarryringxBrandonAndDaisy.png';
import Image2 from '../../public/images/Case Studies/OnceHumanxQLC.png';

const StudiesPage: React.FC = () => {
  const images = [Image1, Image2];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-yellow text-[48px]  flex justify-start items-start text-start px-10 xl:px-0 font-semibold mt-28">Case Studies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {images.map((src, index) => (
          <div key={index} className="relative w-(856) h-[580px]">
            <Image 
              src={src}
              width={856}
              height={580}
              objectFit="cover"
              alt={`Case study ${index + 1}`}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudiesPage;
