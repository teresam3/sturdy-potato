import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbtron/Jumbotron";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Input />
    </div>
  );
}

export default App;
