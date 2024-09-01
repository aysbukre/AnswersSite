import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Answer from './components/Answer';
import Header from './components/Header';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

function App() {
  return (
    <>
      <Header />
      <div className="App">
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
