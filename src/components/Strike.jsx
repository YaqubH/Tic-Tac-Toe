// Strike component to render strike-through effects based on winning conditions
function Strike({ strikeClass }) {
  // Renders a div with dynamic class names for different strike effects
  return <div className={`strike ${strikeClass}`}></div>;
}

export default Strike; // Export the Strike component for use in other parts of the application
