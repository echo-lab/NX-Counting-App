import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/selectValuesPage.css";
import { useAppData } from "../context/Context.jsx";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { generateTrainingData } from "../helpers/trainingGenerator";

const SelectValuesPage = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [numProblems, setNumProblems] = useState("");
  const [difficulty, setDifficulty] = useState(null);
  const [placement, setPlacement] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { selectedOption } = useAppData();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);
    const numProblemsNum = parseInt(numProblems, 10);

    // Validate that min and max are numbers between 1 and 10
    if (isNaN(minNum) || minNum < 1 || minNum > 10) {
      setError("Enter a minimum number from 1 to 10.");
      return;
    }
    if (isNaN(maxNum) || maxNum < 1 || maxNum > 10) {
      setError("Enter a maximum number from 1 to 10.");
      return;
    }
    if (minNum > maxNum) {
      setError("Minimum number cannot be greater than maximum number.");
      return;
    }
    // Validate the number of problems is at least 1
    if (isNaN(numProblemsNum) || numProblemsNum < 1) {
      setError("Enter a valid number of problems (at least 1).");
      return;
    }

    if (difficulty == null) {
      setError("Select a difficulty.");
      return;
    }

    if (placement == null) {
      setError("Select a placement.");
      return;
    }

    setError("");
    const answers = { 
      range: { min: minNum, max: maxNum },
      numProblems: numProblemsNum,
      difficulty, 
      placement 
    };
    
    localStorage.setItem("selectValuesPageAnswers", JSON.stringify(answers));

    // Store training data
    const trainingData = generateTrainingData();
    localStorage.setItem("trainingData", JSON.stringify(trainingData));

    setSuccess(
      "Values submitted successfully!\n" +
      "Range: " + minNum + " - " + maxNum +
      ", Number of Problems: " + numProblemsNum +
      ", Difficulty: " + difficulty +
      ", Placement: " + placement
    );
    console.log("Submitted:", answers);
  };

  return (
    <div className="select-values-page">
      <h2>Select Your Values</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Range:</label>
          <div className="range-inputs">
            <div>
              <label htmlFor="minInput">Min (1-10):</label>
              <input
                type="number"
                id="minInput"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                min="1"
                max="10"
              />
            </div>
            <div>
              <label htmlFor="maxInput">Max (1-10):</label>
              <input
                type="number"
                id="maxInput"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                min="1"
                max="10"
              />
            </div>
          </div>

          <div className="problems-input">
            <label htmlFor="numProblemsInput">Number of Problems:</label>
            <input
              type="number"
              id="numProblemsInput"
              value={numProblems}
              onChange={(e) => setNumProblems(e.target.value)}
              min="1"
            />
          </div>

          <label>Difficulty (Easy: ± 5 to 6, Hard: ± 1 to 3):</label>
          <div className="button-group">
            <button
              type="button"
              className={difficulty === "Easy" ? "selected" : ""}
              onClick={() => setDifficulty("Easy")}>
              Easy
            </button>
            <button
              type="button"
              className={difficulty === "Hard" ? "selected" : ""}
              onClick={() => setDifficulty("Hard")}>
              Hard
            </button>
          </div>

          <label>Placement:</label>
          <div className="button-group-two">
            <button
              type="button"
              className={placement === "Static" ? "selected" : ""}
              onClick={() => setPlacement("Static")}>
              Static
            </button>
            <button
              type="button"
              className={placement === "Dynamic" ? "selected" : ""}
              onClick={() => setPlacement("Dynamic")}>
              Dynamic
            </button>
          </div>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
          <button type="submit">Submit</button>
        </form>
        <div style={{ marginTop: "20px" }}>
           <Link to={`/game/home/${selectedOption}`}>
              <HomeRoundedIcon />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectValuesPage;
