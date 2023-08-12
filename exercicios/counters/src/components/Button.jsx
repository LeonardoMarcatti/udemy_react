import React from 'react'

const Button = (props) => {
  console.log('button');
  const {buttonName, onClick, style} = props
  return(
    <button type="button" className={style} onClick={onClick}>{buttonName}</button>
  )
}

export default React.memo(Button)