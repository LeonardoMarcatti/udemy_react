import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';

function App() {
  const isLogged = useSelector(state => state.auth.isLogged)
  return (
    <> 
      <Header/>
      {
        !isLogged ? <Auth/> :  <UserProfile/>
      }
      <Counter />
    </>
  );
}

export default App;
