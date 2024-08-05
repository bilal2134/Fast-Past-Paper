// Details.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import materials from '../data/materials.json';
import './Details.css';

const Details = () => {
  const { index } = useParams();
  const materialKey = Object.keys(materials)[index];
  const material = materials[materialKey];

  return (
    <div className="details pixel-container">
      <h2 className="pixel-text">{materialKey}</h2>
      {Object.keys(material).map((sectionTitle, idx) => (
        <div key={idx} className="section pixel-border">
          <h3 className="pixel-text">{sectionTitle}</h3>
          {material[sectionTitle].length > 0 ? (
            <ul className="pixel-list">
              {material[sectionTitle].map((item, i) => (
                <li key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="pixel-link">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="pixel-text">No materials available</p>
          )}
        </div>
      ))}
      <Link to="/">
        <button className="pixel-button back-button">
          <span className="button-text">Back to Home</span>
        </button>
      </Link>
    </div>
  );
};

export default Details;

