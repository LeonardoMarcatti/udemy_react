import { useState, useCallback } from "react";

const useCounter = () => {
  const [value, setValue] = useState(0)
  const changeValue = useCallback((p) => {
    if (p === true) {
      setValue((prevState) => prevState + 1)
    } else{
      setValue((prevState) => prevState - 1)
    }
  },[])
  return {value, changeValue}
}

export default useCounter