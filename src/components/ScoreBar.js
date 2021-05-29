import "../styles/ScoreBar.css";

function ScoreBar(props) {
  return (
    <div className="ScoreBar">
      <div className="score">Score: {props.score}</div>

      <div className="highscore"> High Score: {props.highscore}</div>
    </div>
  );
}

export default ScoreBar;
