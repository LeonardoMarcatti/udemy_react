import { useSelector, useDispatch} from "react-redux";
import {counterActions} from '../store/store'

const useCounter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.count.value)
  const show = useSelector(state => state.count.show)
  const increase = () => dispatch(counterActions.increase())
  const decrease = () => dispatch(counterActions.decrease())
  const add = p => dispatch(counterActions.add(p))
  const del = p => dispatch(counterActions.del(p))
  const toggleShow = () => dispatch(counterActions.toggleShow())

  return {counter, increase, decrease, show, toggleShow, add, del}
}

export default useCounter