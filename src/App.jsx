import {createContext, useState} from 'react';
import './App.css';
import Buttons from './components/Buttons';
import Gender from './components/Gender';



export const GenderContext = createContext();

function App() {
  const [header] = useState('Dressify')


  return (
     <GenderContext.Provider value={<Gender />}>
    <div className="app">
      <h1>{header}</h1>
      <hr />
      <Buttons />
      </div>
      </GenderContext.Provider>
  )

} 

export default App