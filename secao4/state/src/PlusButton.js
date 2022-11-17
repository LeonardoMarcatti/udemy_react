function PlusButton(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="btn btn-success"
    >
      Click +1
    </button>
  )
}

export default PlusButton;