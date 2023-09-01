import React from 'react';

const ImageLarge = ({ imageSrc}) => (
  <div className="image-large">
    <img src={process.env.PUBLIC_URL + imageSrc} alt="Image Principale" />
  </div>
);

export default ImageLarge;
