import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
          <footer class="bg-slate-50 dark:bg-slate-950" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <hr class="border-t border-white mb-8 dark:border-white" />
              <div class="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
                <div class="grid grid-cols-2 gap-8 xl:col-span-4">
                  <div class="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 class="text-sm font-bold text-text tracking-wider uppercase">About</h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li>
                          <a href="#" class="text-base text-text hover:text-text"> Home </a>
                        </li>
                        <li>
                          <a href="#" class="text-base text-text hover:text-text"> About Us </a>
                        </li>
                        <li>
                          <a href="#" class="text-base text-text hover:text-text"> Contact </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-12 md:mt-0">
                      <h3 class="text-sm font-bold text-text tracking-wider uppercase">Company</h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li>
                          <a href="#" class="text-base text-text hover:text-text"> What We Do </a>
                        </li>
                        <li>
                          <a href="#" class="text-base text-text hover:text-text"> Case Studies </a>
                        </li>
                        <li>
                          <a href="#" class="text-base text-text hover:text-text"> Our Talents </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </footer>
        ` }} />
  );
};

export default Footer;
