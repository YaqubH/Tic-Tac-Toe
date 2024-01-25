import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return null;
  }
  return (
    <button onClick={onReset} className="button-64">
      <span className="text">Play Again</span>
    </button>
  );
}

export default Reset;