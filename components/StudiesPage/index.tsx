import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StudiesPage: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const videos = [
    '/videos/01.mp4',
    '/videos/02.mp4',
    '/videos/03.mp4',
    '/videos/04.mp4',
    '/videos/05.mp4',
    '/videos/06.mp4',
    '/videos/07.mp4',
    '/videos/08.mp4',
    '/videos/09.mp4',
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
          {videos.map((src, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-duration="800"
              data-aos-delay={`${index * 100}`}
              className="relative flex justify-center"
            >
              <video 
                width="324" 
                height="576" 
                controls 
                autoPlay 
                muted 
                loop
                className="rounded-lg shadow-lg"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudiesPage;

