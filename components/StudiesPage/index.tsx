import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StudiesPage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const vimeoVideos = [
    'https://player.vimeo.com/video/1050310564',
    'https://player.vimeo.com/video/1050310506',
    'https://player.vimeo.com/video/1050310395',
    'https://player.vimeo.com/video/1050310293',
    'https://player.vimeo.com/video/1050310256',
    'https://player.vimeo.com/video/1050310221',
    'https://player.vimeo.com/video/1050310175',
    'https://player.vimeo.com/video/1050310080',
    'https://player.vimeo.com/video/1050310031',
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
              style={{ width: '324px', height: '576px' }}
            >
              <iframe
                src={`${videoUrl}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&badge=0&autopause=0`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                className="rounded-lg shadow-lg"
                width="324"
                height="576"
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
