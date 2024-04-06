import React, { useState, useCallback } from 'react'
import Item from './components/Item'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems(prevState => [...prevState, `Item: ${prevState.length}`])
  }

  const showMessage = useCallback((e) => alert(e.target.innerText), [])

  return (
    <>
    <button type="button" className='btn btn-danger' onClick={addItem}>Add Item</button>
      {
        React.Children.toArray(
          items.map((el) => <Item name={el} showMessage={showMessage} />)
        )
      }
    </>
  )
}

export default App
