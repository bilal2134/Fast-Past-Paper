// src/components/YouTube.js
import React, { useState } from 'react';
import materials from '../data/material2.json';

const YouTube = () => {
  
  const [showMore, setShowMore] = useState(null);
  const email = 'bilalshakeel9@gmail.com';
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  };


  const toggleShowMore = (index) => {
    setShowMore(showMore === index ? null : index);
  };

  return (
    <div className="youtube">
      <h2>YouTube Links</h2>
      <div>
      <p>I have added very few youtube links as of now will add more as I get more time. Moreover, if you think some helpful links or youtube channel should be mentioned, feel free to email me at:</p>
      <button onClick={copyToClipboard}>Copy Email</button>
    </div>
      {Object.keys(materials).map((key, index) => (
        <div key={index} className="card">
          <h3>{key}</h3>
         
          <button onClick={() => toggleShowMore(index)}>
            {showMore === index ? 'Show Less' : 'Show More'}
          </button>
          {showMore === index && (
            <div className="card-content">
              {Object.keys(materials[key]).map((sectionTitle, idx) => (
                <div key={idx} className="section">
                  <h4>{sectionTitle}</h4>
                  {materials[key][sectionTitle].length > 0 ? (
                    materials[key][sectionTitle].map((item, i) => (
                      <p key={i}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>
                      </p>
                    ))
                  ) : (
                    <p>No materials available</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default YouTube;
