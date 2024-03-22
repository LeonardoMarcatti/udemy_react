import React, {forwardRef} from "react";

const Input = forwardRef((props, ref) => {
   const {label, name, id, type} = props
   const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
   return (
      <div className="flex flex-col gap-1 my-4">
         <label htmlFor={id} className="text-sm font-bold uppercase text-stone-500">{label}</label>
         <input id={id} name={name} type={type} className={classes} ref={ref}/>
      </div>
   )
})

export default Input;