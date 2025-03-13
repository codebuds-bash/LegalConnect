import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
