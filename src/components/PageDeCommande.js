import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const PageDeCommande = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      history.apply('/commande');
    }
  }, [isLoading, history]);

  return (
    <div className="services-page">
      <h2>Choisissez le service que vous désirez</h2>
      <div className="categories">
        <div className="category">
          <img src="/assets/caricature_services.jpeg" alt="Catégorie 1" />
          <h3>Entretien des vitres</h3>
        </div>
        <div className="category">
          <img src="/assets/caricature_services.jpeg" alt="Catégorie 2" />
          <h3>Entretien du jardin</h3>
        </div>
        <div className="category">
          <img src="/assets/caricature_services.jpeg" alt="Catégorie 3" />
          <h3>Location d'ustensiles</h3>
        </div>
        <div className="category">
          <img src="/assets/caricature_services.jpeg" alt="Catégorie 4" />
          <h3>Assistance pour déménagement</h3>
        </div>
        <div className="category">
          <img src="/assets/caricature_services.jpeg" alt="Catégorie 5" />
        <h3>Service sur demande urgente</h3>
        </div>
        <div className="category">
          <img src="/assets/caricature_services.jpeg" alt="Catégorie 6" />
          <h3>Assistance pour les courses</h3>
        </div>
      </div>
      <div className="center-button">
        <Link to="/details" className="continue-button">Continuer</Link>
      </div>
    </div>
  );
};

export default PageDeCommande;
