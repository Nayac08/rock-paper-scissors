import { useState } from "react";
import "./Game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist, faHand, faHandScissors } from "@fortawesome/free-solid-svg-icons";

export default function Game() {
  const convert = {
    0: faHandBackFist,
    1: faHand,
    2: faHandScissors,
  };
  const [userChoice, setUserChoice] = useState(null);
  const [comChoice, setComChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);

  function battle(userSelect) {
    setUserChoice(userSelect);
    const comSelect = Math.floor(Math.random() * 3);
    setComChoice(comSelect);
    // rock-paper-scissors algorithm
    if (Math.abs(userSelect - comSelect) == 0) {
      return 0;
    } else if (Math.abs(userSelect - comSelect) == 1) {
      if (userSelect > comSelect) {
        setUserScore(userScore + 1);
      } else {
        setComScore(comScore + 1);
      }
    } else {
      if (userSelect < comSelect) {
        setUserScore(userScore + 1);
      } else {
        setComScore(comScore + 1);
      }
    }
  }

  return (
    <>
      <div className="container">
        <p className="title">Welcome to rock, paper, scrssors game</p>
        <div className="select-group">
          <button
            className="rock"
            onClick={() => {
              battle(0);
            }}
          >
            Rock
          </button>
          <button
            className="paper"
            onClick={() => {
              battle(1);
            }}
          >
            Paper
          </button>
          <button
            className="scissors"
            onClick={() => {
              battle(2);
            }}
          >
            Scissors
          </button>
        </div>
        <div>
          <div className="user-select">
            <p>User</p>
            <FontAwesomeIcon icon={convert[userChoice]} style={{ color: "#ffffff" }} className="icon" />
          </div>
          <div className="com-select">
            <p>Computer</p>
            <FontAwesomeIcon icon={convert[comChoice]} style={{ color: "#ffffff" }} className="icon" />
          </div>
        </div>

        <p className="score">Your Score: {userScore}</p>
        <p className="score">Computer Score: {comScore}</p>
      </div>
    </>
  );
}
