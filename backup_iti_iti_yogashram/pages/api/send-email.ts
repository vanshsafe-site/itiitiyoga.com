import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Replace these with your email configuration
const YOUR_EMAIL = 'showdownist123@gmail.com';
const YOUR_EMAIL_PASSWORD = 'xelp wiue cpzt noni';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: YOUR_EMAIL,
        pass: YOUR_EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: YOUR_EMAIL,
      to: YOUR_EMAIL,
      subject: 'New User Registration - ITI ITI Yogashram',
      text: `New user registered with email: ${email}`,
      html: `
        <h2>New User Registration</h2>
        <p>A new user has registered on ITI ITI Yogashram website.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
} 