import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources">
      <h2>Timetable for Islamabad Campus</h2>
      <a
        href="https://example.com/timetable"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-link"
      >
        Timetable Link
      </a>
      
      <h2>Semester Plan for Islamabad Campus</h2>
      <a
        href="http://slate.nu.edu.pk/access/content/attachment/ISBCS/Announcements/90e7d0be-0660-46ae-8684-cd1b13f19554/Academic%20Plan%20Fall%202024.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-link"
      >
        Semester Plan Link
      </a>
      {/* if more links need to be added */}
      <h2>More Links</h2>
      {/* <a
        href="https://example.com/more-link1"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-link"
      >
        More Link 1
      </a>
      <a
        href="https://example.com/more-link2"
        target="_blank"
        rel="noopener noreferrer"
        className="resource-link"
      >
        More Link 2
      </a> */}
    </div>
  );
};

export default Resources;
