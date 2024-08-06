import React from 'react';
import './Roadmap.css'; // Import the CSS file
const Roadmap = () => {
  return (
    <div className="roadmap">
      <h2>Roadmap</h2>
      <a href="https://www.figma.com/board/RLyfpjs6Xp0zJ1pf0ns0m9/Karakoram-Leopards?node-id=27-121&t=tCrrvyBuLMNPOEY4-4" target="_blank" rel="noopener noreferrer">
        <button className="roadmap-button">Go to Roadmap</button>
      </a>

      <div className="roadmap">
      <h2>Professional CV template</h2>
      <a href="https://flowcv.com/" target="_blank" rel="noopener noreferrer">
        <button className="roadmap-button">Get CV template</button>
      </a>
    </div>

    <div className="roadmap">
      <h2>dont know how to start your LEETCODE journey </h2>
      <a href="https://neetcode.io/" target="_blank" rel="noopener noreferrer">
        <button className="roadmap-button">Start by clicking here</button>
      </a>
    </div>

       <div className="roadmap">
      <h2>Semester-wise content ( course outline past papers etc organized by semester ) </h2>
      <a href="https://nupakistan-my.sharepoint.com/personal/i200696_nu_edu_pk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fi200696%5Fnu%5Fedu%5Fpk%2FDocuments%2F%21Others%2FPast%20Semesters&ga=1" target="_blank" rel="noopener noreferrer">
        <button className="roadmap-button">Click here</button>
      </a>
    </div>
    </div>
    
    
    
  );
};

export default Roadmap;
