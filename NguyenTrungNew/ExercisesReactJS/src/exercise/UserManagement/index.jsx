import React, { useState, useRef } from "react";
import ResultTable from "./Result";
import { Input, Button } from "../../component";
import defaultAvt from "./accets/defaultAvt.jpg";

function UserManagement() {
  const [toggleTextBtn, setToggleTextBtn] = useState("Save");
  const [listUsers, setListUsers] = useState([]);
  const idRef = useRef();
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
              className=" w-full lg:w-[300px]"
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
              className="w-full lg:w-[300px]"
              value={user.doB}
              onChange={changeValue}
            />
          </div>
          <div>
            <p>Address:</p>
            <Input
              type="text"
              name="address"
              className="w-full lg:w-[300px]"
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
              <input
                onChange={changeValue}
                type="file"
                name="avatar"
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4 file:rounded-full 
                file:border-orange-500 font-semibold file:bg-orange-500
                file:text-white
                file:cursor-pointer file:transition-all file:text-xs
                hover:file:bg-white hover:file:text-orange-500 hover:file:border-orange-500
                "
              />
            </label>
          </div>
        </form>
        <div className="flex flex-col gap-4 mt-5 lg:mt-0">
          <div>
            <p>Average Salary</p>
            <Input
              type="number"
              className="w-full lg:w-[300px]"
              name="salary"
              placeholder="Enter your Salary here"
              value={user.salary}
              onChange={changeValue}
            />
          </div>
          <div>
            <p>Description</p>
            <textarea
              rows={3}
              className="border focus:bg-gray-100 border-gray-300 px-3 py-2 rounded-lg ml-[10px] w-full lg:w-[300px] text-sm"
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
              className="px-[10px] py-[10px] rounded-[5px] focus:bg-orange-500 transition-all ml-0 mt-0"
            />
          </div>
          <div>
            <p>Duration</p>
            <select
              name="duration"
              className="
              border border-gray-400 p-1 ml-[15px] rounded-lg
              text-gray-800 cursor-pointer mt-2
              w-full lg:w-[300px]
             "
              value={user.duration}
              onChange={changeValue}
            >
              <option value="">-- Select here --</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row gap-4 my-7 lg:mt-0">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-orange-500 border-orange-500 text-white 
          lg:hover:bg-white lg:hover:text-orange-500 lg:hover:font-medium"
          >
            {toggleTextBtn}
          </Button>
          <Button
            type="button"
            onClick={handleResetValue}
            className="border-orange-500 text-orange-500
          lg:hover:bg-orange-500 lg:hover:text-white lg:hober:font-medium
          "
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="max-w-[1300px] w-full border bg-gray-100 mt-2 rounded-lg shadow-md p-2">
        <div>
          <label htmlFor="searchName">Search:</label>
          <Input
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            name="searchName"
            className="w-[300px]"
            placeholder="Search for user by name..."
          />
          <Button onClick={handleSearchName} className="ml-4 bg-green-500 text-white border-white">Search</Button>
        </div>
        <table className="w-full border mt-4 ">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>DoB</th>
              <th>Address</th>
              <th>Avt</th>
              <th>Salary</th>
              <th>Description</th>
              <th>Gender</th>
              <th>Married</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listUsers.map((user, index) => (
              <ResultTable
                key={user.id}
                user={user}
                index={index}
                editUser={editValue}
                removeUser={removeUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManagement;
