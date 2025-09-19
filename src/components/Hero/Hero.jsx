import { Phone, Video, TrendingUp, PieChart, BarChart3, DollarSign, Activity } from 'lucide-react';
import styles from './Hero.module.css';

const Hero =() => {
  return (
    <section className={`${styles.heroSection} position-relative overflow-hidden`}>
      <div className={styles.heroGradient}></div>
      
      {/* Floating Financial Icons */}
      <div className="position-absolute w-100 h-100 overflow-hidden">
        <div className={`${styles.floatingIcon} ${styles.icon1}`}>
          <TrendingUp className="text-warning" size={32} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon2}`}>
          <PieChart className="text-success" size={24} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon3}`}>
          <BarChart3 className="text-info" size={40} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon4}`}>
          <DollarSign className="text-warning" size={28} />
        </div>
        <div className={`${styles.floatingIcon} ${styles.icon5}`}>
          <Activity className="text-success" size={32} />
        </div>
      </div>
      
      <div className="container position-relative">
        <div className="row align-items-center min-vh-100 py-5">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className={styles.heroContent}>
              <h1 className={`${styles.heroTitle} display-3 fw-bold text-white mb-4`}>
                Need Help In Choosing The{' '}
                <span className={styles.highlightText}>
                  Right Financial
                </span>
                {' '}Solutions?
              </h1>
              <p className={`${styles.heroSubtitle} fs-4 text-white-50 mb-5 lh-base`}>
                We will assist you in identifying the best financial solutions based upon your financial goals, risk-appetite, needs and other circumstances.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className={`${styles.btnPrimary} btn btn-lg px-4 py-3`}>
                  <Phone className="me-2" size={20} />
                  Get Expert Advice Now
                </button>
                <button className={`${styles.btnOutline} btn btn-lg px-4 py-3`}>
                  <Video className="me-2" size={20} />
                  Watch Intro Video
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className={styles.heroImageContainer}>
              <img
                src="\assets\Home\profile.jpg"
                alt="Dr. Ramanan - Professional Financial Advisor"
                className={`${styles.heroImage} img-fluid rounded-4 shadow-lg`}
              />
              
              {/* Floating Elements around the image */}
              <div className={`${styles.floatingBadge} ${styles.badge1}`}>
                <div className="bg-warning text-dark p-3 rounded-circle">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className={`${styles.floatingBadge} ${styles.badge2}`}>
                <div className="bg-success text-white p-3 rounded-circle">
                  <BarChart3 size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Section */}
        <div className={styles.statsContainer}>
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className={`${styles.statNumber} display-4 fw-bold text-warning`}>500+</div>
              <div className="text-white-50 fw-medium">Happy Clients</div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className={`${styles.statNumber} display-4 fw-bold text-warning`}>15+</div>
              <div className="text-white-50 fw-medium">Years of Experience</div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.statNumber} display-4 fw-bold text-warning`}>₹10Cr+</div>
              <div className="text-white-50 fw-medium">Assets Under Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero