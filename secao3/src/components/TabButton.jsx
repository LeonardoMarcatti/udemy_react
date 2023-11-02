import React from "react";
import './TabButton.css'

const TabButton = (props) => {
   const {title, onSelect, isActive} = props
   const adjustTitle = (title) => {
      if (title === 'jsx') {
         return title.toUpperCase()
      }

      return `${title[0].toUpperCase()}${title.substring(1)}`
   }
   return (
      <li>
         <button className={isActive ? 'active' : ''} onClick={() => onSelect(title)}>{adjustTitle(title)}</button>
      </li>
   )
}

export default TabButton