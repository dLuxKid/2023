import "./App.css";
import "./reset.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Pages/About";

function App() {
  return (
    <div className="pages">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<About />} />
          {/* <Route
            path="/github"
            component={() => {
              window.location.href = "https://github.com/heisguyy/skinDisease.git";
              return null;
            }}
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
