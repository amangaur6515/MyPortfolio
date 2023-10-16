import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/experience' element={<Experience/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
