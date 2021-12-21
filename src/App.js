import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Works from './Pages/Works';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="works" element={<Works />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
