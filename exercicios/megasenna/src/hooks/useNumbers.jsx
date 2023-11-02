
import {useSelector, useDispatch} from 'react-redux';
import {pushNumber} from '../store/store'

const useNumber = () => {
  const dispatch = useDispatch()
  const numbers = useSelector(state => state.values)
  const addNumber = (val) => dispatch(pushNumber(val))

  const start = () => {
    const allNumbers = [];
    const sortNumber = () => Math.floor(Math.random() * 59 + 1)
    const checkNumber = (val) => {
      if (allNumbers.indexOf(val) !== -1) {
        return true
      }
      return false
    }

    const order = (a,b) => {
      return a-b;
    }

    for (let i = 0; i < 6; i++) {
      let sortedNumber = sortNumber()
      while (checkNumber(sortedNumber)) {
        sortedNumber = sortNumber()
      }
      allNumbers.push(sortedNumber)
    }

    allNumbers.sort(order)

    addNumber(allNumbers)
  }
  
  return {numbers, start}

}

export default useNumber;