import './App.css';
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Playground from './Components/Playground';


function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Playground" element={<Playground />} />
      </Routes>


    </div>
  );
}

export default App;
