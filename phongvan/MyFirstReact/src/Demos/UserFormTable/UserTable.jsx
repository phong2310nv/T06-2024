/* eslint-disable react/prop-types */
const UserTable = ({ users, setFormData, handleDelete }) => {
  const handleEdit = (userDetail) => {
    setFormData(userDetail);
  };
  return (
    <div className="border rounded p-5 mx-10">
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
            {users.map((user) => {
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
                          handleEdit(user);
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
