import React from 'react'

const Button = (props) => {
   const {children, textOnly, className, ...rest} = props
   let cssClasses = textOnly ? 'text-button' : 'button'
   cssClasses += ` ${className}`
   return (
      <button {...rest} className={cssClasses}>{children}</button>
   )
}

export default Button