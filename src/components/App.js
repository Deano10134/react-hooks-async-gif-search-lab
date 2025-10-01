import React from "react";

import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";

// the App component should render out the GifListContainer component
// API key 1B8Mt0eZdnesPC2dWbYsIrMwN02ggSf7

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
