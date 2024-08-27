import React, {memo} from "react";

const TextArea = memo(function TextArea({label, ...props}) {
   const classes = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 resize-none'
   return <div className="flex-col">
      <label htmlFor="" className="text-sm font-bold uppercase text-stone-500">{label}</label>
      <textarea {...props} className={classes} rows="5"></textarea>
   </div>
})

export default TextArea