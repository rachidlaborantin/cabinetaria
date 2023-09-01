import React from 'react'
import ImageLarge from '../components/ImageLarge';
import BlocDesServices from '../components/BlocDesServices';
import Atouts from '../components/Atouts';
import {Link} from 'react-router-dom'


function PageDacceuil() {
    return (
        <>
        <div className="services-container">
          <div className="services-list">
            <BlocDesServices imageSrc="/assets/caricature_services.jpeg" serviceName="Ménage" />
            <BlocDesServices imageSrc="/assets/caricature_services.jpeg" serviceName="Beauté" />
          </div>
          <div className="services-list">
            <BlocDesServices imageSrc="/assets/caricature_services.jpeg" serviceName="Biens" />
            <BlocDesServices imageSrc="/assets/caricature_services.jpeg" serviceName="Autres" />
          </div>

          <Link to="/commande" className="order-button">Commander un service</Link>

        </div>
        <ImageLarge imageSrc="/assets/femme_menage.png"/>

        <div className="container-atouts">
          <Atouts titre="A chaque service, un prestataire idéal" imageSrc="/assets/femme_menage.jpeg"
                description="Nous avons un prestataire idéal capable de mener à bien votre service de façon efficace et avec soins" />

          <Atouts titre="Traitement en peu de temps" imageSrc="/assets/femme_menage.jpeg"
                description="Nos prestataires traitent les services en un temps record. Utile pour les demandes urgentes ou de dernières minutes." />
        </div>
        
        
        </>
    )
}

export default PageDacceuil;