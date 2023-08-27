import {useSelector, useDispatch} from 'react-redux'
import {add, del, amountAdd, amountDel}from "../store/store";

const useCounter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value)
  const addValue = () => dispatch(add())
  const delValue = () => dispatch(del())
  const amountPlus = (val) => dispatch(amountAdd(val))
  const amountRemove = (val) => dispatch(amountDel(val))
  return {value, addValue, delValue, amountPlus, amountRemove}
}

export default useCounter