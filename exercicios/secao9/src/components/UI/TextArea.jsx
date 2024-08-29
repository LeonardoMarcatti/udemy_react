import React, {forwardRef} from "react";

const TextArea = forwardRef(function TextArea({label, data}, ref) {
   const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 resize-none'
   return <div className="flex-col">
      <label htmlFor={data} className="text-sm font-bold uppercase text-stone-500">{label}</label>
      <textarea id={data} name={data} className={classes} rows="5" ref={ref}></textarea>
   </div>
})

export default TextArea