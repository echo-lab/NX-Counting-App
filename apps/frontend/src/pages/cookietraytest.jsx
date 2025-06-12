import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/base.css";

// Import assets
import TrayImg from "../assests/greenTray.png";
import CookieImg from "../assests/creamCookie.png";

// Import the tray generation functions
import { generateDynamicTray, generateStaticTray } from "../helpers/trayGenerators";

const CookieTray = ({ type = "static", numCookies = 10 }) => {
  const trayW = 300, trayH = 400;
  const cookieW = 60, cookieH = 60;
  const padding = 20;
  const minGap = cookieW * 1.1;

  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    let trayCookies;
    if (type === "dynamic") {
      trayCookies = generateDynamicTray(numCookies, trayW, trayH, cookieW, cookieH, padding, minGap);
    } else if (type === "static") {
      trayCookies = generateStaticTray(numCookies);
    }
    setCookies(trayCookies);
  }, [type, numCookies]);

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
        {cookies.map(cookie => (
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
      <p>Total Cookies: {cookies.length}</p>
    </div>
  );
};

export default CookieTray;
