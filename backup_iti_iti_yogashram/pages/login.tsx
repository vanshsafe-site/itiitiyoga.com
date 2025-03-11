import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is already authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      router.push('/');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    } catch (error) {
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
        </div>
      </div>
    </>
  );
} 