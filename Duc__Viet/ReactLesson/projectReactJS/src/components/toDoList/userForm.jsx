import styles from "./userForm.module.css"
import {useState,useRef} from 'react'
const UserForm = ({addUser}) => {
    const [formData, setformData] = useState({}
      );
      const resetForm = () => {
        setformData({
            first_name: "",
            last_name: "",
            salary: "",
            phone_number: "",
            gender: "",
            isMarried: false,
            imgFile: null,
            duration: "",
            desc: "",
        });
    };

    const handleSubmit= e =>{
        e.preventDefault();
        addUser(formData);
        console.log(formData);
    }
    const handleChange = (e)=>{
        const{value , name , type, checked, files}= e.target;
        if(type ==='file'){
            setformData(prevState =>({...prevState , [name]: files[0]}))
        }
        else if (type ==="checkbox"){
            setformData(prevState =>({...prevState , [name]: checked}))
        }
        else{
            setformData(
                {
                    ...formData , [name]:value
    
                }
            )  
        }
    }

    return(
    <div className="container">
        <form onSubmit={handleSubmit} className={styles.user_form}>
                <h1 className={styles.user_form_title}>User Form Table </h1>
                <div className="input-grid">
                    <div className="row">
                    <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="first-name">First Name</label>
                        <input  onChange={handleChange} type="text" className="form-control" id="first-name"  value={formData.first_name} placeholder="Enter here" name="first_name" />
                            </div>
                        </div>
                         <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="last-name">Last Name</label>
                        <input  onChange={handleChange} name="last_name" value={formData.last_name} type="text" className="form-control" id="last-name" placeholder="Enter here" />
                            </div>
                        </div>
                         <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="salary">Salary</label>
                        <input  onChange={handleChange} name="salary"  type="text"value={formData.salary} className="form-control" id="salary" placeholder="Enter here" />
                            </div>
                        </div>
                         <div className="col col-md-6">
                    <div className={styles.form_group}>
                        <label htmlFor="phone">Phone Number</label>
                        <input  onChange={handleChange} name="phone_number" value={formData.phone_number} type="text" className="form-control" id="phone" placeholder="Enter here" />
                            </div>
                            </div>
                        </div>

                </div>
                <div className={styles.form_group}>
                    <label>Gender</label> 
                    <label>
                    <input  type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChange}
                             />  Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChange} />  Female
                    </label>
                    <label>
                    <input  type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === "other"}
                            onChange={handleChange} />  Other
                        </label>
                      
                </div>
                <div className={styles.form_group}>
                    <label className="form-check-label" htmlFor="isMarried">
                         Married
                    </label>
                     <input checked={formData.isMarried} className="form-check-input" type="checkbox" id="isMarried" name="isMarried" onChange={handleChange}  />
                    
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="form-file" className="form-label">Choose File</label>
                    <input className="form-control" type="file" id="form-file" name="imgFile"
                    onChange={handleChange}></input>
                    
                </div>
                <div className={styles.preview_file}>
                    {formData.imgFile ? <img src={URL.createObjectURL(formData.imgFile)} alt=""/> : null} 
                </div>
             
                <div className={styles.form_group}>
                  <label htmlFor="duration" className="form-label">Duration</label>
                    <select name="duration" id="duration" 
                    onChange ={handleChange} value={formData.duration}
                    className="form-select">
                        <option value="1">1 Year</option    >
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5">5 Years</option>
                    </select>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea name="desc" className="form-control" id="desc" 
                      onChange ={handleChange} rows="3"></textarea>
                    
                </div>
                <div className="action d-flex flex-row justify-content-between">
                 <button 
                 type="submit" 
                 className="btn btn-primary"
                 >Add</button>
                    <button type="button" className="btn btn-secondary"  onClick={resetForm}>Refresh</button>
                    <button 
                    type="button" 
                    className="btn btn-danger"
                  
                    >Submit</button>
                </div>
        </form>
    </div>
    )
}
export default UserForm