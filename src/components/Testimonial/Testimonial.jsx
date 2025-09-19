'use client';
import { useRef, useState } from 'react';
import styles from './styles.module.css';
import Slider from 'react-slick';

const testimonials = [
  {
    text: "I always thought financial planning was only for the rich — until I attended Dr. Ramanan’s session. He broke everything down into simple steps and explained in Tamil, which made me feel comfortable and confident. I started my first SIP last year and already feel in control of my money.",
    name: "Priya S, 28",
    role: "Software Engineer, Chennai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    text: "What impressed me most was that Dr. Ramanan looked at our entire life situation — our kids’ education, our loans, even health risks — before suggesting anything. He helped us build an emergency fund and choose the right term insurance. For the first time, I feel our family is truly secure.",
    name: "Arvind R, 38",
    role: "Senior Manager, Coimbatore",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    text: "The biggest difference is the follow-up. Most advisors disappear after selling something, but Dr. Ramanan checks in regularly and adjusts our plan as life changes. It feels like having a family doctor — but for my finances!",
    name: "Rahul V, 41",
    role: "Doctor, Bengaluru",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 4,
  },
  {
    text: "I had zero knowledge about mutual funds, but Dr. Ramanan patiently walked me through every detail. He uses top platforms like Wealthy.in and AssetPlus, so I have full control and transparency over my money. Now I invest every month without stress.",
    name: "Kavitha M, 32",
    role: "Teacher, Madurai",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
];

export default function Testimonial() {
     const sliderRef = useRef(null);
  const [active, setActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Users Say</h2>
        <p className={styles.subtitle}>
          Join thousands of satisfied traders who have transformed their trading experience with CryptoFlow.
        </p>

        <Slider {...settings} className={styles.sliderWrapper}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>

              <div className={styles.userInfo}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <div>
                  <h4 className={styles.userName}>{testimonial.name}</h4>
                  <p className={styles.userRole}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}