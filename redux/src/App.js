import NewCounter from './components/NewCounter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import {useSelector} from 'react-redux'

const  App = () => {
  const auth = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
      <Header/>
      {
        auth ? <UserProfile /> : <Auth/>
      }
      <NewCounter />
    </>
  );
}

export default App;
