import { useState } from "react";
import "./styles/App.css";
import ScoreBar from "./components/ScoreBar";
import Deck from "./components/Deck.js";
import _ from "lodash";

function App() {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [deck, setDeck] = useState([...Array(12)].map((e, i) => i));

  function resetGame() {
    setScore(0);
    setClicked([]);
    console.log("resetGame!");
  }

  function shuffleDeck() {
    setDeck(_.shuffle(deck));
  }

  function onClickActions(senderID) {
    console.log(clicked);
    console.log(senderID);

    shuffleDeck();

    if (clicked.includes(senderID)) {
      resetGame();
    } else {
      console.log("in else");
      setClicked(clicked.concat(senderID));

      setScore(score + 1);
    }
  }

  return (
    <div className="App">
      <ScoreBar score={score} />
      <Deck cards={deck} onClick={onClickActions} />
    </div>
  );
}

export default App;
