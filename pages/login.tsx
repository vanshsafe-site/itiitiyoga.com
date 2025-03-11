import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      router.push('/');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      setStatus({ type: 'error', message: 'Please agree to the Terms of Service to continue' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Email sent successfully!' });
        setEmail('');
        
        // Set authentication in localStorage and cookie
        localStorage.setItem('isAuthenticated', 'true');
        document.cookie = 'isAuthenticated=true; path=/; max-age=31536000'; // 1 year expiry
        
        // Redirect to home page after successful login
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong' });
      }
    } catch (_error) {
      setStatus({ type: 'error', message: 'Failed to send email' });
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Head>
        <title>Login - ITI ITI Yogashram</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h1>Welcome to ITI ITI Yogashram</h1>
          <p>Please enter your email to continue</p>

          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.termsGroup}>
              <label className={styles.termsLabel}>
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className={styles.checkbox}
                />
                <span>I agree to ITI ITI Yoga&apos;s Terms of Service</span>
              </label>
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            {status.message && (
              <div className={`${styles.message} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}
          </form>

          <div className={styles.termsSection}>
            <h2>Terms of Service</h2>
            <div className={styles.termsContent}>
              <h3>Data Collection and Usage Policy</h3>
              <p>At ITI ITI Yogashram, we are committed to transparency and ethical data practices. Our data collection and usage policy is guided by our mission to spread awareness of yoga and serve our community better.</p>
              
              <h3>Purpose of Data Collection</h3>
              <p>We collect data solely for the following purposes:</p>
              <ul>
                <li>To reach and connect with a broader audience interested in yoga</li>
                <li>To provide relevant content and services to our community</li>
                <li>To improve our ability to serve and support yoga practitioners</li>
                <li>To enhance the overall user experience on our platform</li>
              </ul>

              <h3>Our Commitment</h3>
              <p>We maintain the following commitments to our users:</p>
              <ul>
                <li>No exploitation of collected data</li>
                <li>No sharing of personal information with third parties</li>
                <li>Transparent communication about data usage</li>
                <li>Secure storage and protection of user information</li>
              </ul>

              <h3>Our Mission</h3>
              <p>Our primary goal is to spread awareness of yoga and its benefits worldwide. We believe in using technology responsibly to achieve this mission while respecting the privacy and rights of our users.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 