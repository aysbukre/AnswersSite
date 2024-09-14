import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AnswerPage from './components/AnswerPage';
import CardPage from './components/CardPage';
import NumberPage from './components/NumberPage';
import ColorPage from './components/ColorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
