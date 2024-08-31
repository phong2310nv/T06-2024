import UserForm from "./UserForm";
import UserTable from "./UserTable";

const UserFormTableDemo = () => {
  return (
    <div>
      <h1>UserFormTableDemo</h1>
      <div className="flex justify-center">
        <UserForm />
      </div>
      <hr className='my-20' />
      <UserTable />
    </div>
  );
};

export default UserFormTableDemo;
