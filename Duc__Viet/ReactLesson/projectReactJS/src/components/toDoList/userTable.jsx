import styles from "./userForm.module.css"

const UserTable = ({ users }) => {
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr className={styles.table_row}>
            <th> Name</th>
            <th>Salary</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Married</th>
            <th>Duration</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id} className={styles.table_row}> {/* Sử dụng user.id thay vì index */}
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.salary}</td>
                <td>{user.phone_number}</td>
                <td>{user.gender}</td>
                <td>{user.isMarried ? 'Yes' : 'No'}</td>
                <td>{user.duration}</td>
                <td>{user.desc}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
