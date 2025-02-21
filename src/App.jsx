import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Livestream from "./pages/LiveStream.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {



  return (
    <Router>
      <Routes>

        <Route path="/" exact element={<HomePage />} />
        <Route path="/livestream" element={<Livestream />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
