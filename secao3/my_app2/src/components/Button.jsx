function Button(props) {
  const { onClick, className, disabled } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      Click me!
    </button>
  )
}

export default Button;