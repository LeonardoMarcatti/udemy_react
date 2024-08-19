import React, {memo} from "react";
import styles from './TabButton.module.css'

const TabButton = memo(function TabButton({title, onHandleClick, isSelected}) {
   return <li>
      <button type="button" onClick={onHandleClick} className={isSelected && styles.active}>{title}</button>
   </li>
}) 

export default TabButton