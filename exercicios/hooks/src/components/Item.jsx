import React, {memo} from "react";

const Item = memo((props) => {
   const {name, showMessage} = props
   return <li>
      <button type="button" className="btn btn-warning" onClick={showMessage}>{name}</button>
      </li>
})

export default Item