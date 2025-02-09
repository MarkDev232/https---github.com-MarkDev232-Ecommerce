import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Home";
import About from "./About";
import TaskList from "./Task";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Tasks" element={<About/>} />
        <Route path="/About" element={<TaskList/>} />
      </Routes>
    </Router>
  );
}

export default App;
