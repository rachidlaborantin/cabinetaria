import React from 'react';

const Atouts = ({ imageSrc, titre, description }) => (
  <div className="atout-block">
    <h2>{titre}</h2>
    <img src={process.env.PUBLIC_URL + imageSrc} alt={titre} />
    <p>{description}</p>
  </div>
);

export default 	Atouts;
