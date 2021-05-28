import { useState } from "react";
import ScoreBar from "./ScoreBar";
import Card from "./Card";
import _ from "lodash";

function Deck(props) {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [deck, setDeck] = useState(
    [...Array(12)].map((e, i) => (
      <div onClick={onClickActions.bind(this, i + 1)}>
        <Card char={i + 1} clicked={false} />
      </div>
    ))
  );

  function resetGame() {
    console.log("resetGame!");
  }

  function shuffleDeck() {
    setDeck(_.shuffle(deck));
  }

  function onClickActions(senderID) {
    console.log(clicked);
    console.log(senderID);
    shuffleDeck();
    // sender.setState("clicked", true);
    if (clicked.includes(senderID)) {
      resetGame();
    } else {
      console.log("in else");
      setClicked(clicked.push(senderID));

      // idk why I have to do this
      setScore((score) => score + 1);
    }
  }

  return [<ScoreBar score={score} />, deck];
}

export default Deck;
