import { useRef, useState } from "react";
import MyButton from "../../components/MyButton";

const FormDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "Phong9",
    lastName: "Van",
    gender: "female",
    company: "",
    description: "",
    married: false,
    customGender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { value, name, checked, type, files } = e.target;
    let realValue = "";
    if (type === "checkbox") {
      realValue = "123";
    }
    // Yup/zod + react hook form
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };
  return (
    <div className="border rounded p-4 m-4">
      <form onSubmit={handleSubmit}>
        <div>
          Name:
          <input
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border px-2"
          />
          <input
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border px-2"
          />
        </div>
        <div>
          Is Married:
          <input
            type="checkbox"
            name="married"
            checked={formData.married}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="file" name="photo" />
        </div>
        <div>
          Gender:
          <div>
            <input
              type="radio"
              name="gender"
              value={"male"}
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"female"}
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value={"other"}
              checked={formData.gender === "other"}
              onChange={handleChange}
            />
            Other
          </div>
          {formData.gender === "other" && (
            <div>
              What should we call you:
              <input
                type="text"
                name="customGender"
                className="border px-2"
                value={formData.customGender}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
        <div>
          Company:
          <select
            name="company"
            className="border w-56"
            value={formData.company}
            onChange={handleChange}
          >
            <option value="">Select Company</option>
            <option value="1">Com1</option>
            <option value="2">Com2</option>
            <option value="3">Com3</option>
          </select>
        </div>
        <div>
          <p>Description:</p>
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            className="border px-2 rounded"
          ></textarea>
        </div>
        <div>{JSON.stringify(formData)}</div>
        <MyButton type="submit">Submit</MyButton>
      </form>
    </div>
  );
};

export default FormDemo;
