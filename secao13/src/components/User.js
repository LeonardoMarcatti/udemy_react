import classes from './User.module.css';

class User {
  render(){
    
  }
}

const User = props => {
  const {name} = props
  return <li className={classes.user}>{name}</li>;
};

export default User;
