import React from 'react';
import logo from '/cat.svg';
import ApiComponent from './components/ApiComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo" />
      <ApiComponent />
    </div>
  );
};

export default App;
