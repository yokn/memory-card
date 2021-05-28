import { useState } from "react";

function Card(props) {
  const [clicked, setClicked] = useState(props.clicked);

  let id = props.char;
  return (
    <div className="card" id={id}>
      <img src={`/assets/images/${id}.svg`} alt="" className="cardImage" />
      {
        // <p className="cardText">{id}</p>
      }
    </div>
  );
}

export default Card;
