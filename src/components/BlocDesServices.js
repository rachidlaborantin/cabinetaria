import React from 'react';

const BlocDesServices = ({ imageSrc, serviceName }) => (
  <div className="service-block">
    <img src={process.env.PUBLIC_URL + imageSrc} alt={serviceName} />
    <h2>{serviceName}</h2>
  </div>
  
);

export default BlocDesServices;
