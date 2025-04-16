import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skillCategory: '',
    portfolioLink: ''
  });

  const [errors, setErrors] = useState({});

  const skillCategories = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Graphic Design',
    'Content Writing',
    'Digital Marketing',
    'Video Editing',
    'Photography',
    'Music Production',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Skill category validation
    if (!formData.skillCategory) {
      newErrors.skillCategory = 'Please select a skill category';
    }

    // Portfolio link validation
    if (formData.portfolioLink.trim() && !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/.test(formData.portfolioLink)) {
      newErrors.portfolioLink = 'Please enter a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);

      // Navigate to thank you page
      navigate('/thank-you', { state: { name: formData.name } });
    }
  };

  return (
    <div className="signup-form-container">
      <h2>Join GigFloww as a Gig Worker</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name <span className="required">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="skillCategory">Skill Category <span className="required">*</span></label>
          <select
            id="skillCategory"
            name="skillCategory"
            value={formData.skillCategory}
            onChange={handleChange}
            className={errors.skillCategory ? 'error' : ''}
          >
            <option value="">Select a skill category</option>
            {skillCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          {errors.skillCategory && <span className="error-message">{errors.skillCategory}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="portfolioLink">Portfolio Link</label>
          <input
            type="url"
            id="portfolioLink"
            name="portfolioLink"
            value={formData.portfolioLink}
            onChange={handleChange}
            placeholder="https://your-portfolio.com"
            className={errors.portfolioLink ? 'error' : ''}
          />
          {errors.portfolioLink && <span className="error-message">{errors.portfolioLink}</span>}
        </div>

        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
