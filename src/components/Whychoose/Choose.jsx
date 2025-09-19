'use client';
import styles from './Choose.module.css';
import { Heart, DollarSign, Users, TrendingUp, Clock, Leaf } from 'lucide-react';

const Choose = () => {
  const features = [
    {
      icon: Heart,
      title: 'Doctor who understands health + wealth',
      color: '#ef4444'
    },
    {
      icon: DollarSign,
      title: 'No hidden charges',
      color: '#22c55e'
    },
    {
      icon: Users,
      title: 'Lifetime support',
      color: '#3b82f6'
    },
    {
      icon: TrendingUp,
      title: 'Personalized plans, not product-pushing',
      color: '#8b5cf6'
    },
    {
      icon: TrendingUp,
      title: 'Combined AUM ₹10,000 Cr',
      color: '#f59e0b'
    },
    {
      icon: Clock,
      title: 'SIP Book ₹10+ Lakhs',
      color: '#6366f1'
    },
    {
      icon: Heart,
      title: '1L+ patients helped',
      color: '#ec4899'
    },
    {
      icon: Leaf,
      title: 'Preventive lifestyle + portfolio growth',
      color: '#10b981'
    }
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
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className={styles.featureCard}>
                <div 
                  className={styles.iconWrapper}
                  style={{ color: feature.color }}
                >
                  <IconComponent size={24} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Choose;