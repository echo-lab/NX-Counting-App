import { generateDynamicTray } from "./trayGenerators";
import { generateStaticTray } from "./trayGenerators";

import seashellCookie from "../assests/seashellCookie.png";
import multiCookie from "../assests/multiCookie.png";

export function generateTrainingData() {

    // Default values
    const defaultMin = 1;
    const defaultMax = 10;
    const defaultNumProblems = 3;
    const defaultDifficulty = "Easy";
    const defaultPlacement = "Dynamic";

    // Get stored values
    const storedValues = localStorage.getItem("selectValuesPageAnswers");

    let min, max, numProblems, difficulty, placement;

    // Set values to stored values
    if (storedValues) {
      const values = JSON.parse(storedValues);
      min = values.range && values.range.min !== undefined ? values.range.min : defaultMin;
      max = values.range && values.range.max !== undefined ? values.range.max : defaultMax;
      numProblems = values.numProblems !== undefined ? values.numProblems : defaultNumProblems;
      difficulty = values.difficulty || defaultDifficulty;
      placement = values.placement || defaultPlacement;
    } else {
      min = defaultMin;
      max = defaultMax;
      numProblems = defaultNumProblems;
      difficulty = defaultDifficulty;
      placement = defaultPlacement;
    }

    const trayW = 300,
    trayH = 400,
    cookieW = 60,
    cookieH = 60,
    padding = 25,
    minGap = cookieW * 1.1;

  const pages = [];

  for (let i = 0; i < numProblems; i++) {
    const cookieAmount = Math.floor(Math.random() * (max - min + 1)) + min;

    // Set required difference base on difficulty
    const diffLower = difficulty === "Easy" ? 4 : 1;
    const diffUpper = difficulty === "Easy" ? 6 : 3;

    // Generate until canidate is +- from base depending on difficulty
    let candidate;
    do {
      candidate = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    } while (
      Math.abs(candidate - cookieAmount) < diffLower ||
      Math.abs(candidate - cookieAmount) > diffUpper
    );

    // Randomly deciede which gets regular amount and which gets candidate amount
    let greenCookieAmount, purpleCookieAmount;
    if (Math.random() < 0.5) {
      greenCookieAmount = cookieAmount;
      purpleCookieAmount = candidate;
    } else {
      purpleCookieAmount = cookieAmount;
      greenCookieAmount = candidate;
    }
    
    let leftTrayCookies, greenTrayCookies, purpleTrayCookies;
    if (placement === "Static") {
        leftTrayCookies = generateStaticTray(cookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
        greenTrayCookies = generateStaticTray(greenCookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
        purpleTrayCookies = generateStaticTray(purpleCookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
    } else {
        leftTrayCookies = generateDynamicTray(cookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
        greenTrayCookies = generateDynamicTray(greenCookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
        purpleTrayCookies = generateDynamicTray(purpleCookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
    }

    // Messages for TTS
    const plural = cookieAmount > 1 ? "s" : "";
    pages.push({
      message: [
        `Cookie Monster has ${cookieAmount} cookie${plural}. Can Big Bird also have ${cookieAmount} cookie${plural}? Which tray has ${cookieAmount} cookie${plural}? Green? or purple?`
      ],
      message1: [
        `Cookie Monster has ${cookieAmount} cookie${plural}. Let's count together!`
      ],
      message2: [
        `Can Big Bird also have ${cookieAmount} cookie${plural}? Which tray has ${cookieAmount} cookie${plural}? Green? or purple?`
      ],
      cookies: leftTrayCookies.map((cookie, index) => ({
        id: index,
        img: seashellCookie,
        top: cookie.top,
        left: cookie.left
      })),
      greenTray: [
        {
          biscuits: greenTrayCookies.map((cookie, index) => ({
            id: index,
            img: multiCookie,
            top: cookie.top,
            left: cookie.left
          }))
        }
      ],
      purpleTray: [
        {
          biscuits: purpleTrayCookies.map((cookie, index) => ({
            id: index,
            img: multiCookie,
            top: cookie.top,
            left: cookie.left
          }))
        }
      ]
    });
  }

  return { pages };
}