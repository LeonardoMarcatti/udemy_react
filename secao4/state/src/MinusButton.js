function MinusButton(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="btn btn-danger"
    >
      Click -1
    </button>
  )
}

export default MinusButton;