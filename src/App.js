import React from 'react';
import Greetings from './components/Greetings';

const App = () => {
  return (
    <div>
      <h1>Greetings Example</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
};

export default App;
