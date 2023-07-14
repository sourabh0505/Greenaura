import './App.css';
import Books from './Books/Books';
import Banner from './Components/Animatedbanner/Banner';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import Greenaura from './Components/GreenAura/Greenaura';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (<>
      <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Banner/> <Greenaura/> <Courses/></>}/>
      <Route path='/books' element={<><Books/></>}/>
      </Routes>   
    </BrowserRouter>
      <Footer/>
    <div className="App">

    </div></>
  );
}

export default App;
