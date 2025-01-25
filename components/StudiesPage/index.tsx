import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StudiesPage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Představme si, že máme URL pro každý video na Vimeo
  const vimeoVideos = [
    'https://player.vimeo.com/video/1050310564?h=ae010c3068',
    'https://player.vimeo.com/video/1050310506?h=8114864a33',
    'https://player.vimeo.com/video/1050310395?h=c4c5b71eb3',
    'https://player.vimeo.com/video/1050310293?h=6a7118a90c',
    'https://player.vimeo.com/video/1050310256?h=67d9433ee1',
    'https://player.vimeo.com/video/1050310221?h=adca3b3d4e',
    'https://player.vimeo.com/video/1050310175?h=3adfed800b',
    'https://player.vimeo.com/video/1050310080?h=4f06a0c874',
    'https://player.vimeo.com/video/1050310031?h=72a62fa6e9',
  ];

  return (
    <div className="bg-background">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-yellow text-[48px] font-semibold mb-10 text-left mt-16">
          Case Studies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
          {vimeoVideos.map((videoUrl, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-duration="800"
              data-aos-delay={`${index * 100}`}
              className="relative flex justify-center"
            >
              <iframe
                src={`${videoUrl}?title=0&byline=0&portrait=0&badge=0&autopause=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title={`video-${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudiesPage;
