import { Component } from 'react';
import Users from './Users';
import classes from './UserFinder.module.css';
import Test from './Test';
import UsersContext from '../context/userscContext';

class UserFinder extends Component {
  static contextType = UsersContext

  state = {
    filteredUsers: [],
    searchTerm: ''
  }


  searchChangeHandler = (e) => this.setState({searchTerm: e.target.value})

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      })
    }
  }

  componentDidMount() {
    this.setState({filteredUsers: this.context.users})
  }

  render(){
    return (
      <>
        <div className={classes.finder}>
        <Test label="Show/Hide Label"/>
          <input type='search' onChange={this.searchChangeHandler} id="find"/>
        </div>
        <div className={classes.finder}>
          <Users users={this.state.filteredUsers} />
        </div>
      </>
      
    )
  }
}

// const UserFinder = () => {

//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className={classes.finder}>
//       <Test label="Show/Hide Label"/>
//       <input type='search' onChange={searchChangeHandler} id="find"/>
//       <Users users={filteredUsers} />
//     </div>
//   );
// };

export default UserFinder;