import { FileText, UserCheck, Target, Play } from 'lucide-react';
import styles from './Process.module.css';

const Process = ()=> {
  const steps = [
    {
      step: "Step 1",
      title: "Form Submission",
      description: "Fill you basic information and our team will reach out to you to arrange a 1:1 session",
      icon: FileText,
      color: "bg-primary",
      position: "right"
    },
    {
      step: "Step 2", 
      title: "Get 1:1 Consultation",
      description: "You get to talk to Vikram 1:1 for 45mins",
      icon: UserCheck,
      color: "bg-purple",
      position: "left"
    },
    {
      step: "Step 3",
      title: "Personalized Suggestion", 
      description: "You get personalized suggestion based on your Age, Goals, Risk-appetite etc.",
      icon: Target,
      color: "bg-success",
      position: "right"
    },
    {
      step: "Step 4",
      title: "Start the Journey",
      description: "You can complete the KYC and begin investing",
      icon: Play,
      color: "bg-warning",
      position: "left"
    }
  ];

  return (
    <section className={`${styles.processSection} py-5`}>
      <div className="container">
        <div className="text-center mb-5">
          <div className={`${styles.processBadge} badge bg-success text-white mb-3`}>
            Our Process
          </div>
          <h2 className={`${styles.sectionTitle} display-4 fw-bold text-primary mb-4`}>
            Simple 4 Step Process
          </h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={`${styles.timelineContainer} position-relative`}>
          {/* Vertical Line */}
          <div className={`${styles.timelineLine} d-none d-lg-block`}></div>
          
          <div className={styles.stepsContainer}>
            {steps.map((item, index) => (
              <div key={index} className={`${styles.timelineStep} d-flex align-items-center mb-5 ${item.position === 'left' ? 'flex-lg-row-reverse' : ''}`}>
                {/* Content */}
                <div className={`flex-fill ${item.position === 'left' ? 'text-lg-end' : ''}`}>
                  <div className={`${styles.processCard} card border-0 shadow-sm`}>
                    <div className="card-body p-4">
                      <div className={`d-flex align-items-center gap-3 mb-3 ${item.position === 'left' ? 'justify-content-lg-end' : ''}`}>
                        <span className="text-primary fw-semibold small">{item.step}</span>
                        <h5 className={`${styles.stepTitle} card-title fw-bold text-dark mb-0`}>{item.title}</h5>
                      </div>
                      <p className="card-text text-muted lh-base">{item.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Icon Circle */}
                <div className={`${styles.stepCircle} position-relative flex-shrink-0 mx-4`}>
                  <div className={`${styles.circleIcon} ${item.color} rounded-circle d-flex align-items-center justify-content-center shadow-lg`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  {/* Step number badge */}
                  <div className={styles.stepNumber}>
                    <span className="fw-bold text-muted">{index + 1}</span>
                  </div>
                </div>
                
                {/* Spacer for alignment */}
                <div className="flex-fill d-none d-lg-block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process