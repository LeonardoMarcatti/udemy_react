import React, {useState, useRef} from "react";
import Card from "../UI/Card";
import styles from './addUser.module.css';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const userName = useRef('');
  const age = useRef(0);
  const [error, setError] = useState(false);

  const addUserHandler = (e) => {
    e.preventDefault();
    const inputName = userName.current.value;
    const inputAge = Number(age.current.value);
    if (inputName.trim().length === 0 || inputAge < 0) {
      setError({title: 'Input error', message: 'Insert a name and age correctly'});
      return null;
    };
    const id = Math.random();
    props.onAddUser(inputName, inputAge, id);
    userName.current.value = '';
    age.current.value = 0;
  };

  const clearError = () => setError(false);

    return (
      <>
      { error && <ErrorModal title={error.title} message="Insert name and age" onClearError={clearError}/> }
      <Card className={styles.input} >
        <form action="" method="post" onSubmit={addUserHandler}>
          <div>
            <label htmlFor="username">Name:</label>
            <input type="text" name="userName" id="userName" ref={userName}/>
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" id="age" min="0" ref={age} />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
      </>
    )
  }

export default AddUser;