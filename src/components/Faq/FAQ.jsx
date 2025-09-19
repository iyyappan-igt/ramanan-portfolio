'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "What makes Dr. Ramanan's approach different from other financial advisors?",
      answer: "As a doctor-turned-financial advisor, I bring a unique perspective that treats your financial health with the same care and precision as your physical health. I understand the importance of prevention, early intervention, and holistic wellness in both domains."
    },
    {
      question: "Do you charge any hidden fees?",
      answer: "No, we believe in complete transparency. All fees are disclosed upfront with no hidden charges or surprise costs."
    },
    {
      question: "What is your investment philosophy?",
      answer: "Our investment philosophy focuses on long-term wealth creation through diversified portfolios, risk management, and regular monitoring to ensure alignment with your financial goals."
    },
    {
      question: "How do you ensure personalized financial planning?",
      answer: "We conduct thorough assessments of your financial situation, risk tolerance, and life goals to create customized strategies that evolve with your changing needs."
    },
    {
      question: "What kind of support can I expect after investing?",
      answer: "You'll receive lifetime support including regular portfolio reviews, market updates, goal tracking, and access to our team for any financial queries or concerns."
    },
    {
      question: "Do you offer bilingual services?",
      answer: "Yes, we provide services in multiple languages to ensure clear communication and understanding of your financial strategies."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Get answers to common questions about our services and approach
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.questionButton}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openQuestion === index}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.chevron}>
                  {openQuestion === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              
              <div className={`${styles.answerContainer} ${openQuestion === index ? styles.open : ''}`}>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;