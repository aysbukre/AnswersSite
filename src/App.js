import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AnswerPage from './components/AnswerPage';
import CardPage from './components/CardPage';
import NumberPage from './components/NumberPage';

import ColorPage from './components/ColorPage';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path='/cardPage' element={<CardPage />} ></Route>
            <Route path="/numberPage" element={<NumberPage />} ></Route>
            <Route path="/colorPage" element={<ColorPage />} ></Route>
            <Route path="/answerPage" element={<AnswerPage />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
