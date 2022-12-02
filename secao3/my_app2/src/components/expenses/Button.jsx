function Button(props) {
  const { className, value, onDelExpense, id } = props;
  return (
    <button
      type="button"
      className={className}
      id={id}
      onClick={onDelExpense}
    >
      {value}
    </button>
  )
}

export default Button;