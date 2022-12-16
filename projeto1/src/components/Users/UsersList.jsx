import React from "react";
import Card from "../UI/Card";
import styles from './usersList.module.css';

class UsersList extends React.Component{
  render(){
    const {users, onDeleteUser} = this.props;
    return (
      <Card className={styles.users}>
        <ul>
          {
            users.map((el) => <li key={Math.random()} id={el.id} onClick={onDeleteUser} >{`${el.userName} - ${el.age} years old`}</li>)
          }
        </ul>
      </Card>
    )
  }
}

export default UsersList;