import React, {forwardRef} from "react";

const Input = forwardRef(({type, label, data}, ref) => {
   const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
   return <div className="text-sm font-bold uppercase text-stone-500">
      <label htmlFor={data} className="text-sm">{label}</label>
      <input type={type} id={data} name={data} className={classes} ref={ref}/>
   </div>
})

export default Input