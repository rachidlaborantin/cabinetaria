import React from 'react';
import Atouts from '../components/Atouts';

const DetailsCommande = () => {
  return (
    <div className="blocCommande">
    <div className="nouvelle-commande-page">
      <h2>Veuillez nous fournir quelques infos pour répondre à votre demande</h2>
      <form className="commande-form">
        <label htmlFor="heure">Heures de service désirées :</label>
        <input type="text" id="heure" name="heure" />

        <label htmlFor="prestataires">Nombre de prestataires requis :</label>
        <input type="number" id="prestataires" name="prestataires" />

        <label htmlFor="jour">Jour du service :</label>
        <input type="date" id="jour" name="jour" />

        <label htmlFor="heure-service">Heure du service :</label>
        <input type="time" id="heure-service" name="heure-service" />

        <label htmlFor="telephone">Numéro de téléphone :</label>
        <input type="tel" id="telephone" name="telephone" />

        <label htmlFor="adresse">Adresse de la maison :</label>
        <textarea id="adresse" name="adresse"></textarea>

        <label htmlFor="email">Adresse email :</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="details">Détails supplémentaires :</label>
        <textarea id="details" name="details"></textarea>

        <button className="submit-button">Passer la Commande</button>
      </form>

      
    </div>
      <div className="container-atouts">
                <Atouts titre="A chaque service, un prestataire idéal" imageSrc="/assets/femme_menage.jpeg"
                      description="Nous avons un prestataire idéal capable de mener à bien votre service de façon efficace et avec soins" />

                <Atouts titre="Traitement en peu de temps" imageSrc="/assets/femme_menage.jpeg"
                      description="Nos prestataires traitent les services en un temps record. Utile pour les demandes urgentes ou de dernières minutes." />
              </div>
    </div>
    
  );
};

export default DetailsCommande;
