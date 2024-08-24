const UserForm = () => {
  return (
    <div style={{ width: 500, margin: "auto" }}>
      <div className="card form-container">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">ID</label>
            <input type="text" className="form-control" readOnly id="valId" />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" id="valName" />
          </div>
          <p>
            Avatar:
            <input type="file" className="form-control" id="valAvatar" />
            <img src="" id="previewAvatar" width="100px" />
          </p>
          <div className="mb-3">
            <label className="form-label">Des</label>
            <textarea rows="3" className="form-control" id="valDes"></textarea>
          </div>
          <div className="mb-3">
            Gender
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Male"
            />{" "}
            Male
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Female"
            />{" "}
            Female
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Other"
            />{" "}
            Other
          </div>
          <div>
            Married:
            <input
              className="form-check-input"
              type="checkbox"
              id="valMarried"
            />
          </div>
          <div className="mb-3">
            <label>Duration:</label>
            <select id="valDuration" className="form-select">
              <option value="1">1 năm</option>
              <option value="2">2 năm</option>
              <option value="3">3 năm</option>
              <option value="4">4 năm</option>
              <option value="5">5 năm</option>
            </select>
          </div>
          <div className="d-flex gap-2 justify-content-center">
            <button className="btn btn-success" id="btnSubmit">
              Save
            </button>
            <button className="btn btn-secondary">Reset</button>
            <button className="btn btn-warning">Clear Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserForm;
