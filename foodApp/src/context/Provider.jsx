import cardContext from "./cardContext";

const Provider = props => {
  const {children, onHandleModal} = props
  const addItemHandler = item => {}
  const removeItemHandler = item => {}

  const data = {
    onShow: onHandleModal,
    itens: [],
    total: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <cardContext.Provider value={data}>
      {children}
    </cardContext.Provider>
  )
}

export default Provider;