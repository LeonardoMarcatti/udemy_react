import {useState, useEffect} from "react";

const useCounter = (p = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if (p) {
        setCounter((prevCounter) => prevCounter + 1);
        
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
  }, [p]);

  return counter
}

export default useCounter