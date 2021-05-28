import { useState } from "react";
import Card from "./Card";
import _ from "lodash";

function Deck(props) {
  const [deck, setDeck] = useState(
    [...Array(12)].map((e, i) => (
      <div onClick={shuffleDeck}>
        <Card char={i + 1} />
      </div>
    ))
  );

  function shuffleDeck() {
    setDeck(_.shuffle(deck));
  }

  return deck;
}

export default Deck;
