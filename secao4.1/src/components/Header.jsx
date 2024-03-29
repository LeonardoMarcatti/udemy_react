import React from "react";

const Header = props => {
  const {src} = props
  return (
    <header>
        <img src={src} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
  )
}

export default Header;