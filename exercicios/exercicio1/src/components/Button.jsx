import React from "react";

class Button extends React.Component {
  render() {
    const {value, className, onClick, disabled} = this.props
    return (
      <button type="button" className={className} onClick={onClick} disabled={disabled}>{value}</button>
    )
  }
}

export default Button;