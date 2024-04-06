import React from "react";

const Input = React.forwardRef((props, ref) => {
   const {className, id, type, label} = props

   return (
      <div className={className}>
         <label htmlFor={id}>{label}</label>
         <input type={type} id={id} ref={ref} />
      </div>
   )

})

export default Input