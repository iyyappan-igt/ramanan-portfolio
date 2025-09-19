import { TrendingUp, Shield, Compass, BookOpen } from 'lucide-react';
import styles from './Services.module.css';

const Services =() => {
  const services = [
    {
      icon: TrendingUp,
      title: "Investments",
      description: "Strategic portfolio management with proven results",
      highlight: "₹3 Cr AUM, partner with Wealthy.in & AssetPlus",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Comprehensive protection for you and your family",
      highlight: "Powered by PolicyBazaar & India Post",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Compass,
      title: "Holistic Financial Planning",
      description: "Complete financial roadmap for your future",
      highlight: "Emergency funds, debt planning, CA tie-ups",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: BookOpen,
      title: "Financial Literacy & Coaching",
      description: "Education and guidance for informed decisions",
      highlight: "Bilingual sessions, 1:1 guidance",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className={`${styles.servicesSection} py-5`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className={`${styles.sectionTitle} display-4 fw-bold text-primary mb-4`}>
            Our Core Services
          </h2>
          <div className={styles.divider}></div>
          <p className="fs-5 text-muted mx-auto" style={{maxWidth: '600px'}}>
            Comprehensive financial solutions tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`${styles.serviceCard} card h-100 border-0 shadow-sm`}>
                <div className={`${styles.serviceHeader} ${service.gradient}`}></div>
                <div className="card-body text-center p-4">
                  <div className={`${styles.serviceIcon} ${service.gradient} mx-auto mb-4`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h5 className={`${styles.serviceTitle} card-title fw-bold text-primary mb-3`}>
                    {service.title}
                  </h5>
                  <p className="card-text text-muted mb-4">
                    {service.description}
                  </p>
                  <span className={`${styles.serviceBadge} badge bg-warning text-dark`}>
                    {service.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services