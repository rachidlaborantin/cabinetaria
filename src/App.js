import React from 'react';
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Entete from './Entete';
import BlocDesServices from './components/BlocDesServices';
import ImageLarge from './components/ImageLarge';
import Atouts from './components/Atouts';
import PageDacceuil from './pages/PageDacceuil';
import PageDeCommande from './components/PageDeCommande';
import DetailsCommande from './pages/DetailsCommande';
import PiedDePage from './pages/PiedDePage';



function App() {
  return (   <div className="App">
      <header>
        <Entete logoSrc="/assets/logo.jpg"/>
      </header>
      <main>
        
        <Routes>
          <Route path="/" element={<PageDacceuil />} />
          <Route path="/commande" element={<PageDeCommande />} />
          <Route path="/details" element={<DetailsCommande />} />
        </Routes>

      </main>

      <footer>
        <PiedDePage />
      </footer>
    </div>
  );
}

export default App;
