import React, { useState, useRef } from "react";
import { useScreenWidth } from "../../hook";
import { Input, Button, TextArea, Select } from "../../component";
import defaultAvt from "./accets/defaultAvt.jpg";
import { DesktopViewTable, MobileViewTable } from "./Result";

function UserManagement() {
  const [toggleTextBtn, setToggleTextBtn] = useState("Save");
  const [listUsers, setListUsers] = useState([]);
  const idRef = useRef();
  const withResize = useScreenWidth();
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
      <div className="grid grid-cols1 lg:grid-cols-2 bg-gray-100 max-w-[1300px] shadow-md w-full  rounded-lg p-10 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" readOnly hidden ref={idRef} />
          <div>
            <p>Name:</p>
            <Input
              type="text"
              name="fullName"
              placeholder="Enter your full name here"
              value={user.fullName}
              onChange={changeValue}
            />
          </div>
          <div>
            <p>Data Of Birth:</p>
            <Input
              type="date"
              name="doB"
              value={user.doB}
              onChange={changeValue}
            />
          </div>
          <div>
            <p>Address:</p>
            <Input
              type="text"
              name="address"
              placeholder="Enter your address here"
              value={user.address}
              onChange={changeValue}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="shrink-0">
              <img
                className="h-16 w-16 object-cover rounded-full"
                src={user.avatar}
              />
            </div>
            <label className="block">
              <span className="sr-only">Chọn avatar của bạn</span>
              <Input onChange={changeValue} type="file" name="avatar" />
            </label>
          </div>
        </form>
        <div className="flex flex-col gap-4 mt-5 lg:mt-0">
          <div>
            <p>Average Salary</p>
            <Input
              type="number"
              name="salary"
              placeholder="Enter your Salary here"
              value={user.salary}
              onChange={changeValue}
            />
          </div>
          <div>
            <p>Description</p>
            <TextArea
              rows={3}
              placeholder="Enter your description here"
              name="description"
              value={user.description}
              onChange={changeValue}
            />
          </div>
          <div>
            <p>Gender: </p>
            <Input
              type="radio"
              name="gender"
              value="male"
              checked={user.gender === "male"}
              onChange={changeValue}
            />
            Male
            <Input
              type="radio"
              name="gender"
              value="female"
              checked={user.gender === "female"}
              onChange={changeValue}
            />
            Female
            <Input
              type="radio"
              name="gender"
              value="other"
              checked={user.gender === ""}
              onChange={changeValue}
            />
            Other
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="married">Married: </label>
            <Input
              type="checkbox"
              name="married"
              checked={user.married}
              onChange={changeValue}
            />
          </div>
          <div>
            <p>Duration</p>
            <Select
              name="duration"
              id="duration"
              items={[
                { label: "1 year", value: "1" },
                { label: "2 years", value: "2" },
                { label: "3 years", value: "3" },
                { label: "4 years", value: "4" },
                { label: "5 years", value: "5" },
              ]}
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 my-7 lg:mt-0">
          <Button type="submit" onClick={handleSubmit} variant="orange">
            {toggleTextBtn}
          </Button>
          <Button
            type="button"
            onClick={handleResetValue}
            variant="secondaryOrange"
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="max-w-[1300px] w-full border bg-gray-100 mt-2 rounded-lg shadow-md p-2">
        <div>
          <label className="block lg:inline-block" htmlFor="searchName">
            Search:
          </label>
          <Input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            name="searchName"
            placeholder="Search for user by name..."
          />
          <Button variant="success" onClick={handleSearchName}>
            Search
          </Button>
        </div>
        {listUsers.length > 0 ? (
          withResize >= 1024 ? (
            <DesktopViewTable
              listUsers={listUsers}
              editUser={editValue}
              removeUser={removeUser}
            />
          ) : (
            <MobileViewTable
              listUsers={listUsers}
              editUser={editValue}
              removeUser={removeUser}
            />
          )
        ) : (
          <div className="my-5">
            <p className="text-center italic font-light">No users available</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
