import { useState } from "react";
const ToDoList = () => { 
    const [jobs, setJobs] = useState([]);
    const [newJob, setNewJob] = useState("");
    const handleAddJob = () => {
        if (newJob === "") {
            alert("Vui long nhap 1 gia tri vao o")
            return;
        } else {
            const updatedJobs = [...jobs, newJob];
            setJobs(updatedJobs);
            setNewJob("");
        }
    }
    const handleDeleteJob = (id) => {
        const updatedJobs = jobs.filter((job, index) => index!== id);
        setJobs(updatedJobs);
    }

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
            <h1>To do list </h1>
            <input type="text" 
                className="form-control" 
                placeholder="Add a task" 
                value={newJob}
                onChange={(e) => setNewJob(e.target.value)}/> 
            <button onClick={handleAddJob} className="btn btn-primary mt-3 ">Add</button>
            {/* hienthiketqua */}
            <ul className="list-jobs">
                {jobs.map((job, index) => (
                     <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{job}</span>
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => handleDeleteJob(index)}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
                
            </ul>
            </div>
        
        
    )
    

        
  
}

export default ToDoList;
