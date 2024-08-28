import React from 'react';

const Random = ({ min, max }) => {
  const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      Random value between {min} and {max} => {randomValue}
    </div>
  );
};

export default Random;
