import { useState, useCallback } from "react";

const useToggle = () => {
  const [state, setState] = useState(true)
  const changeState = useCallback(() => {
    setState(prevState => !prevState)
  }, [])

    return {state, changeState}

}

export default useToggle;