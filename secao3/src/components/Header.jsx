import React from "react";
import reactCore from '../assets/react-core-concepts.png'
import styles from'./Header.module.css'

const Header = ({word}) => {
   return <header id={styles['header']} >
        <img src={reactCore} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {word} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
}

export default Header