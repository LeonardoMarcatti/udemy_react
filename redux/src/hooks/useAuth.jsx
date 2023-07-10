import { useSelector, useDispatch} from "react-redux";
import {authActions} from '../store/store'

// const useCounter = () => {
//   const dispatch = useDispatch()
//   const counter = useSelector(state => state.value)
//   const show = useSelector(state => state.show)
//   const increase = () => dispatch({type: '+'})
//   const decrease = () => dispatch({type: '-'})
//   const add = p => dispatch({type: 'add', amount: p})
//   const del = p => dispatch({type: 'del', amount: p})
//   const toggleShow = () => dispatch({type: 'show'})

//   return {counter, increase, decrease, show, toggleShow, add, del}
// }

const useAuth = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth.isLogged)
  const toggleLog = () => dispatch(authActions.toggleLog())

  return {auth, toggleLog}
}

export default useAuth