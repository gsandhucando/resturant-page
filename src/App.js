import React from "react";
import "./App.css";
import PhotoGallery from "./components/PhotoGallery";
import ResturantInfo from "./components/ResturantInfo";

const App = () => {
  return (
    <div className="App">
      <div style={{ height: 70 }} />
      <PhotoGallery />
      <ResturantInfo />
    </div>
  );
};

export default App;