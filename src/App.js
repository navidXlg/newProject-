import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/richify" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
