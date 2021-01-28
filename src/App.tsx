import React from 'react';
// styles
import './styles/app.scss';

// components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header name="Blossom"/>
      <Footer/>

    </div>
  );
}

export default App;
