const cookiePositions = {
  1: [
    { x: 130, y: 180 }
  ],
  2: [
    { x: 60, y: 200 },
    { x: 170, y: 160 }
  ],
  3: [
    { x: 40, y: 220 },
    { x: 140, y: 150 },
    { x: 200, y: 210 }
  ],
  4: [
    { x: 40, y: 50 },
    { x: 200, y: 60 },
    { x: 50, y: 280 },
    { x: 190, y: 260 }
  ],
  5: [
    { x: 50, y: 60 },
    { x: 190, y: 70 },
    { x: 70, y: 260 },
    { x: 210, y: 240 },
    { x: 130, y: 150 }
  ],
  6: [
    { x: 40, y: 50 },
    { x: 210, y: 60 },
    { x: 40, y: 180 },
    { x: 200, y: 210 },
    { x: 60, y: 300 },
    { x: 180, y: 290 }
  ],
  7: [
    { x: 40,  y: 40  },
    { x: 180, y: 50  },
    { x: 100, y: 140 },
    { x: 200, y: 180 },
    { x: 80,  y: 240 },
    { x: 50,  y: 300 },
    { x: 150, y: 320 }
  ],
  8: [
    { x: 50,  y: 50  },
    { x: 150, y: 60  },
    { x: 220, y: 80  },
    { x: 60,  y: 170 },
    { x: 180, y: 190 },
    { x: 40,  y: 270 },
    { x: 130, y: 280 },
    { x: 210, y: 300 }
  ],
  9: [
    { x: 40,  y: 40  },
    { x: 140, y: 50  },
    { x: 230, y: 70  },
    { x: 50,  y: 140 },
    { x: 160, y: 150 },
    { x: 200, y: 220 },
    { x: 80,  y: 240 },
    { x: 30,  y: 320 },
    { x: 180, y: 310 }
  ],
  10: [
    { x: 40,  y: 50  },
    { x: 130, y: 40  },
    { x: 210, y: 60  },
    { x: 60,  y: 140 },
    { x: 150, y: 120 },
    { x: 220, y: 180 },
    { x: 70,  y: 210 },
    { x: 160, y: 210 },
    { x: 90,  y: 280 },
    { x: 170, y: 300 }
  ]
};



  // Function to generate DynamicTray
  export function generateDynamicTray(numCookies, trayW, trayH, cookieW, cookieH, padding, minGap) {
    const placedCookies = [];
  
    for (let i = 0; i < numCookies; i++) {
      let newCookie;
      let tries = 0;
      const maxTries = 100;
  
      while (tries < maxTries) {
        newCookie = {
          x: Math.random() * (trayW - cookieW - 2 * padding) + padding,
          y: Math.random() * (trayH - cookieH - 2 * padding) + padding
        };
        
        // Check for overlap
        const tooClose = placedCookies.some(existing => {
          const dx = existing.x - newCookie.x;
          const dy = existing.y - newCookie.y;
          return Math.sqrt(dx * dx + dy * dy) < minGap;
        });
  
        if (!tooClose) break;
        tries++;
      }
      placedCookies.push(newCookie);
    }
  
    // Map the positions into render-friendly values
    return placedCookies.map((cookie, index) => ({
      id: index,
      left: `${Math.round(cookie.x)}px`,
      top: `${Math.round(cookie.y)}px`
    }));
  }

  // Function to generate StaticTray
  export function generateStaticTray(numCookies) {
    if (!cookiePositions[numCookies]) {
      throw new Error(`No static tray defined for ${numCookies} cookies`);
    }
    return cookiePositions[numCookies].map((cookie, index) => ({
      id: index,
      left: `${cookie.x}px`,
      top: `${cookie.y}px`
    }));
}

