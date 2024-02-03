// Tile component to represent a single tile in the game board
function Tile({ className, value, onClick, playerTurn }) {
  // Determine the hover class based on the current player's turn and tile's state
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    // Apply a hover class indicating the current player's turn if the tile is empty
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  // Render the tile with dynamic classes and display its value
  return (
    <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
      {value}
    </div>
  );
}

export default Tile; // Export Tile for use in other parts of the application
