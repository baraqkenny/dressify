import React from 'react';
import './App.css';
import Home from './components/Home';
import All from './components/All';
import Completed from './components/Completed';
import Pending from './components/Pending';
import { Routes, Route} from 'react-router-dom';



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/completed" element={<Completed />}/>
      </Routes>
      </div>
   
  );

} 

export default App