import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>Dr. Ramanan's Financial Vision</h1>
        </div>
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileNavActive : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('hero')} className={styles.navLink}>Home</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('about')} className={styles.navLink}>About</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('services')} className={styles.navLink}>Services</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('process')} className={styles.navLink}>Process</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('why-choose')} className={styles.navLink}>Why Choose Us</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('testimonials')} className={styles.navLink}>Testimonials</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Contact</button>
            </li>
            <li className={styles.navItem}>
              <button onClick={() => scrollToSection('faq')} className={styles.navLink}>FAQ</button>
            </li>
          </ul>
        </nav>
        <div 
          className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;