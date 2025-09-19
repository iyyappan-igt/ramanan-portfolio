'use client';
import { useState } from 'react';
import styles from './Contact.module.css';
import { Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    areaOfInterest: '',
    financialGoals: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // API call or form handler
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Start Your Financial <br /> Transformation Today
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            No pressure. Just a conversation to explore your goals.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <input
              type="text"
              name="fullName"
              placeholder="Your Full Name"
              className={styles.input}
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={styles.input}
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className={styles.input}
              value={formData.phone}
              onChange={handleInputChange}
              required
            />

            <select
              name="areaOfInterest"
              className={styles.select}
              value={formData.areaOfInterest}
              onChange={handleInputChange}
              required
            >
              <option value="">Area of Interest</option>
              <option value="retirement-planning">Retirement Planning</option>
              <option value="investment-advisory">Investment Advisory</option>
              <option value="tax-planning">Tax Planning</option>
              <option value="insurance-planning">Insurance Planning</option>
              <option value="wealth-management">Wealth Management</option>
              <option value="financial-planning">Financial Planning</option>
            </select>

            <textarea
              name="financialGoals"
              placeholder="Tell us about your financial goals (Optional)"
              className={`${styles.textarea} ${styles.fullWidth}`}
              rows="4"
              value={formData.financialGoals}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
              <Phone size={20}  />
              Schedule Free Call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
