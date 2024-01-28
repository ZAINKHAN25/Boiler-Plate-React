import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./Pages/Home/index.jsx"
import NotFound from "./Pages/NotFound/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
