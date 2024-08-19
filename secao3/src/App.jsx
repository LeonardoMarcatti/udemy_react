import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const App  = () => {
  return (
    <>
      <Header word={reactDescriptions[genRandomInt(3)]}/>
      <Main />
    </>
  );
}

export default App;
