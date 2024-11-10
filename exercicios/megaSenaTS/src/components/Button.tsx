import { ButtonProps } from "../interfaces/interfaces";

const Button = (props: ButtonProps) => {
   const {txt, className, onClick} = props
   return (
      <button type="button" onClick={onClick} className={className}>{txt}</button>
   )
}

export default Button