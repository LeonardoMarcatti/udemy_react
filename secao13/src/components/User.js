import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  componentWillUnmount(){
    console.log('Unmount now!');
  }
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = props => {
//   const {name} = props
//   return <li className={classes.user}>{name}</li>;
// };

export default User;
