import React from "react";
import Card from "../UI/Card";
import styles from './usersList.module.css';

class UsersList extends React.Component{
  render(){
    const {users} = this.props;
    return (
      <Card className={styles.users}>
        <ul>
          {
            users.map((el) => <li key={Math.random()} id={el.id} >{`${el.userName} - ${el.age} years old`}</li>)
          }
        </ul>
      </Card>
    )
  }
}

export default UsersList;