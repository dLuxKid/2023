import './App.css';
import './reset.css'
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import About from './components/Pages/About';

function App() {
  return (
    <div className='pages'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<About/>} />
        </Routes> 
      </Router>
    </div>
  );
}

export default App;
