'use client';
import styles from './Choose.module.css';
import { DynamicIcon } from "lucide-react/dynamic";

const Choose = () => {
  const features = [
    { icon: "heart", title: "Doctor who understands health + wealth", color: "#FF6500" },
    { icon: "dollar-sign", title: "No hidden charges", color: "#FF6500" },
    { icon: "users", title: "Lifetime support", color: "#FF6500" },
    { icon: "trending-up", title: "Personalized plans, not product-pushing", color: "#FF6500" },
    { icon: "trending-up", title: "Combined AUM ₹10,000 Cr", color: "#FF6500" },
    { icon: "clock", title: "SIP Book ₹10+ Lakhs", color: "#FF6500" },
    { icon: "heart", title: "1L+ patients helped", color: "#FF6500" },
    { icon: "leaf", title: "Preventive lifestyle + portfolio growth", color: "#FF6500" },
  ];

  return (
    <section className={styles.chooseSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why Choose Us?</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Experience the difference of working with a healthcare professional turned financial expert
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div
                className={styles.iconWrapper}
                style={{ backgroundColor: feature.color }}
              >
                <DynamicIcon name={feature.icon} size={30} color="#ffffff" />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
