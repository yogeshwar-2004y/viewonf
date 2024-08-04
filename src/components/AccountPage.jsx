import React, { useState } from 'react';
import './AcoountPage.css';

const AccountPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    country: 'USA',
    phoneNumber: '123-456-7890',
    gender: 'Male',
    location: 'New York',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the updated details (e.g., API call)
  };

  return (
    <div className="account-page">
      <h2>Account Details</h2>
      <div className="account-details">
        <label>
          Country:
          {isEditing ? (
            <input
              type="text"
              name="country"
              value={userDetails.country}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userDetails.country}</span>
          )}
        </label>
        <label>
          Phone Number:
          {isEditing ? (
            <input
              type="text"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userDetails.phoneNumber}</span>
          )}
        </label>
        <label>
          Gender:
          {isEditing ? (
            <input
              type="text"
              name="gender"
              value={userDetails.gender}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userDetails.gender}</span>
          )}
        </label>
        <label>
          Location:
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={userDetails.location}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userDetails.location}</span>
          )}
        </label>
      </div>
      {isEditing ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Update</button>
      )}
    </div>
  );
};

export default AccountPage;
