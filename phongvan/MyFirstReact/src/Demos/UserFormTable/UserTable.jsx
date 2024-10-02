import { useEffect, useMemo, useState } from "react";
import MyInput from "../../components/MyInput";
import MyLabel from "../../components/MyLabel";

/* eslint-disable react/prop-types */
const UserTable = ({ users, onClickEdit, handleDelete }) => {
  const [filterData, setFilterData] = useState({
    search_key: "",
    filter_married: "all",
  });

  const [realKeyword, setRealKeyword] = useState("");

  useEffect(() => {
    // Copy value after 1s
    const timeoutID = setTimeout(() => {
      setRealKeyword(filterData.search_key);
    }, 1000);

    return () => {
      // Clear copy action
      clearTimeout(timeoutID);
    };
  }, [filterData.search_key]);

  // 1 =>  settimeout => tạo ra 1 hàm X nhưng k gọi
  // 2 => gọi X đã được tạo trước đó =>  settimeout

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

  const filteredUser = useMemo(() => {
    return users
      .filter(
        (u) =>
          u.first_name.includes(realKeyword) ||
          u.last_name.includes(realKeyword)
      )
      .filter(
        (u) =>
          filterData.filter_married === "all" ||
          u.isMarried + "" === filterData.filter_married
      );
  }, [filterData.filter_married, realKeyword, users]);

  // true/false   "true"/"false"

  return (
    <div className="border rounded p-5 mx-10">
      <div className="mb-5 flex gap-5">
        <div>
          <MyLabel htmlFor="search_name">Name</MyLabel>
          <MyInput
            value={filterData.search_key}
            type="text"
            id="search_name"
            name="search_key"
            placeholder="Search name"
            onChange={handleChange}
          />
          <div>Input Key: {filterData.search_key}</div>
          <div>Real Key: {realKeyword}</div>
        </div>
        <div>
          <MyLabel>Is Married</MyLabel>
          <div className="flex gap-5">
            <MyLabel>
              <input
                type="radio"
                name="filter_married"
                value={"all"}
                onChange={handleChange}
                checked={filterData.filter_married === "all"}
              />
              <span className="ms-2">All</span>
            </MyLabel>
            <MyLabel>
              <input
                type="radio"
                name="filter_married"
                value={true}
                onChange={handleChange}
                checked={filterData.filter_married === "true"}
              />
              <span className="ms-2">Yes</span>
            </MyLabel>
            <MyLabel>
              <input
                type="radio"
                name="filter_married"
                value={false}
                onChange={handleChange}
                checked={filterData.filter_married === "false"}
              />
              <span className="ms-2">No</span>
            </MyLabel>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Salary
              </th>

              <th scope="col" className="px-6 py-4">
                Phone
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
              <th scope="col" className="px-6 py-4">
                Duration
              </th>
              <th scope="col" className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUser.map((user) => {
              return (
                <tr
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.first_name} {user.last_name}
                  </th>
                  <td className="px-6 py-4">{user.salary}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">
                    {user.isMarried ? "Married" : "Single"} - {user.gender}
                  </td>
                  <td className="px-6 py-4">{user.duration ?? 0} Years</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex gap-5">
                      <a
                        href="#"
                        className="font-medium text-blue-600  hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          onClickEdit(user);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-red-500 hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(user.id);
                        }}
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
