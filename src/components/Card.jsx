import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, index }) => {
  return (
    <div className="card">
      
      <h3>{title}</h3>
      <Link to={`/details/${index}`}><button>Show More</button></Link>
    </div>
  );
};

export default Card;
