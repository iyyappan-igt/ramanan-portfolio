import { Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Dr. Ramanan's Financial Vision</h3>
            <p className={styles.footerDescription}>
              Providing expert financial guidance and solutions to help you achieve your financial goals.
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:contact@drfinancialvision.com" className={styles.contactLink}>
                <Mail size={18} />
                <span>contact@drfinancialvision.com</span>
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Phone size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            Copyright © 2025 Dr. Ramanan's Financial Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;