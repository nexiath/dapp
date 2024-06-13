import React from 'react';
import Header from './components/Header';
import Wallet from './components/Wallet';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Wallet />
    </main>
  </div>
);

export default App;
