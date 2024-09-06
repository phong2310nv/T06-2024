import React, { useState, useRef } from "react";
import UserForm from "./userForm/UserForm";
import defaultAvt from "./accets/defaultAvt.jpg";
import ResultDataUser from "./Result";

function UserManagement() {
  const [toggleTextBtn, setToggleTextBtn] = useState("Save");
  const [erorrs, setErrors] = useState({});
  const [listUsers, setListUsers] = useState([]);
  const idRef = useRef();
  const nameRef = useRef();
  const [user, setUser] = useState({
    fullName: "",
    doB: "",
    address: "",
    avatar: defaultAvt,
    salary: "",
    description: "",
    duration: "",
    gender: "male",
    married: false,
  });
  const [searchName, setSearchName] = useState("");

  const changeValue = (e) => {
    const { name, value, checked, type, files } = e.target;
    if (type === "file") {
      setUser({
        ...user,
        avatar: URL.createObjectURL(files[0]),
      });
    } else {
      setUser({
        ...user,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleResetValue = () => {
    setUser({
      fullName: "",
      doB: "",
      address: "",
      avatar: defaultAvt,
      salary: "",
      description: "",
      duration: "",
      gender: "male",
      married: false,
    });
    idRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      const newUser = {
        ...user,
        id: Date.now(),
      };
      // lưu giá trị input vào biến newUser.

      if (idRef.current.value) {
        setListUsers(
          listUsers.map((item) => {
            if (item.id === user.id) {
              return {
                ...newUser,
              };
            }
            return item;
          })
        );
      } else {
        setListUsers([...listUsers, newUser]);
      }

      // Tiến hành kiểm tra, bằng idRef. Nếu trong ref đó có giá trị. thì sẽ thay đổi thông tin của user đó. Nếu không thì lưu user mới.

      setToggleTextBtn("Save");
      handleResetValue();
    }
  };

  const validation = () => {
    const newErrors = {}; // khởi tạo 1 object

    if (!user.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    //Kiểm tra trong fullName nếu chỉ có khoảng trắng hoặc không có ký tự nào thì !user.fullName.trim() sẽ trả lại là true.
    // và gán cặp key tên lỗi và giá trị tương ứng.
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    // Cụm object.keys(newErrors) sẽ trả về 1 mảng bao gồm cái key của trong object.
    // Kết quả của hàm để chỉ trả về true hoặc false dùng để kiểm tra xem có lỗi nào không để ngăn ngừa submit khi có lỗi.
  };

  const editValue = (id) => {
    const userEdit = listUsers.find((user) => user.id === id);
    setUser({
      ...userEdit,
    });
    idRef.current.value = id; // gán value để tiến hàng sửa.
    setToggleTextBtn("Edit");
  };

  const removeUser = (id) => {
    setListUsers(listUsers.filter((item) => item.id !== id));
  };

  const handleSearchName = () => {
    if (searchName) {
      setListUsers(
        listUsers.filter((item) =>
          item.fullName.toUpperCase().includes(searchName.toUpperCase())
        )
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-[30px]">
      <UserForm
        user={user}
        handleSubmit={handleSubmit}
        idRef={idRef}
        nameRef={nameRef}
        changeValue={changeValue}
        toggleTextBtn={toggleTextBtn}
        handleResetValue={handleResetValue}
        errors = {erorrs}
      />

      <ResultDataUser
        searchName={searchName}
        handleSearchName={handleSearchName}
        setSearchName={setSearchName}
        listUsers={listUsers}
        editValue={editValue}
        removeUser={removeUser}
      />
    </div>
  );
}

export default UserManagement;
