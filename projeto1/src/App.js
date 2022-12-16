import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, age, id) => {
    setUsersList((prevState) => [...prevState, {userName, age, id}]);
  };

  const deleteUser = e => {
    const {id} = e.target;
    setUsersList((prevState) => prevState.filter(el => el.id !== Number(id)));
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      {
        usersList.length > 0 && <UsersList users={usersList} onDeleteUser={deleteUser}/>
      }
    </>
  );
}

export default App;
