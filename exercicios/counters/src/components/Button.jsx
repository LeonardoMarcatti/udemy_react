import React, {memo} from 'react'

const Button = memo((props) => {
  console.log('button');
  const {buttonName, onClick, style} = props
  return(
    <button type="button" className={style} onClick={onClick}>{buttonName}</button>
  )
})

export default Button