import React from 'react';
import Card from './Card';

const Section = ({ data }) => {
  return (
    <div className="section">
      {Object.keys(data).map((key, index) => (
        <Card key={index} title={key} index={index} />
      ))}
    </div>
  );
};

export default Section;
