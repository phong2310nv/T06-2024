import { Button } from "../../../component";

function DesktopView({ listUsers, editUser, removeUser }) {
  return (
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
        {listUsers.map((user, index) => {
          const {
            address,
            avatar,
            description,
            doB,
            duration,
            fullName,
            gender,
            id,
            married,
            salary,
          } = user;
          return (
            <>
              <tr className="text-center border border-l-gray-300">
                <td>{index + 1}</td>
                <td>{fullName}</td>
                <td>{doB}</td>
                <td>{address}</td>
                <td className="flex justify-center">
                  <img
                    className="h-12 w-12 object-cover rounded-full"
                    src={avatar}
                  />
                </td>
                <td>{salary}</td>
                <td>{description}</td>
                <td>{gender}</td>
                <td>{married ? "Married" : "Single"}</td>
                <td>{`${
                  duration === "1" ? duration + " year" : duration + " years"
                }`}</td>
                <td>
                  <Button
                    onClick={() => {
                      editUser(id);
                    }}
                    className="mr-2 border-green-500 hover:bg-green-500 hover:text-white active:bg-opacity-50 "
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      removeUser(id);
                    }}
                    className="border-red-500 hover:bg-red-500 hover:text-white active:bg-opacity-50"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default DesktopView;
