import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      <ul className="navbar-nav">
      <li className="instruction">
          <div>MEMORY</div>
  
            <div className="instruction">Can you remember where the cards are?</div>
        </li>
        <li className="nav-item">
          <div className="restart" onClick={() => props.newGame()}>
            Restart Game
          </div>
        </li>
        <li className="nav-item">
         
              <div className="wins">Wins: {props.wins} </div>         
              <div className="losses">Losses: {props.losses} </div>
          
        </li>
        <li className="nav-item">
            <div className="score">Current Score: {props.score}/8</div>

            <div className="wrongGuesses">Incorrect Guesses: {props.wrongGuesses}/8</div>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;