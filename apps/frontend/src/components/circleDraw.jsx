import React, { useRef, useState } from 'react';
import { textToSpeech } from '../helpers/textToSpeech';

// Canvas component to handle drawing on canvas
function Canvas({ onAnimationFinish }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [circlePath, setCirclePath] = useState([]);

  // Start drawing on canvas
  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    // handle both touch and mouse events
    const { clientX, clientY } = e.touches ? e.touches[0]: e;
    const { left, top } = canvas.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    context.beginPath();
    context.moveTo(x, y);
    setCirclePath([{x, y}]); // Store the starting point of the circle
  };
  // draw on canvas
  const draw = (e) => {
    if (isDrawing) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      // handle both touch and mouse events
      const { clientX, clientY } = e.touches ? e.touches[0]: e;
      const { left, top } = canvas.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      context.strokeStyle = '#0FF0FC'; // stroke color
      context.lineWidth = 20; // line width
      context.lineTo(x, y);
      context.stroke();
      setCirclePath((prevPath) => [...prevPath, {x, y}]); // Store the path of the circle
    }
  };
    
    const isCircle = () => {
      // Keep minimum point count low so we don't reject too early.
      if (circlePath.length < 10) {
        console.log('Too few points to form a circle');
        return false; // Not enough points to form a circle
      }
    
      //const start = circlePath[0];
      const end = circlePath[circlePath.length - 1];
      let isClosed = false;

      // Define how many of the initial points to check against.
      const checkZoneLength = Math.min(50, Math.floor(circlePath.length * 0.7));

      // Check if the path closes on itself
      // Loop through the first few points of the path and see if the
      // endpoint is close to any of them.
      for (let i = 0; i < checkZoneLength; i++) {
          const pointNearStart = circlePath[i];
          const distance = Math.sqrt((pointNearStart.x - end.x) ** 2 + (pointNearStart.y - end.y) ** 2);

          // More forgiving close-loop threshold.
          if (distance < 55) {
              isClosed = true;
              console.log('Path is considered closed.');
              break; // Exit the loop once we find a close point
          }
      }

      if (!isClosed) {
          console.log('Start and end points are too far apart');
          return false;
      }
      
      // // Check if the start and end points are close enough
      // const distance = Math.sqrt((start.x - end.x) ** 2 + (start.y - end.y) ** 2);
      // console.log('Start-End Distance:', distance);
      // if (distance > 20) { // Adjust the threshold as needed
      //   console.log('Start and end points are too far apart');
      //   return false;
      // }
    
      const minX = Math.min(...circlePath.map((p) => p.x));
      const maxX = Math.max(...circlePath.map((p) => p.x));
      const minY = Math.min(...circlePath.map((p) => p.y));
      const maxY = Math.max(...circlePath.map((p) => p.y));
      const width = maxX - minX;
      const height = maxY - minY;

      // Reject very tiny scribbles/noise.
      if (width < 50 || height < 50) {
        console.log('Shape too small to be a circle-like gesture');
        return false;
      }

      // Calculate the center of the path
      const centerX = (minX + maxX) / 2;
      const centerY = (minY + maxY) / 2;
      console.log('Center:', { centerX, centerY });
    
      // Check if all points are roughly equidistant from the center
      const radii = circlePath.map((p) => Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2));
      const avgRadius = radii.reduce((sum, r) => sum + r, 0) / radii.length;
      const radiusVariance = radii.reduce((sum, r) => sum + Math.abs(r - avgRadius), 0) / radii.length;
      console.log('Average Radius:', avgRadius, 'Radius Variance:', radiusVariance);
    
      // Adaptive tolerance: allow more wobble on larger drawings.
      const varianceThreshold = Math.max(25, avgRadius * 0.45);
      return radiusVariance < varianceThreshold;
   };
  

  // stop drawing on canvas
  const stopDrawing = () => {
    // check for isDrawing state
    if (!isDrawing) return;
    setIsDrawing(false);
    // display animation finish if user draws a circle
    console.log('Circle Path:', circlePath); // Log the path for debugging
    
    if (isCircle()) {
      onAnimationFinish(); // Call the provided callback function when the animation finishes
      console.log('Animation finished');
    }
    else{
      // Give feed back to the user
      textToSpeech('Please draw a circle');
      // Clear the canvas if the drawing is not a circle
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height); 
    }
    
  };

  return (
    <canvas
      ref={canvasRef}
      onTouchStart={startDrawing}
      onTouchMove={draw}
      onTouchEnd={stopDrawing}
      onMouseDown={startDrawing} // Add mouse event for starting the drawing
      onMouseMove={draw} // Add mouse event for drawing
      onMouseUp={stopDrawing} // Add mouse event for stopping the drawing
      onMouseLeave={stopDrawing} // Stop drawing if the mouse leaves the canvas
      width={600}
      height={600}
      style={{
        position: 'relative',
        //border: '1px dotted black',
        cursor: 'pointer',
        background: 'transparent',
      }}
    ></canvas>
  );
}

function CircleDraw({ onAnimationFinish }) {
  return (
    <div>
      <Canvas onAnimationFinish={onAnimationFinish} />
    </div>
  );
}

export default CircleDraw;
