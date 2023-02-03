import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import Provider from './context/Provider';

function App() {
  const [showModal, setShowModal] = useState(false)
  const handleModal = () => setShowModal(prevState => !prevState)

  return (
    <>
    <Provider onHandleModal={handleModal}>
      {
        showModal && <Cart onClick={handleModal}/>
      }
      <Header/>
      <main>
        <Meals/>
      </main>
    </Provider>
      </>
  );
}

export default App;
