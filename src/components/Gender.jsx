import { useState } from 'react';
import MaleDressInput from './MaleDressInput';
import FemaleDressInput from './FemaleDressInput';
import './Gender.css';

const Gender = () => {
    const [maleDress, setMaleDress] = useState(false);
    const [femaleDress, setFemaleDress] = useState(false);

  return (
    <div className='gender-wrapper'>
      <button onClick={()=> setMaleDress(!maleDress)} className="male-gender">male</button>
    {maleDress && <div className='male-dress'><MaleDressInput /></div>}

      <button onClick={()=> setFemaleDress
    (!femaleDress)} className="female-gender">female</button>
    {femaleDress && <div className='female-dress'><FemaleDressInput/></div>}
    </div>
  );
}

export default Gender
