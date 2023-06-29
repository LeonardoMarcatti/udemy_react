import React, {useState, useCallback} from 'react';

const useNumber = () => {
  const [numbers, setNumbers] = useState([]);
  const addNumber = useCallback(() => {
    const allNumbers = []
    const sortNumber = () => Math.floor(Math.random() * (60-1) + 1)
    const checkNumber = (val) => {
      if (allNumbers.indexOf(val) !== -1) {
        return false
      }
      return true
    }

    const order = (a,b) => {
      return a-b;
    }

    for (let i = 0; i < 6; i++) {
      const sortedNumber = sortNumber()
      while (checkNumber(sortedNumber)) {
        allNumbers.push(sortedNumber)
      }
    }
    setNumbers(allNumbers.sort(order));

  }, [])

  return {numbers, addNumber}

}

export default useNumber;