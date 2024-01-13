import React, { useState } from 'react';

const CurriedComponent = () => {
  // State to manage form input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  // Curried function to handle form input changes
  const handleInputChange = (fieldName) => (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
    <div>
      <label>
        First Name:
        <input
          type="text"
          value={formData.firstName}
          onChange={handleInputChange('firstName')}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          value={formData.lastName}
          onChange={handleInputChange('lastName')}
        />
      </label>
      <br />

      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
    </div>
  );
};

export default CurriedComponent;
