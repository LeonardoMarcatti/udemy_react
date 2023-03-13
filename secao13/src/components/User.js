import classes from './User.module.css';

const User = props => {
  const {name} = props
  return <li className={classes.user}>{name}</li>;
};

export default User;
