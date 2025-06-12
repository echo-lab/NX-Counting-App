import React, { createContext, useContext,  useState } from 'react';
import animationData from '../data/animationData.js';
import baseData from  "../data/baseData.js";
import Data from "../data/data.js";
import practiceData from '../data/practiceData';
import sectionTrainData from "../data/sectionTrainingData.js";
import trainData from  "../data/trainData.js";
import audioFiles from '../data/audioData.js';

// create context with default values
const AppDataContext = createContext({
    animationData: animationData,
    baseData: baseData,
    Data: Data,
    sectionTrainData: sectionTrainData,
    trainData: trainData,
    practiceData: practiceData,
    audioData: audioFiles,
});

// AppDataProvider component to provide context to children
export const AppDataProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState(null); // track selected option
  return <AppDataContext.Provider 
    value={{ animationData: animationData, 
             baseData: baseData, 
             Data: Data, 
             sectionTrainData: sectionTrainData, 
             trainData: trainData, 
             practiceData: practiceData, 
             audioData: audioFiles,
             selectedOption: selectedOption,
             setSelectedOption: setSelectedOption}}>{children}</AppDataContext.Provider>;
};

// use AppDataContext
export const useAppData = () => {
  return useContext(AppDataContext);
};