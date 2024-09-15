import UserForm from './components/toDoList/userForm';
import UserTable from './components/toDoList/userTable';
import './App.css';
import { useState } from 'react';

function App() {
  const [users , setUsers] = useState([
  ]);

  // Hàm để thêm user mới vào danh sách
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  return (
    <div>
      {/* Truyền hàm addUser vào UserForm */}
      <UserForm addUser={addUser} />
      <UserTable users={users}/>
    </div>
  );
}

export default App;
