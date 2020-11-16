import React from "react";
import win from "../../assets/win.gif";
import lose from "../../assets/lose.gif";

const GameOver = props => {
  const winResult = (
    <div className="win">
      <h2>You won!</h2>
    </div>
  );

  const loseResult = (
    <div className="lose">
      <h2>You lost again!</h2>
      <p>The chosen word was: {props.chosenWord}</p>
    </div>
  );
  console.log(props.wordGuessed);
  return props.wordGuessed ? winResult : loseResult;
};

export default GameOver;
