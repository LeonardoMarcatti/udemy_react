import { useSelector, useDispatch, useStore } from "react-redux";

const useCounter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.value)
  const show = useSelector(state => state.show)
  const increase = () => dispatch({type: '+'})
  const decrease = () => dispatch({type: '-'})
  const add = p => dispatch({type: 'add', amount: p})
  const del = p => dispatch({type: 'del', amount: p})
  const toggleShow = () => dispatch({type: 'show'})

  return {counter, increase, decrease, show, toggleShow, add, del}
}

export default useCounter