// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';


// const handleNextButtonClick = (touchData) => {
//   if (Object.keys(touchData).length > 0) {
//     axios
//       .post('/touchdata', { touchData })
//       .then((response) => {
//         console.log('Touch data sent to the backend successfully:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error sending touch data to the backend:', error);
//       });
//   }
// };

// const TouchData = () => {
//   const [touchData, setTouchData] = useState({});
//   const location = useLocation();

//   const updateTouchData = (touchX, touchY, target) => {
//     const currentPage = location.pathname;
//     const date = new Date().toLocaleDateString();
//     const currentTime = new Date();
//     const milliseconds = currentTime.getMilliseconds();
//     const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}:${milliseconds}`;

//     const interaction = {
//       x: touchX,
//       y: touchY,
//       date: date,
//       time: formattedTime,
//       name:"random "
//     };

//     // Check if the touch event target is an image
//     if (target && target.tagName && target.tagName.toLowerCase() === 'img') {
//       const imageId = target.id;
//       const imageName = target.getAttribute('alt'); 

//       interaction.id = imageId;
//       interaction.name = imageName;
//     }

//     setTouchData((prevData) => ({
//       ...prevData,
//       [currentPage]: [...(prevData[currentPage] || []), interaction],
//     }));
//   };

//   useEffect(() => {
//     const handleTouchStart = (event) => {
//       const touch = event.touches[0];
//       const touchX = touch.clientX;
//       const touchY = touch.clientY;

//       updateTouchData(touchX, touchY, event.target);
//     };

//     window.addEventListener('touchstart', handleTouchStart, { passive: false });

//     return () => {
//       window.removeEventListener('touchstart', handleTouchStart);
//     };
//   }, []);

//   useEffect(() => {
//     if (Object.keys(touchData).length > 0) {
//       axios
//         .post('/touchdata', { touchData })
//         .then((response) => {
//           console.log('Touch data sent to the backend successfully:', response.data);
//         })
//         .catch((error) => {
//           console.error('Error sending touch data to the backend:', error);
//         });
//     }
//   }, [touchData, location]);

//   return null;
// };


// export{ handleNextButtonClick };

// export default TouchData;


