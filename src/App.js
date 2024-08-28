import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

const App = () => {
  return (
    <div>
      <h1>React Components Demo</h1>

      {/* IdCard Component Examples */}
      <h2>IdCard Examples</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* Greetings Component Examples */}
      <h2>Greetings Examples</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* Random Component Examples */}
      <h2>Random Number Examples</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
};

export default App;
