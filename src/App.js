import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Answer from './components/Answer';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import backgroundVideo from './images/videos/sea1.mp4';

function App() {
  return (
    <>
      <div className="App">
      <video id="background-video" loop muted autoPlay>
                <source src={backgroundVideo} type="video/mp4" />
                <source src={backgroundVideo} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path='/SecondPage' element={<SecondPage />} ></Route>
            <Route path="/ThirdPage" element={<ThirdPage />} ></Route>
            <Route path="/answer" element={<Answer />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
