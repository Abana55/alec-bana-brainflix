import HomePage from './pages/Page/HomePage/HomePage';
import UploadPage from './pages/Page/UploadPage/UploadPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/video/:idFromParams" element={<HomePage/>} />
        <Route path="Upload" element={<UploadPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
