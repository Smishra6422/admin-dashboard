import React from "react";
import "./App.css";
import AsideBar from "./components/AsideBar/AsideBar.component";
import MainContent from "./components/MainContent/MainContent.component";

function App() {
  return (
    <div className="App">
      <AsideBar />
      <MainContent />
    </div>
  );
}

export default App;
