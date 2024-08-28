import React from 'react';
import Random from './Random';

const App = () => {
  return (
    <div>
      <h1>Random Example</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
};

export default App;
