import { useSelector, useDispatch} from "react-redux";
import {counterActions} from '../store/store'

const useCounter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.count.value)
  const increase = () => dispatch(counterActions.increase())
  const decrease = () => dispatch(counterActions.decrease())
  const add = p => dispatch(counterActions.add(p))
  const del = p => dispatch(counterActions.del(p))

  const checkMin = () => counter > 0 ? false : true

  return {counter, increase, decrease, add, del, checkMin}
}

export default useCounter;