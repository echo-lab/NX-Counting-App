import React,  { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectorPage from './pages/SelectorPage.jsx';
import Home from './pages/home.jsx';
import GamePage from './pages/gamepage.jsx';
import PrevGamePage from './pages/prevGamePage.jsx'; // Import the PrevGamePage component
import AnimationPage from './pages/animationpage.jsx';
import TrainPage from './pages/training.jsx';
import PracticePage from './pages/practice.jsx';
import SignupPage from './pages/signupPage.jsx';
import BasePage from './pages/basePage.jsx';
import BaseTrainingPage from './pages/baseTraining.jsx';
import AnimationTrainingPage from './pages/animationTrainingPage.jsx';
import TouchTrainingPage from './pages/TouchTrainingPage.jsx';
import BasePage2 from './pages/basePage2.jsx';
import BaseTrainingPage2 from './pages/baseTraining2.jsx';
import SelectValuesPage from './pages/selectValuesPage.jsx';
import TrainingPage from './pages/trainPage.jsx';
import { SoundProvider } from './helpers/SoundContext.jsx';
import { AppDataProvider } from './context/Context.jsx';
import './App.css';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      // Removes event listener when component unmounts to prevent memory leaks
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);
  return (
    <div className="App">
      <SoundProvider>
      <AppDataProvider>
      <Router>
        <Routes>
          <Route path='/' element={isLoggedIn === "true"? <Home /> : <SignupPage />}/>
          <Route path='/game/selection' element={<SelectorPage />}/>
          <Route path='/game/values' element={<SelectValuesPage />}/>
          <Route path='/game/home/:option' element={<Home />}/>
          <Route path='/game/touch2/play/:page' element={<PrevGamePage />}/>  {/* Add a route to the original touch task component*/}
          <Route path='/game/touch/play/:page' element={<GamePage />}/>   {/* Add a route to the updated and improved touch task component*/}
          <Route path='/game/animation/play/:page' element={<AnimationPage />}/>
          <Route path='/game/train/:page' element={<TrainPage />}/>
          <Route path='/game/practice/:page' element={<PracticePage />}/>
          <Route path='/game/base/:page' element={<BasePage />}/>
          <Route path='/game/base/training/:page' element={<BaseTrainingPage />}/>
          <Route path='/game/base2/:page' element={<BasePage2 />}/>
          <Route path='/game/base2/training/:page' element={<BaseTrainingPage2 />}/>
          <Route path='/game/animation/training/:page' element={<AnimationTrainingPage />}/>
          <Route path='/game/touch/training/:page' element={<TouchTrainingPage />}/>
          <Route path="/game/train-custom/:page" element={<TrainingPage />} />
          <Route path='/game/values' element={<SelectValuesPage />}/>
        </Routes>
     </Router>
     </AppDataProvider>
     </SoundProvider>
    </div>
  );
}

// Export the App componet
export default App;
