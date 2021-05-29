function Card(props) {
  let id = props.id;

  function onClickCard(){
    props.onClick(id)
  }

  return (
    <div className="card" id={id} onClick={onClickCard}>
      <img src={`/assets/images/${id}.svg`} alt="" className="cardImage" />
      {
        // <p className="cardText">{id}</p>
      }
    </div>
  );
}

export default Card;
