import React from "react";
import useToggle from "../hook/useToggle";
import { useSelector } from "react-redux";

const Button = () => {
  const {toggleStatus} = useToggle()
  const status = useSelector(state => state.status)

  return (
    <button 
      type="button"
      onClick={toggleStatus}
      className={`btn ${status? 'btn-danger' : 'btn-success'}`} >
      Toggle Status
    </button>
  );
}


export default Button