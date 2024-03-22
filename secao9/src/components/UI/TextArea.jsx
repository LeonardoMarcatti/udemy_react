import React, {forwardRef} from "react";

const TextArea = forwardRef((props, ref) => {
   const {label, name, id} = props
   const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
   return (
      <>
         <label htmlFor={id} className="text-sm font-bold uppercase text-stone-500">{label}</label>
         <textarea name={name} id={id} cols="30" rows="10" className={classes} ref={ref}></textarea>
      </>
   )
})

export default TextArea;