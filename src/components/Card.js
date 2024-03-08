import React from 'react';
import '../styles/Card.css';

function Card({ imageSrc, altText, title, description }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className='image'>
          <img src={imageSrc} alt={altText}/>
        </div>
        <div className="service-description">
          <h3>{title}</h3>
          <p>{description}</p>
          <h4>Learn more</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;