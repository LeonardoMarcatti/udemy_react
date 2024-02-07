import Counter from './components/Counter'
import {useSelector} from 'react-redux'
import Auth from './components/Auth'
import Header from './components/Header'

const  App = () => {
  const auth = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      
      {
        !auth && <Auth/>
      }

      {
        auth && <Header />
      }
      <Counter />
    </>
  );
}

export default App;
