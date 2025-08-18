import React, { useEffect, useState } from 'react';
import '../styles/animation.css';
import CircleDraw from "./circleDraw"; 

// Animation component to handle animation logic
function Animation({ onAnimationFinish }) {
  const [percent, setPercent] = useState(0); // track percentage of animation
  const [animationFinished, setAnimationFinished] = useState(false); // track if animation is finished

  // useEffect hook to handle animation progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < 100) {
        setPercent((prevPercent) => prevPercent + 4); // increment precent
      } else {
        clearInterval(interval); // clear interval when animation is finished
        setTimeout(() => {
          setAnimationFinished(true);
        }, 1000);
      }
    }, 100); // update progess every 100ms
    // Cleanup function to clear the interval
    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  // update progress ellipse based on percentage
  useEffect(() => {
    const progressEllipse = document.querySelector('.progress'); // select element
    const rx = parseFloat(progressEllipse.getAttribute('rx')); 
    const ry = parseFloat(progressEllipse.getAttribute('ry'));
    const perimeter = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry))); // calculate
    progressEllipse.style.strokeDasharray = perimeter; // set stroke dash array to perimeter
    progressEllipse.style.strokeDashoffset = perimeter - (percent * perimeter) / 100; // update offset based on percentage

  }, [percent]);
  
  // return the JSX for Animation component
  return (
    <div className='animation'>
      {animationFinished ? (
        <div>
          <div className="animation-svg">
            <svg width="400px" height="400px">
              <ellipse
                cx="200"
                cy="200"
                rx="150"
                ry="200"
                className="progress"
              ></ellipse>
            </svg>
          </div>
          <div className="circle-draw">
            <CircleDraw onAnimationFinish={onAnimationFinish} />
          </div>
        </div>
      ) : (
        <div className="animation-svg">
          <svg width="400px" height="400px">
            <ellipse
              cx="200"
              cy="200"
              rx="150"
              ry="200"
              className="progress"
            ></ellipse>
          </svg>
        </div>
      )}
    </div>
  );  
}

export default Animation;
