import { useCallback, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { useEffect } from "react";
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
  // const [count, setCount] = useState();
  const [formData, setFormData] = useState(INIT_DATA);
  const [users, setUsers] = useState([]);
  const loadUser = useCallback(async () => {
    // console.log(count);
    try {
      const response = await fetch(
        "https://66c06562ba6f27ca9a567e99.mockapi.io/employee"
      );
      // console.log(response);
      const data = await response.json();
      // console.log(data);
      setUsers(data);
    } catch (error) {
      console.log("Error", error);
    }
  }, []);
  const handleAddUser = async (payload) => {
    console.log(payload);
    console.log(JSON.stringify(payload));

    const response = await fetch(
      "https://66c06562ba6f27ca9a567e99.mockapi.io/employee",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    alert("Add new data succeed");
    loadUser();
    // setUsers([...users, data]);
  };
  const handleEditUser = async (payload) => {
    console.log(payload);
    console.log(JSON.stringify(payload));

    const response = await fetch(
      `https://66c06562ba6f27ca9a567e99.mockapi.io/employee/${payload.id}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    alert("Update data succeed");

    setUsers(users.map((user) => (user.id === data.id ? data : user)));
    // setUsers(
    //   users.map((user) => {
    //     if (user.id === data.id) {
    //       return data;
    //     } else {
    //       return user;
    //     }
    //   })
    // );
  };

  const handleDeleteUser = async (id) => {
    const isConfirm = confirm("Are you sure to delete this item");
    if (isConfirm) {
      const response = await fetch(
        `https://66c06562ba6f27ca9a567e99.mockapi.io/employee/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      console.log(data);
      setUsers(
        users.filter((user) => {
          return user.id !== id;
        })
      );
    }
  };

  useEffect(() => {
    console.log("First time render");
    loadUser();
  }, [loadUser]);
  // useEffect(() => {
  //   console.log("First time render");
  //   fetch("https://66c06562ba6f27ca9a567e99.mockapi.io/employee")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // }, []);

  const onClickEdit = async (rowData) => {
    console.log(rowData);
    console.log(rowData.id);
    const response = await fetch(
      `https://66c06562ba6f27ca9a567e99.mockapi.io/employee/${rowData.id}`
    );
    const data = await response.json();
    console.log(data);
    setFormData(data);
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
        onClickEdit={onClickEdit}
        handleDelete={handleDeleteUser}
      />
    </div>
  );
};

export default UserFormTableDemo;
