import React from "react";

const Button = ({...props}) => {
   const {onClick} = props
   return (
      <button type="button" className='px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500' onClick={onClick} >Sign In</button>
   )
}

export default Button;