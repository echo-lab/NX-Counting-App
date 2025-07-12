import {connectToDb} from './db.js';
import express from 'express';
import './database/userDetails.js';
import './database/touchDetails.js';
import './database/trainingTouchDetails.js';
import './database/practiceTouchDetails.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
// change from apps/backend/.env.local to .env.local to enable environment variables to be loaded on server
config({path:'.env.local'});


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '/data');
const PORT = process.env.REACT_APP_PORT || 5000;
console.log(PORT);

const GOOGLE_API_KEY = process.env.GOOGLEAPI_KEY;
const keyPath = process.env.KEYPATH;
const certPath = process.env.CERTPATH;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const JWT_SECRET = process.env.JWT_SECRET;

const User = mongoose.model("UserInfo");
const UserTouchDetails = mongoose.model("TouchDetails");
const UserTrainingTouchDetails = mongoose.model("TrainingTouchDetails");
const UserPracticeTouchDetails = mongoose.model("PracticeTouchDetails");

app.post("/register", async (req, res) => {
    const { name } = req.body;
  
    try {
      await User.create({
        uname: name,
        answers: {
          baselineTrainingAnswers: null,
          baselineTraining2Answers: null,
          TouchTrainingAnswers: null,
          animationTrainingAnswers: null,
          touchTestAnswers: null,
          animationTestAnswers: null,
          baselineTestAnswers: null,
          baselineTest2Answers: null,
          practiceAnswers: null,
        },
      });

      console.log("user:", User.answers)
      const token = jwt.sign({name: name}, JWT_SECRET,{
        expiresIn: 86400,
      });
      res.send({ status: "ok", data: token });

    } catch (error) {
      res.send({ status: "error" });
    }
  });


  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return err;
        }
        return res;
      });

      if (user == "TokenExpiredError: jwt expired") {
        return res.send({ status: "error", data: "token expired" });
      }
  
      const username = user.name;
      const data = await User.findOne({ uname: username });
    
      if (data) {
        res.send({ status: "ok", data: data });
      } else {
        res.send({ status: "error", data: "User not found" });
      }
    } catch (error) {
      console.error("Error :", error);
     }
  });


  // app.post("/update-answer/:questionNumber", async (req, res) => {
  //   const { questionNumber } = req.params;
  //   const { token, newAnswer } = req.body;
  //   const correctAnswers = ["greenTray","purpleTray","greenTray","purpleTray"];
  //   let score = 0;
  
  //   try {
  //     const user = jwt.verify(token, JWT_SECRET);
  //     const username = user.name;

  //     if (newAnswer === correctAnswers[questionNumber]) {
  //       score = 1;
  //     }else{
  //       score = 0;
  //     }

  //     const updatedUser = await User.findOneAndUpdate(
  //       { uname :username },
  //       { [`answer${questionNumber}`]: score },
  //     );
  
  //     res.json(updatedUser);
  //   } catch (error) {
  //     res.status(500).json({ error: "Error updating answer." });
  //   }
  // });

  app.post('/submit/answers', async (req, res) => {
    try{
      const { answers, pageType }= req.body;
      const token = req.headers.authorization.split('Bearer ')[1];

      const user = jwt.verify(token, JWT_SECRET);
      const username = user.name;

      let updateField = {};
      updateField[`answers.${pageType}`] = answers;
  
      const updatedUser = await User.findOneAndUpdate(
        { uname: username },
        { $set: updateField },
        { new: true }
      );

      res.json(updatedUser);

    }catch (error) {
      res.status(500).json({ error: "Error saving answer." });
    }
  });

  app.post('/save/Touch/Data', async (req, res) => {
    const { touchData, category, pageNumber } = req.body;

    try {
      await UserTouchDetails.create({
        touchData: touchData,
        category: category,
        pageNumber: pageNumber,
      });

      console.log('Touch data saved to the database.');
      res.status(200).json({ status: 'ok', message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving training touch data:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  });


  app.post('/save/Training/TouchData', async (req, res) => {
    const { touchData, category, pageNumber } = req.body;

    try {
      await UserTrainingTouchDetails.create({
        touchData: touchData,
        category: category,
        pageNumber: pageNumber,
      });

      console.log('Training touch data saved to the database.');
      res.status(200).json({ status: 'ok', message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving training touch data:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  });

  app.post('/save/Practice/TouchData', async (req, res) => {
    const { touchData, category, pageNumber } = req.body;

    try {
      await UserPracticeTouchDetails.create({
        touchData: touchData,
        category: category,
        pageNumber: pageNumber,
      });

      console.log('Practice touch data saved to the database.');
      res.status(200).json({ status: 'ok', message: 'Data saved successfully' });
    } catch (error) {
      console.error('Error saving training touch data:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  });

  
  // app.post('/savePracticeTouchData', (req, res) => {
  //   try {
  //     console.log('Received request with body:', req.body);
  //     const { touchData } = req.body; 
  //     console.log('Parsed touch data:', touchData);
  
  //     fs.writeFileSync(`${dataPath}/PracticeTouchData.txt`, JSON.stringify(touchData));
  
  //     res.status(200).send('Touch data saved successfully.');
  //   } catch (error) {
  //     console.error('Error saving touch data:', error);
  //     res.status(500).send('Error saving touch data.');
  //   }
  // });


  app.post('/speech/synthesize', async (req, res) => {
    try {
      const {text} = req.body;
      
      const  voice = {languageCode: 'en-US', name :'en-US-Neural2-G' };
      const request = {
          input: { text: text},
          voice: voice,
          audioConfig: { audioEncoding: 'MP3' },
        };
      
      // debugging
      console.log("Received request for text-to-speech synthesis:", request);

      const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize?key=' + GOOGLE_API_KEY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });

      const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Server Error in Google Text-to-Speech:', error);
        res.status(500).json({ message: error.toString() });
    }
});

// Serve static files from the React app (after all API routes)
// use process.cwd() to get the current working directory
// this allows the server to serve the React app from the correct directory instead of the local directory
app.use(express.static(process.cwd()));

// Handle React routing, return all requests to React app
// same concept as above, use process.cwd() to get the current working directory
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'index.html'));
});

connectToDb()
  .then(() => {
    console.log("Successfully Connected to DB");

    app.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });

