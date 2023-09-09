import {addNumbers} from '../store/store'
import { useAppDispatch, useAppSelector } from '../store/hook'

const useNumber = () => {
  const dispatch = useAppDispatch()
  const numers = useAppSelector(state => state.numbers.value)
  const addNumers = (val: number[]) => dispatch(addNumbers(val))

  const start = () => {
    const myNumbers: number[] = []
    const sortNumber = ():number => Math.floor(Math.random() * 59 + 1)

    const checkNumber = (val:number) => {
      if (myNumbers.indexOf(val) !== -1) {
        return true
      }
      return false
    }

    const order = (a:number, b:number) => {
      return a-b;
    }

    for (let i = 0; i < 6; i++) {
      let sortedNumber = sortNumber()
      while (checkNumber(sortedNumber)) {
        sortedNumber = sortNumber()
      }
      myNumbers.push(sortedNumber)
    }

    myNumbers.sort(order)
    addNumers(myNumbers)
  }
  
  return {numers, start}

}

export default useNumber;