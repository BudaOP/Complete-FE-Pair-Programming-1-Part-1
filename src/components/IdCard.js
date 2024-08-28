import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img
        src={picture}
        alt="profile"
        style={{ width: '100px', height: '100px', marginRight: '20px' }}
      />
      <div>
        <p>
          <strong>First name:</strong> {firstName}
        </p>
        <p>
          <strong>Last name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height}cm
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
