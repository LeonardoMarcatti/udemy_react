import React, {useContext} from 'react';
import classes from './Navigation.module.css';
import AuthContext from '../../context/auth';
import Button from '../UI/Button/Button';

const Navigation = () => {
  const ctx = useContext(AuthContext);
  {
    return (
    ctx.isLoggedIn && 
      <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <>
            <li>
              <a href="/">Users</a>
            </li>
            <li>
              <a href="/">Admin</a>
            </li>
            <li>
              <Button type="button" onClick={ctx.onLogout} disabled={false}>Logout</Button>
            </li>
            </>
          )}
        </ul>
      </nav>
    )
  }
};

export default Navigation;
