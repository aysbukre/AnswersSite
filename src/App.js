import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AnswerPage from './pages/AnswerPage';
import CardPage from './pages/CardPage';
import NumberPage from './pages/NumberPage';
import ColorPage from './pages/ColorPage';
import MessagePage from './pages/MessagePage';

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
          <Route path="/messagePage" element={<MessagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
