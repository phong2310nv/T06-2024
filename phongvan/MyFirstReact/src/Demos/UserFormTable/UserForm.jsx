/* eslint-disable react/prop-types */
import MyInput from "../../components/MyInput";
import MyLabel from "../../components/MyLabel";
import MySelect from "../../components/MySelect";
import MyTextarea from "../../components/MyTextarea";
import MyButton from "../../components/MyButton";
import { INIT_DATA } from ".";
import { useState } from "react";

const UserForm = ({ handleAdd, handleEdit, formData, setFormData }) => {
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    // let isError = false;

    if (!formData.first_name) {
      errors.first_name = "This field is required";
      // isError = true;
    }
    if (!formData.last_name) {
      errors.last_name = "This field is required";
      // isError = true;
    }
    setErrors(errors);
    // if (isError) {
    //   return;
    // }
    //[] ['first_name'] ['first_name','last_name']
    if (Object.keys(errors).length) {
      return;
    }

    if (formData.id) {
      handleEdit(formData);
    } else {
      handleAdd({ ...formData });
    }
    handleReset();
  };
  const handleChange = (e) => {
    const { value, type, name, checked, files } = e.target;

    let realValue = value;
    switch (type) {
      case "checkbox":
        realValue = checked;
        break;
      case "file":
        realValue = files[0];
        break;
      default:
        break;
    }

    setFormData({ ...formData, [name]: realValue });
  };

  const handleReset = () => {
    setErrors({});
    setFormData(INIT_DATA);
  };
  return (
    <div className="w-[500px] border rounded-xl p-4">
      <form onSubmit={handleSubmit}>
        <p>Current Id is: {formData.id}</p>
        <div className="grid gap-6 mb-6 md:grid-cols-2 items-start">
          <div>
            <MyLabel htmlFor="first_name">First name</MyLabel>
            <MyInput
              value={formData.first_name}
              type="text"
              id="first_name"
              name="first_name"
              placeholder="John"
              onChange={handleChange}
              error={errors.first_name}
            />
            {/* <p className="text-red-500">{errors.first_name}</p> */}
          </div>
          <div>
            <MyLabel htmlFor="last_name">Last name</MyLabel>
            <MyInput
              value={formData.last_name}
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Doe"
              onChange={handleChange}
              error={errors.last_name}
            />
            {/* <p className="text-red-500">{errors.last_name}</p> */}
          </div>
          <div>
            <MyLabel htmlFor="salary">Salary</MyLabel>
            <MyInput
              value={formData.salary}
              type="number"
              id="salary"
              name="salary"
              placeholder="100000"
              onChange={handleChange}
            />
          </div>
          <div>
            <MyLabel htmlFor="phone">Phone number</MyLabel>
            <MyInput
              value={formData.phone}
              name="phone"
              type="tel"
              id="phone"
              placeholder="123-45-678"
              onChange={handleChange}
            />
          </div>
          <div>
            <MyLabel>Gender</MyLabel>
            <div>
              <MyLabel>
                <input
                  type="radio"
                  name="gender"
                  value={"male"}
                  onChange={handleChange}
                  checked={formData.gender === "male"}
                />
                <span className="ms-2">Male</span>
              </MyLabel>
              <MyLabel>
                <input
                  type="radio"
                  name="gender"
                  value={"female"}
                  onChange={handleChange}
                  checked={formData.gender === "female"}
                />
                <span className="ms-2">Female</span>
              </MyLabel>
              <MyLabel>
                <input
                  type="radio"
                  name="gender"
                  value={"other"}
                  onChange={handleChange}
                  checked={formData.gender === "other"}
                />
                <span className="ms-2">Other</span>
              </MyLabel>
            </div>
          </div>
          <div className=" flex items-center gap-4 ">
            <input
              type="checkbox"
              className="w-4 h-4"
              id="isMarried"
              name="isMarried"
              onChange={handleChange}
              checked={formData.isMarried}
            />
            <MyLabel className="!mb-0" htmlFor="isMarried">
              Married
            </MyLabel>
          </div>
        </div>
        <div className="mb-4">
          <MyLabel htmlFor="file-input">Avatar</MyLabel>
          <MyInput
            type="file"
            name="avatar"
            id="file-input"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          {/* {formData.avatar ? <img src="" alt="" /> : null} */}
          {formData.avatar && (
            <img
              width={100}
              src={URL.createObjectURL(formData.avatar)}
              alt=""
            />
          )}
        </div>
        <div className="mb-4" htmlFor="description">
          <MyLabel htmlFor="duration">Duration</MyLabel>
          <MySelect
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            items={[
              { label: "One year", value: 1 },
              { label: "Two years", value: 2 },
              { label: "Three years", value: 3 },
              { label: "Four years", value: 4 },
            ]}
          />
        </div>
        <div className="mb-4" htmlFor="description">
          <MyLabel>Description</MyLabel>
          <MyTextarea
            value={formData.description}
            onChange={handleChange}
            id="description"
            name="description"
            placeholder="Something about user"
          />
        </div>

        <div className="flex justify-center gap-5">
          <MyButton type="submit">Submit</MyButton>
          <MyButton variant="purple" onClick={handleReset}>
            Reset
          </MyButton>
          {/* <MyButton variant="green">Submit</MyButton>
          <MyButton variant="red">Submit</MyButton>
          <MyButton variant="yellow">Submit</MyButton> */}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
