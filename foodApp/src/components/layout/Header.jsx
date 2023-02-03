import React, {useState} from "react";
import style from './Header.module.css';
import meals from '../../assets/meals.jpg';
import Button from "./Button";
import Clock from "../Clock";

const Header = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  return (
    <>
      <header className={style.header}>
        <h1>React Meals</h1>
        <Clock onSetClock={setClock} onClock={clock}/>
        <Button/>
      </header>
      <div className={style['main-image']}>
        <img src={meals} alt="A table full of meals" />
      </div>
    </>
  );
}


export default Header;
