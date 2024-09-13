import styles from "./userForm.module.css"

const UserForm = () => {
    return(
    <div className="container">
        <form className={styles.user_form}>
                <h1 className={styles.user_form_title}>User Form Table </h1>
                <div className="input-grid">
                    <div className="row">
                    <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" className="form-control" id="first-name" placeholder="Enter here" />
                            </div>
                        </div>
                         <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" className="form-control" id="last-name" placeholder="Enter here" />
                            </div>
                        </div>
                         <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="salary">Salary</label>
                        <input type="text" className="form-control" id="salary" placeholder="Enter here" />
                            </div>
                        </div>
                         <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter here" />
                            </div>
                            </div>
                        </div>

                </div>
                <div className={styles.form_group}>
                    <label>Gender</label>
                    <label>
                    <input  type="radio"
                            name="gender"
                            value="male" />  Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female" />  Female
                    </label>
                    <label>
                    <input  type="radio"
                            name="gender"
                            value="other" />  Other
                        </label>
                      
                </div>
                <div className={styles.form_group}>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                         Married
                    </label>
                     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="form-file" className="form-label">Choose File</label>
                    <input className="form-control" type="file" id="form-file"></input>
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="duration" className="form-label">Duration</label>
                    <select name="duration" id="duration" className="form-select">
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5">5 Years</option>
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" id="desc" rows="3"></textarea>
                    
                </div>
                <div className="action d-flex flex-row justify-content-between">
                 <button type="button" className="btn btn-primary">Add</button>
                    <button type="button" className="btn btn-secondary">Refresh</button>
                    <button type="button" className="btn btn-danger">Submit</button>
                </div>
        </form>
    </div>
    )
}
export default UserForm