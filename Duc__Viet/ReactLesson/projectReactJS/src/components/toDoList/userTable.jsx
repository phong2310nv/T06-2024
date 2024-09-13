
import styles from "./userForm.module.css"
const UserTable = () => {
    return (
        <div className="container">
            <table className="table table-striped" >
                   <thead>
                    <tr className={styles.table_row}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>  
                    </tr>
                </thead>
                <tbody >
                    <tr className={styles.table_row}>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>johndoe@example.com</td>
                        <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                    
                </tbody>
                
                


                
            </table>
        </div>
    )
    
}
export default UserTable