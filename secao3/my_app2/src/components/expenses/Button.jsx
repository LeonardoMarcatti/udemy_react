function Button(props) {
  const { onClick, className, value } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {value}
    </button>
  )
}

export default Button;