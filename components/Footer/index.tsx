import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksSection}>
        <div className={styles.column}>
          <h4>About</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">What we do</a></li>
            <li><a href="#">Case studies</a></li>
            <li><a href="#">Our talents</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.contactSection}>
        <p><span className={styles.highlight}>Brand? Creator?</span></p>
        <p><span className={styles.highlight}>Let's Talk.</span></p>
        <button className={styles.contactButton}>Contact us</button>
      </div>
    </footer>
  );
};

export default Footer;
