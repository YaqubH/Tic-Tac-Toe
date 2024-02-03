// Define game states as constants for easier management of game outcomes and status
const GameState = {
    playerXWins: 0, // State when player X wins the game
    playerOWins: 1, // State when player O wins the game
    draw: 2,        // State when the game ends in a draw
    inProgress: 3,  // State when the game is still in progress
};

export default GameState; // Export the GameState object for use in other parts of the application
