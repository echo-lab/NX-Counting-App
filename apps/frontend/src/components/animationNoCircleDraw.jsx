import React, { useEffect, useState } from 'react';
import '../styles/animation.css';

// AnimationNoCircle component to handle animation logic without circleDraw function
function AnimationNoCircle({ onAnimationFinish }) {
  const [percent, setPercent] = useState(0); // track progress
  const [animationFinished, setAnimationFinished] = useState(false); // track if animation finished

  // useEffect hook to handle animation progress
  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < 100) {
        setPercent((prevPercent) => prevPercent + 4); // increment progress
      } else { // clear interval when animation is finished
        clearInterval(interval);
        setTimeout(() => {
          setAnimationFinished(true);
          onAnimationFinish(); 
        }, 1000);
      }
    }, 100); // update progress every 100ms

    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  // useEffect hook to update progress ellipse based on percentage
  useEffect(() => {
    let progressEllipse = document.querySelector('.progress');
    let rx = parseFloat(progressEllipse.getAttribute('rx'));
    let ry = parseFloat(progressEllipse.getAttribute('ry'));
    let perimeter = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
    progressEllipse.style.strokeDasharray = perimeter;
    progressEllipse.style.strokeDashoffset = perimeter - (percent * perimeter) / 100;

  }, [percent]);

  return (
    <div className='animation'>

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
        </div>
     
    </div>
  );  
}

export default AnimationNoCircle;
