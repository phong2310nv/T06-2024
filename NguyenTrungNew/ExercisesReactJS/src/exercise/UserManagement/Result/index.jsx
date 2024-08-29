import { Button } from "../../../component";

function ResultTable({ user, index, editUser, removeUser }) {
  console.log(user);
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
          <img className="h-12 w-12 object-cover rounded-full" src={avatar} />
        </td>
        <td>{salary}</td>
        <td>{description}</td>
        <td>{gender}</td>
        <td>{married ? "Married" : "Single"}</td>
        <td>{duration}</td>
        <td>
          <Button 
          onClick = {() => {editUser(id)}}
          className="mr-2 border-green-500 hover:bg-green-500 hover:text-white active:bg-opacity-50 ">
            Edit
          </Button>
          <Button 
          onClick = {() => {removeUser(id)}}
          className="border-red-500 hover:bg-red-500 hover:text-white active:bg-opacity-50">
            Remove
          </Button>
        </td>
      </tr>
    </>
  );
}

export default ResultTable;
