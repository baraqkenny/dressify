import { useContext, useState } from "react";
import "./Suit.css";
import { GenderContext } from "../App";

const Suit = () => {
  const [gender, setGender] = useState(false);

  const genderType = useContext(GenderContext);

  return (
    <div className="suit">
      <button onClick={() => setGender(!gender)} className="suit-btn">
        Suit
      </button>
      {/* toggle the preferred dress-type to show gender-type  */}
      {gender && <div>{genderType}</div>}
    </div>
  );
};

export default Suit;
