import { useState } from "react";
import "./styles/App.css";
import ScoreBar from "./components/ScoreBar";
import Deck from "./components/Deck.js";
import _ from "lodash";

const numCards = 12;

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [deck, setDeck] = useState([...Array(numCards)].map((e, i) => i));

  function resetGame() {
    setScore(0);
    setClicked([]);
    // console.log("resetGame!");
  }

  function shuffleDeck() {
    setDeck(_.shuffle(deck));
  }

  function congratulatePlayer() {
    alert("Congratulations, you won!");
  }

  function onClickActions(senderID) {
    // console.log(clicked);
    // console.log(senderID);

    shuffleDeck();

    if (clicked.includes(senderID)) {
      resetGame();
    } else {
      // console.log("in else");
      setClicked(clicked.concat(senderID));

      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= highscore) setHighscore(newScore);
      if (newScore === numCards) {
        congratulatePlayer();
        resetGame();
      }
    }
  }

  return (
    <div className="App">
      <ScoreBar score={score} highscore={highscore} />
      <Deck cards={deck} onClick={onClickActions} />
    </div>
  );
}

export default App;
