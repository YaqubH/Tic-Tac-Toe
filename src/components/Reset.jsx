import GameState from "./GameState";

// Reset component to provide a play again button when the game is not in progress
function Reset({ gameState, onReset }) {
  // If the game is in progress, do not render the reset button
  if (gameState === GameState.inProgress) {
    return null;
  }
  // Render the reset button to allow starting a new game
  return (
    <button onClick={onReset} className="button-64">
      <span className="text">Play Again</span>
    </button>
  );
}

export default Reset; // Export the Reset component for use elsewhere in the application
