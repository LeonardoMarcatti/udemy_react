import React, {useState, useEffect} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const getSessionStorage = () => {
    return (sessionStorage.getItem('users') !== '')? JSON.parse(sessionStorage.getItem('users')) : false;
  }

  const saveInSessionStorage = (userName, age, id) => {
    const list = getSessionStorage();
    if (list) {
      list.unshift({userName, age, id});
      sessionStorage.setItem('users', JSON.stringify(list));
    } else {
      sessionStorage.setItem('users', JSON.stringify([{userName, age, id}]));
    }    
  }

  const addUserHandler = (userName, age, id) => {
    saveInSessionStorage(userName, age, id);
    const list = getSessionStorage();
    setUsersList(list);
  };

  useEffect(() => {
    const list = getSessionStorage();
    list && setUsersList(list);
  }, []);

  const getFilteredUsers = id => {
    const list = getSessionStorage();
    return list.filter(el => el.id !== Number(id));
  }

  const updateSessionStorage = id => {
    const list = getFilteredUsers(id);
    sessionStorage.setItem('users', JSON.stringify(list));
  }

  const deleteUser = e => {
    const {id} = e.target;
    updateSessionStorage(id);
    setUsersList((prevState) => {
      return prevState.filter(el => el.id !== Number(id));
  });
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
