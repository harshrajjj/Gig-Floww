import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Gig Worker' };

  return (
    <div className="thank-you-container">
      <h2>Thank You for Signing Up!</h2>
      <p>Hi {name}, your application to join GigFloww has been received.</p>
      <p>We'll review your information and get back to you soon.</p>
      <p>In the meantime, you can explore more about our platform and available opportunities.</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default ThankYou;
