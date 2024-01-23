import {useSelector, useDispatch} from 'react-redux'
import {add, del, amountAdd, amountDel}from "../store/store";
import {useCallback} from 'react';

const useCounter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.value)
  const addValue = useCallback(() => dispatch(add()), [dispatch])
  const delValue = useCallback(() => dispatch(del()), [dispatch])
  const amountPlus = useCallback(() => dispatch(amountAdd(5)), [dispatch])
  const amountRemove = useCallback(() => dispatch(amountDel(5)), [dispatch])
  return {value, addValue, delValue, amountPlus, amountRemove}
}

export default useCounter