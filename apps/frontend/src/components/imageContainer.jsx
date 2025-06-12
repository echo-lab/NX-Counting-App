import React from 'react';
import trainData from  "../data/trainData.js";
import '../styles/imageContainer.css';

// Image container component to display image and message
function imageContainer({currentpage}) {
  return (
    <div>
      {/* Display image and message based on current page */}
      <img src={trainData.pages[currentpage].img} alt="image101" className={trainData.pages[currentpage].className}></img>
      <div className="card">
            <div className="card-body">
            {trainData.pages[currentpage].message}
            </div>
      </div>
    </div>
  )
}

// Export the imageContainer component
export default imageContainer
