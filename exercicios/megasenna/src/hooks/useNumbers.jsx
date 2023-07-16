import {useState, useCallback} from 'react';

const useNumber = () => {
  const [numbers, setNumbers] = useState([]);
  const addNumber = useCallback(() => {
    const allNumbers = []
    const sortNumber = () => Math.floor(Math.random() * (60-1) + 1)
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
    setNumbers(allNumbers.sort(order));

  }, [])

  return {numbers, addNumber}

}

export default useNumber;