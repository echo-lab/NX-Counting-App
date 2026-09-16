import React, { useEffect, useRef, useState } from 'react';
import '../styles/animation.css';

// AnimationNoCircle component to handle animation logic without circleDraw function
function AnimationNoCircle({ onAnimationFinish }) {
  const [percent, setPercent] = useState(0); // track progress
  const finishedRef = useRef(false);

  // useEffect hook to handle animation progress
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent >= 100) {
          return 100;
        }
        return prevPercent + 4;
      });
    }, 100); // update progress every 100ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (percent >= 100 && !finishedRef.current) {
      finishedRef.current = true;
      setTimeout(() => {
        onAnimationFinish();
      }, 1000);
    }
  }, [percent, onAnimationFinish]);

  // useEffect hook to update progress ellipse based on percentage
  useEffect(() => {
    const progressEllipse = document.querySelector('.progress');
    const rx = parseFloat(progressEllipse.getAttribute('rx'));
    const ry = parseFloat(progressEllipse.getAttribute('ry'));
    const perimeter = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
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
