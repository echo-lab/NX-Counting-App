import React, { useState, useEffect } from "react";
import "../styles/base.css";

// Import assets
import TrayImg from "../assests/greenTray.png";
import CookieImg from "../assests/creamCookie.png";

const CookieTrayStaticPage = () => {
  // Dimensions
  const trayW = 300, trayH = 400;
  const cookieW = 60, cookieH = 60;

  // Predefined cookie positions for each tray
  const cookiePositions = {
    1: [
      { x: 120, y: 170 }
    ],
    2: [
      { x: 70, y: 170 },
      { x: 170, y: 170 }
    ],
    3: [
      { x: 45, y: 170 },
      { x: 120, y: 170 },
      { x: 195, y: 170 }
    ],
    4: [
      { x: 70, y: 103 },
      { x: 170, y: 103 },
      { x: 70, y: 236 },
      { x: 170, y: 236 }
    ],
    5: [
      { x: 70, y: 103 },
      { x: 170, y: 103 },
      { x: 70, y: 236 },
      { x: 170, y: 236 },
      { x: 120, y: 170 }
    ],
    6: [
      { x: 45, y: 103 },
      { x: 120, y: 103 },
      { x: 195, y: 103 },
      { x: 45, y: 236 },
      { x: 120, y: 236 },
      { x: 195, y: 236 }
    ],
    7: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 120, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ],
    8: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 70, y: 170 },
      { x: 170, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ],
    9: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 45, y: 170 },
      { x: 120, y: 170 },
      { x: 195, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ],
    10: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 30, y: 170 },
      { x: 90, y: 170 },
      { x: 150, y: 170 },
      { x: 210, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ]
  };

  const [tray, setTray] = useState([]);

  useEffect(() => {
    const randNumber = Math.floor(Math.random() * 10) + 1;

    const tray = {
        number: randNumber,
        cookies: cookiePositions[randNumber].map((cookie, index) => ({
          id: index,
          left: `${cookie.x}px`,
          top: `${cookie.y}px`
        }))
    }
    
    setTray(tray);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cookie Tray</h1>
      <div
        style={{
          position: "relative",
          width: `${trayW}px`,
          height: `${trayH}px`,
          margin: "0 auto"
        }}
      >
        <img src={TrayImg} alt="Tray" style={{ width: `${trayW}px`, height: `${trayH}px`, display: "block" }} />

        {tray.cookies && tray.cookies.map(cookie => (
          <img
            key={cookie.id}
            src={CookieImg}
            alt="Cookie"
            style={{
              position: "absolute",
              top: cookie.top,
              left: cookie.left,
              width: `${cookieW}px`,
              height: `${cookieH}px`
            }}
          />
        ))}
      </div>
      <p>Total Cookies: {tray.cookies ? tray.cookies.length : 0}</p>
    </div>
  );
};

export default CookieTrayStaticPage;