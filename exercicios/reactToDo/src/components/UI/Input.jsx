import React, {forwardRef} from "react";

const Input = forwardRef(function Input({label, type, id, name}, ref) {
   return <div className="flex flex-col w-1/2 m-2">
      <label htmlFor={id} className="text-slate-600 font-bold">{label}</label>
      <input type={type} name={name} id={id} className="h-[3rem] rounded-md px-2 bg-slate-200 shadow-lg" ref={ref}/>
   </div>
})

export default Input