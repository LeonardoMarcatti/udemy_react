import React, {memo} from "react";

const Button = memo(function Button({children, ...props}) {
   return <button {...props}>{children}</button>
})

export default Button