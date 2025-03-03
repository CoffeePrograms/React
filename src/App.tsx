import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AppRouter from './AppRouter';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
