import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AnswerPage from './components/AnswerPage';
import CardPage from './components/CardPage';
import NumberPage from './components/NumberPage';
import ColorPage from './components/ColorPage';
import backgroundVideo from './images/videos/sea1.mp4';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <video id="background-video" loop muted autoPlay>
          <source src={backgroundVideo} type="video/mp4" />
          <source src={backgroundVideo} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardPage" element={<CardPage />} />
          <Route path="/numberPage" element={<NumberPage />} />
          <Route path="/colorPage" element={<ColorPage />} />
          <Route path="/answerPage" element={<AnswerPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;