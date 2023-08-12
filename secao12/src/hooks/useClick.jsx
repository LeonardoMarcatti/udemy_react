import { useState, useCallback } from "react";

const useClick = () => {
  const [showP, setShowP] = useState(false)
  const handleClick = useCallback (() => setShowP(prevState => !prevState),[])
  return {showP, handleClick}
}

export default useClick;
