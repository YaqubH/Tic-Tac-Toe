import React from 'react';
import GameState from "./GameState";

// GameOver component that displays the game result
function GameOver({ gameState }) {
  let message = '';
  switch (gameState) {
    case GameState.inProgress: // If the game is still in progress, don't display anything
      return null;
    case GameState.playerOWins: // If player O wins, set the message accordingly
      message = 'O Wins';
      break;
    case GameState.playerXWins: // If player X wins, set the message accordingly
      message = 'X Wins';
      break;
    case GameState.draw: // If the game is a draw, set the message accordingly
      message = 'Draw';
      break;
    default: // For any unhandled state, don't display anything
      return null;
  }

  // Return a div with the game over message
  return (
    <div className="game-over" data-text={message}>
      {message}
    </div>
  );
}

export default GameOver;

