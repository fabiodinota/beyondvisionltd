import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
      <footer class="bg-slate-50 dark:bg-slate-950" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">Footer</h2>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div class="flex items-center mb-4">
            <img src="/images/Logo.svg" alt="Company Logo" class="h-8 w-auto" />
          </div>
          <hr style="border-top: 1px solid white; margin-bottom: 2rem;" />
          <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
            <div class="grid grid-cols-2 gap-8 xl:col-span-4">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-xl font-bold text-text tracking-wider uppercase">About</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li><a href="/" class="text-base text-text hover:text-text"> Home </a></li>
                    <li><a href="/about-us" class="text-base text-text hover:text-text"> About Us </a></li>
                    <li><a href="/contact" class="text-base text-text hover:text-text"> Contact </a></li>
                  </ul>
                </div>
                <div class="mt-12 md:mt-0">
                  <h3 class="text-xl font-bold text-text tracking-wider uppercase">Company</h3>
                  <ul role="list" class="mt-4 space-y-4">
                    <li><a href="/#services" class="text-base text-text hover:text-text"> What We Do </a></li>
                    <li><a href="#" class="text-base text-text hover:text-text"> Case Studies </a></li>
                    <li><a href="/our-talents" class="text-base text-text hover:text-text"> Our Talents </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-right">
              <h3 class="text-3xl font-bold tracking-wider uppercase">
                <span style="color: #FFF36D;">Brand?</span> 
                <span style="color: #FFFFFF;">Creator?</span>
              </h3>
              <a href="/contact-us" style="background-color: #FFF36D; color: #000; padding: 0.75rem 1.5rem; border: none; border-radius: 3rem; font-size: 1rem; margin-top: 1rem; text-decoration: none; display: inline-block;">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    ` }} />
  );
};

export default Footer;
