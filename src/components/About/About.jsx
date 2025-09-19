import { GraduationCap, CheckCircle, BarChart3, Video, Sprout } from 'lucide-react';
import styles from './About.module.css';

const About = ()=> {
  const credentials = [
    { icon: GraduationCap, text: "Madras Medical College", color: "text-primary" },
    { icon: CheckCircle, text: "SEBI-Guided Advisor", color: "text-success" },
    { icon: BarChart3, text: "AMFI-Registered", color: "text-purple" },
    { icon: Video, text: "Co-Founder, Infinite Pictures", color: "text-danger" },
  ];

  return (
    <section className={`${styles.aboutSection} py-5`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className={styles.imageContainer}>
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
                alt="Dr. Ramanan"
                className={`${styles.aboutImage} img-fluid rounded-4 shadow-lg`}
              />
              <div className={styles.floatingBadge}>
                <div className="bg-warning text-dark p-3 rounded-circle">
                  <Sprout size={24} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className={styles.aboutContent}>
              <h2 className={`${styles.aboutTitle} display-4 fw-bold text-primary mb-4`}>
                Meet Dr. Ramanan
              </h2>
              <div className={styles.divider}></div>
              <p className={`${styles.aboutText} fs-5 text-muted mb-5 lh-base`}>
                A unique blend of medical expertise and financial wisdom. Dr. Ramanan brings the precision of healthcare to wealth management, understanding that financial health is as crucial as physical health. With years of experience helping families achieve both wellness and prosperity.
              </p>
              
              <div className="row g-3 mb-5">
                {credentials.map((item, index) => (
                  <div key={index} className="col-sm-6">
                    <div className={`${styles.credentialCard} card h-100 border-0 shadow-sm`}>
                      <div className="card-body p-3">
                        <div className="d-flex align-items-center">
                          <div className={`${styles.iconContainer} me-3`}>
                            <item.icon className={item.color} size={20} />
                          </div>
                          <span className="fw-medium text-dark">{item.text}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`${styles.specialtyCard} bg-light p-4 rounded-3 border-start border-warning border-4`}>
                <div className="d-flex align-items-center">
                  <Sprout className="text-success me-3" size={24} />
                  <span className="fs-5 fw-medium text-dark">Evolving Farmer & Holistic Life Advocate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;