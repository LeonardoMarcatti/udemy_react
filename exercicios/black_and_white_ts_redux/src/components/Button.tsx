import { useAppDispatch } from "../store/hooks"
import { toggle } from "../store/store";

interface Props {
   txt: string
   className: string
}

const Button = (props: Props) => {
   const {txt, className} = props
   const dispatch = useAppDispatch();
   const chooseMode = () => {
      dispatch(toggle())
    }

   return (
      <>
         <button type="button" onClick={() => chooseMode()} className={className}>{txt}</button>
      </>
   )
}

export default Button;