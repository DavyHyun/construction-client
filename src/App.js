import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/Nav';
import {Route, Routes} from 'react-router';
import Home from './Pages/Home/index';
import About from './Pages/About/index';
import Commercial from './Pages/Commercial/index';
import Contact from './Pages/Contact/index';
import Request from './Pages/Request/index';
import Residential from './Pages/Residential/index';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/HOME' element={<Home />}/>
        <Route path='/ABOUT' element={<About />}/>
        <Route path='/COMMERCIAL' element={<Commercial />}/>
        <Route path='/CONTACT' element={<Contact />}/>
        <Route path='/REQUEST AN ESTIMATE' element={<Request />}/>
        <Route path='/RESIDENTIAL' element={<Residential />}/>
      </Routes>
    </div>
  );
}

export default App;
