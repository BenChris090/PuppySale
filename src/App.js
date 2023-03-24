import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Dog from './Dog';
import Dogs from './Dogs';
import Home from './Home';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <Router>
      <div className="App bg-black h-screen overflow-y-auto">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>            
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/dogs/:category' element={<Dogs/>}/>
            <Route path='/dog/:id' element={<Dog/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
