import React, {forwardRef} from "react";

const TextArea = forwardRef(function TextArea({id, name, label}, ref) {
   return <div className="flex flex-col w-1/2 m-2">
      <label htmlFor={id} className="text-slate-600 font-bold">{label}</label>
      <textarea name={name} id={id} rows='6' className="bg-slate-200 shadow-lg" ref={ref}></textarea>
   </div> 
})

export default TextArea