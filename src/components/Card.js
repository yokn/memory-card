function Card(props) {
  let id = props.char;
  return (
    <div className="card">
      <img src={`/assets/images/${id}.svg`} alt="" className="cardImage" />
      {
        // <p className="cardText">{id}</p>
      }
    </div>
  );
}

export default Card;
