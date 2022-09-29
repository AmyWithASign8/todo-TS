import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FavouritesPages from "./pages/FavouritesPages";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourite" element={<FavouritesPages />} />
      </Routes>
    </div>
  );
}

export default App;
