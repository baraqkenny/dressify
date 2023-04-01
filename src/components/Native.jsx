import { useState, useContext } from "react";
import "./Native.css";
import { GenderContext } from "../App";


const Native = () => {
  const [gender, setGender] = useState(false);
  // imported the GenderContext from the App component
  const genderType = useContext(GenderContext);
  return (
    <div className="native">
      <button onClick={() => setGender(!gender)} className="native-btn">
        Native Dress
      </button>

      <div className="gender">
        {/* toggle the preferred dress-type to show gender-type  */}
        {gender && <div>{genderType}</div>}
      </div>
    </div>
  );
};

export default Native;
