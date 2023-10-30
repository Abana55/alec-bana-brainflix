import HomePage from './pages/Page/HomePage/HomePage';
import UploadPage from './pages/Page/UploadPage/UploadPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="upload" element={<UploadPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
