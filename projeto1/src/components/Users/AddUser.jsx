import React from "react";
import Card from "../UI/Card";
import styles from './addUser.module.css';
import Button from "../UI/Button";

class AddUser extends React.Component{
  state = {
    userName: '',
    age: 0
  };

  addUserHandler = (e) => {
    const {onAddUser} = this.props;
    e.preventDefault();
    const {userName, age} = this.state;
    onAddUser(userName, age);
    this.setState({userName: '', age: 0});
  };

  stateHandler = e => {
    const {name, value} = e.target;
    if (name === 'age') {
      if (Number(value) < 0) {
        return null;
      } else {
        this.setState({[name]: Number(value)});
      }
    };

    if (value.trim().length > 0) {
      this.setState({[name]: value});
    } else {
      this.setState({[name]: ''});
    };
  };

  render(){
    const {userName, age} = this.state;
    return (
      <Card className={styles.input} >
        <form action="" method="post" onSubmit={this.addUserHandler}>
          <div>
            <label htmlFor="username">Name:</label>
            <input type="text" name="userName" id="userName" value={userName} onChange={this.stateHandler}/>
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" min="0" value={age} onChange={this.stateHandler}/>
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    )
  }
  
}

export default AddUser;