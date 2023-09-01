import React from 'react';

const Entete = ({ logoSrc }) => (
  <div className="bloc-entete">
    <div className="container-logo-nom">
        <img src={process.env.PUBLIC_URL + logoSrc} alt="Logo" />
        <h2>SERDO</h2>
    </div>
    
    <div className="container-boutons">
      <div className="boutons">
        <a href="#">Créer un compte</a>
        <a href="#">Se connecter</a>
      </div>
    </div>
  </div>
);

export default Entete;
