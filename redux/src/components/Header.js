import classes from './Header.module.css';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const {auth, toggleLog} = useAuth()
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {
          auth && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button type="button" onClick={toggleLog}>Logout</button>
          </li>
        </ul>
        }
        
      </nav>
    </header>
  );
};

export default Header;
