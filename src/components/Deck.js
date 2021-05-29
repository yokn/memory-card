import Card from "./Card";

function Deck(props) {
  function displayCard(index) {
    return <Card id={index + 1} onClick={props.onClick} />;
  }

  return <div className="Deck">{props.cards.map(displayCard)}</div>;
}

export default Deck;
