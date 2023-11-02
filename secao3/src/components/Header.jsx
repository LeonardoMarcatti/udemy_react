import React from "react";
import core from '../assets/react-core-concepts.png'
import './header.css'

const Header = (props) => {
   const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

   const genRandomInt = () => {
      return Math.floor(Math.random() * 3);
   }

   return (
      <header>
        <img src={core} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRandomInt()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
   )
}

export default Header;