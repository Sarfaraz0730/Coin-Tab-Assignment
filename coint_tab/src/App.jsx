import {Routes, Route} from 'react-router-dom'
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Service';

function App() {
  return (
    <div className="App">
 <Navbar/>
       <Routes>
   
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/service' element={<Service/>} ></Route>
   
  
       </Routes>
  
    </div>
  );
}

export default App;
