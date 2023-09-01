import React from 'react';

const PiedDePage = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>À Propos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius.</p>
      </div>
      <div className="footer-section">
        <h3>Nos Services</h3>
        <ul>
          <li>Aide à domicile 1</li>
          <li>Soins du corps</li>
        <li>Assistance de courses</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Témoignages</h3>
        <div className="testimonial">
          <p>"Excellents services ! Je suis très satisfait."</p>
          <p>- Client 1</p>
        </div>
        <div className="testimonial">
          <p>"Une équipe formidable. Ils font un excellent travail."</p>
          <p>- Client 2</p>
        </div>
      </div>
    </footer>
  );
};

export default PiedDePage;
