import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
export const INIT_DATA = {
  first_name: "",
  last_name: "",
  salary: "",
  phone: "",
  avatar: null,
  isMarried: true,
  description: "",
  gender: "male",
  duration: 1,
};
const UserFormTableDemo = () => {
  const [formData, setFormData] = useState(INIT_DATA);
  const [users, setUsers] = useState([]);
  const handleAddUser = (data) => {
    setUsers([...users, data]);
  };
  const handleEditUser = (data) => {
    // setUsers(users.map((user) => (user.id === data.id ? data : user)));
    setUsers(
      users.map((user) => {
        if (user.id === data.id) {
          return data;
        } else {
          return user;
        }
      })
    );
  };

  const handleDeleteUser = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
  };

  return (
    <div>
      <h1>UserFormTableDemo</h1>
      <div className="flex justify-center">
        <UserForm
          handleAdd={handleAddUser}
          handleEdit={handleEditUser}
          formData={formData}
          setFormData={setFormData}
        />
      </div>
      <hr className="my-10" />
      <UserTable
        users={users}
        setFormData={setFormData}
        handleDelete={handleDeleteUser}
      />
    </div>
  );
};

export default UserFormTableDemo;
