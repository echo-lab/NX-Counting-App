function decode(token) {
  if (!token) {
    return;
  }
  const base64Url = token.split('.')[1];
  if (!base64Url) {
    return;
  }
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

export const handleInteraction = (event, setTouchData) => {

  const token = window.localStorage.getItem("token");
  const decodedToken = decode(token);
  const userName = decodedToken.name;
  const date = new Date().toLocaleDateString();
  const currentTime = new Date();
  const milliseconds = currentTime.getMilliseconds();
  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}:${milliseconds}`;

  const touchX = event.clientX || (event.touches && event.touches[0].clientX);
  const touchY = event.clientY || (event.touches && event.touches[0].clientY);

  const interaction = {
    userName: userName,
    x: touchX,
    y: touchY,
    date: date,
    time: formattedTime,
    name:"random "
  };


  if (event.target && event.target.tagName && event.target.tagName.toLowerCase() === 'img') {
    const imageId = event.target.id;
    const imageName = event.target.getAttribute('alt'); 

    interaction.id = imageId;
    interaction.name = imageName;
  }
    setTouchData((prevData) => [...prevData, interaction]);
  
    console.log(`Object: ${interaction.name}, Time: ${interaction.time}`);
  };


  export const handleNextClickTouchData = (touchData,category, pageNo) => {
    console.log("touchdata:", touchData)
    fetch('/save/Touch/Data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        touchData: touchData,
        category: category,
        pageNumber : pageNo,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Touch data sent successfully.');
        } else {
          console.error('Failed to send touch data to the backend.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  export const handleNextClickTraining = (touchData, typeOfTraining, pageNo) => {
    console.log("touchdata:", touchData)
    fetch('/save/Training/TouchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        touchData: touchData,
        category: typeOfTraining,
        pageNumber : pageNo,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Touch data sent successfully.');
        } else {
          console.error('Failed to send touch data to the backend.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  export const handleNextClickPractice = (touchData, pageNo) => {
    console.log("touchdata:", touchData)
    fetch('/save/Practice/TouchData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        touchData: touchData,
        category: "Practice",
        pageNumber : pageNo,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Touch data sent successfully.');
        } else {
          console.error('Failed to send touch data to the backend.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };