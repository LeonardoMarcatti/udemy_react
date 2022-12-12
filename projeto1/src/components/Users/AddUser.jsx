import React from "react";
import Card from "../UI/Card";
import styles from './addUser.module.css';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

class AddUser extends React.Component{
  state = {
    userName: '',
    age: 0,
    id: '',
    error: false
  };

  addUserHandler = (e) => {
    const {onAddUser} = this.props;
    e.preventDefault();
    const {userName, age} = this.state;
    if (userName.length === 0 || age < 0) {
      this.setState({error: {title: 'Invalid input', message: 'Please enter valid name and age'}})
      return null;
    }
    onAddUser(userName, age, Math.random());
    this.setState({userName: '', age: 0, id: ''});
  };

  clearError = () => this.setState({error: false});

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
    const {userName, age, error} = this.state;
    return (
      <>
      { error && <ErrorModal title={error.title} message={error.message} onClearError={this.clearError}/> }
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
      </>
    )
  }
  
}

export default AddUser;