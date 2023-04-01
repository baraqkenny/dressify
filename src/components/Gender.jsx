import {useState} from 'react';
import './Gender.css';
import MaleNativeDressInput from "../dressInput/MaleNativeDressInput";

const Gender = () => {
  const [showMaleInput, setShowMaleInput] = useState(false);


  return (
    <div className="gender">
      {/* toggle the gen */}
      <button
        onClick={() => setShowMaleInput(!showMaleInput)}
        className="gender-btn male"
      >male</button>
      <div>{showMaleInput && <MaleNativeDressInput />}</div>
      <button className="gender-btn female">female</button>
    </div>
  );
}

export default Gender
