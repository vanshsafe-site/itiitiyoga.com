import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    document.cookie = 'isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    router.push('/login');
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>ITI ITI Yogashram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        {/* Header & Navigation */}
        <header className={styles.header}>
          <div className={styles.container}>
            <nav className={styles.navbar}>
              <a href="#" className={styles.logo}>ITI ITI YOGASHRAM</a>
              <div className={styles.navLinks}>
                <button onClick={handleLogout} className={styles.loginButton}>Logout</button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <h1>
                  TRANSFORM YOUR LIFE – PHYSICALLY, MENTALLY & SPIRITUALLY WITH ITI ITI YOGASHRAM.
                </h1>
                <p>
                  Join our yoga studio to find balance. We offer professional practices that will lead you into the world of tranquility, help you discover your inner peace. Relax to the core and reach physical strength.
                </p>
                <button className={styles.btn}>Get Started</button>
              </div>
              <div className={styles.heroImage}>
                <div className={styles.lotusBg}>
                  <svg viewBox="0 0 200 200">
                    <path d="M100,0 C130.9,0 155.7,28.6 155.7,63.9 C155.7,99.1 130.9,127.7 100,127.7 C69.1,127.7 44.3,99.1 44.3,63.9 C44.3,28.6 69.1,0 100,0 Z"></path>
                  </svg>
                </div>
                <Image
                  src="/yoga-pose.png"
                  alt="Yoga Pose"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <div className={`${styles.sectionTitle} ${styles.textCenter}`}>
              <h2>DIVE IN THE WORLD OF HEALTH, HAPPINESS & FITNESS</h2>
              <p>
                Join our class to enhance your quality of life with our well-crafted yoga sessions. Experience better health, fitness and peace of mind with our personalized approach to yoga practice and meditation.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src="/asanas.png"
                    alt="Feature Icon"
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className={styles.featureTitle}>Traditional Yoga</h3>
                <p className={styles.featureText}>
                  Our expert yoga teachers can help you master traditional Hatha, Vinyasa and Ashtanga yoga practices.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src="/yoga-slow.png"
                    alt="Feature Icon"
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className={styles.featureTitle}>Modern Yoga Combinations</h3>
                <p className={styles.featureText}>
                  Try our modern variations of Power, Yin and Restorative Yoga to get enhanced restoration and rejuvenation.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src="/hatha-yoga.png"
                    alt="Feature Icon"
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className={styles.featureTitle}>Yoga Therapy</h3>
                <p className={styles.featureText}>
                  Our Yoga Therapy can be combined with traditional practices to deliver profound healing for specific conditions.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src="/yoga-slow.png"
                    alt="Feature Icon"
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className={styles.featureTitle}>Meditation</h3>
                <p className={styles.featureText}>
                  Meditation practice to integrate modern life with the ancient art of mindfulness, concentration and self-realization.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src="/intuitive-yoga.png"
                    alt="Feature Icon"
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className={styles.featureTitle}>Pranayama</h3>
                <p className={styles.featureText}>
                  Breathing techniques that will help you control your breath and enhance your vital energy, improving both mind and body.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Image
                    src="/kundalini-yoga-1-1.png"
                    alt="Feature Icon"
                    width={75}
                    height={75}
                  />
                </div>
                <h3 className={styles.featureTitle}>Yoga Retreats</h3>
                <p className={styles.featureText}>
                  We organize yoga retreats to provide an immersive environment for deeper practice and greater transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className={styles.container}>
            <div className={`${styles.sectionTitle} ${styles.textCenter}`}>
              <h2>NUMBERS SPEAK</h2>
              <p>Below you can see the impact our studio has made over the years. Numbers reflect our dedication to yoga practice.</p>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statTitle}>Years of Experience</div>
                <p className={styles.statText}>
                  Serving clients and building community through dedicated practice, compassion and authentic guidance that transforms lives.
                </p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>5000+</div>
                <div className={styles.statTitle}>Happy Clients</div>
                <p className={styles.statText}>
                  Our clients have found their way back to harmony and well-being through our guidance, support and care. Join them today!
                </p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>12</div>
                <div className={styles.statTitle}>Programs & Training</div>
                <p className={styles.statText}>
                  Experience various offerings that cater to different levels and goals, from beginners to advanced practitioners seeking deeper insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefits}>
          <div className={styles.container}>
            <div className={styles.benefitsContent}>
              <div className={styles.benefitsImage}>
                <Image
                  src="/benefits of yoga.jpeg"
                  alt="Yoga Benefits"
                  width={600}
                  height={400}
                />
              </div>
              <div className={styles.benefitsText}>
                <h3>BENEFITS OF YOGA</h3>
                <p>
                  Yoga is a powerful system that enhances physical and mental health. Regular practice of yoga keeps your body fit, strong, and healthy. It helps in complete detoxification of the body.
                </p>
                <p>
                  Regular practice enhances stamina, flexibility and brings positivity in your life. It improves the respiratory, cardiovascular, digestive and endocrine systems. It brings emotional stability and clarity of mind.
                </p>
                <p>
                  At Yogashram we offer the best yoga classes which are specially designed to meet your requirements and needs after proper consultation. Our main aim is to maintain your overall health and well-being.
                </p>
                <button className={styles.btn}>Read More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className={styles.gallery}>
          <div className={styles.container}>
            <div className={`${styles.sectionTitle} ${styles.textCenter}`}>
              <h2>YOGA GALLERY</h2>
              <p>Glimpses of our yoga sessions, retreats and community events.</p>
            </div>
            <div className={styles.galleryGrid}>
              {[...Array(12)].map((_, index) => (
                <div 
                  key={index} 
                  className={styles.galleryItem}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={`/assets/img${index + 1}.jpg`}
                    alt={`Gallery Image ${index + 1}`}
                    width={300}
                    height={300}
                    layout="responsive"
                    objectFit="cover"
                    className={styles.galleryImage}
                  />
                  <div className={styles.galleryCaption}>
                    {getGalleryCaption(index)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Modal */}
          {selectedImage !== null && (
            <div className={styles.modal} onClick={closeModal}>
              <div className={styles.modalContent}>
                <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                <Image
                  src={`/assets/img${selectedImage + 1}.jpg`}
                  alt={`Gallery Image ${selectedImage + 1}`}
                  width={1200}
                  height={800}
                  layout="responsive"
                  objectFit="contain"
                />
                <div className={styles.modalCaption}>
                  {getGalleryCaption(selectedImage)}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={`${styles.sectionTitle} ${styles.textCenter}`}>
              <h2>WHAT MY CLIENTS SAY ABOUT ME</h2>
              <p>Hear from those who have experienced transformation through our yoga practice.</p>
            </div>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Nishanth Sir is an excellent yoga teacher! He is calm, well-disciplined, and truly understands each student's needs. His teaching style is slow and steady, ensuring that everyone can follow along comfortably. His yoga teachings have been extremely helpful, and I highly recommend him to anyone looking for a dedicated and professional instructor!"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <Image
                      src="/review1.jpeg"
                      alt="Author"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Vansh Garg.</h4>
                    <p>Regular Student</p>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Exceptional experience! This yoga class is not like other yoga classes that only focuses on you physical health but this one also focuses on your mental health. Since the day I started doing yoga I've started feeling stress free and happy. Thank you so much sir for you expert guidance and ever smiling yoga."
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <Image
                      src="/reviw2.jpeg"
                      alt="Author"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Ayushi</h4>
                    <p>Regular Student</p>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Thankyou so much for this months with yoga sessions, my life going better with my health condition, thankyou Nishant for the patient, support and learn about my inner peaceful, my online classes from Mexico help me a lot, and change totally my life"
                </p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <Image
                      src="/reviw3.png"
                      alt="Author"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4>Lveth</h4>
                    <p>Mexico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <h2>JOIN HUNDREDS OF HEALTHY PEOPLE</h2>
            <button className={styles.btn}>Join Now</button>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <div className={styles.footerColumn}>
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Classes</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>Copyright © 2025 ITI ITI Yogashram </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

// Helper function for gallery captions
function getGalleryCaption(index: number): string {
  const captions = [
    "Group Yoga in Morning",
    "Dhanurasana (Bow Pose)",
    "Group Yoga performed by the Yoginis and Yogis during MahaKumbh 2025 at the Arail Ghat.",
    "Nishant Sir guiding and teaching young minds at an NGO, shaping their future with knowledge and care.",
    "Group Yoga lead by Nishant Sir",
    "Kids from an NGO embrace the art of yoga, paving the way for a healthier and more fulfilling life.",
    "Nishant Sir teaching yoga at the Sangam Area.",
    "Tittibhasana (Firefly Pose).",
    "Baddha Konasana (Butterfly Pose).",
    "Birthday Celebration of Nishant Sir done by Yogis and Yoginis.",
    "Our Offline Yoga Studio at Gol Park, Meerapur, Prayagraj.",
    "Nishant Sir in deep meditative state."
  ];
  return captions[index];
} 