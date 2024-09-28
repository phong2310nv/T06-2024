import { useCallback, useMemo, useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import { useEffect } from "react";
import SimpleChild from "./SimpleChild";
import AverageSalaryDisplay from "./AverageSalaryDisplay";
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

  const averageNum = useMemo(() => {
    console.log("Calculate Salary");
    if (!users.length) {
      return 0;
    }
    return (
      users.reduce((pre, next) => {
        return pre + +(next.salary || 0);
      }, 0) / users.length
    );
  }, [users]);
  // const arr = [1, 2, 3, 4, 5];
  // const sum = arr.reduce((a, b) => {
  //   return a + b;
  // }, 0);
  // [1,2,3,4,5]  0
  // 0 1 => 1
  // 1 2 => 3
  // 3 3 => 6
  // 6 4 => 10
  // 10 5 => 15

  // const a = 500;
  // const b = 500; // a==b / a===b => true
  // const obj1 = {}; // obj1 === obj2 => false
  // const obj2 = {};

  const aboveAverages = useMemo(() => {
    return users.filter((user) => user.salary > averageNum);
  }, [users, averageNum]);
  // console.log(aboveAverages);

  const AlertNoSalaryMember = useCallback(() => {
    const noSalaryUser = users
      .filter((user) => !user.salary)
      .map((user) => {
        return `${user.first_name} ${user.last_name}`;
      });
    alert(`No Salary members: ${noSalaryUser.join(", ")}`);
  }, [users]);

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
      <SimpleChild />
      <hr className="my-10" />
      {/* <div className="px-20 mb-5 text-lg font-bold">
        Average Salary: {averageNum.toFixed(2)}
      </div> */}
      <AverageSalaryDisplay
        averageNum={averageNum}
        aboveAverages={aboveAverages}
        AlertNoSalaryMember={AlertNoSalaryMember}
      />
      <UserTable
        users={users}
        onClickEdit={onClickEdit}
        handleDelete={handleDeleteUser}
      />
    </div>
  );
};

export default UserFormTableDemo;
