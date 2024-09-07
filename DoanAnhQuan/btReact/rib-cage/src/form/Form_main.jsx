import React, { useState } from "react";
import Form_text from "./Form_text";
import Form_file from "./Form_file";
import Form_textarea from "./Form_textarea";
import Form_option from "./Form_option";
import "./form_main.css";
export default function Form_main() {
    const [form, setFormData] = useState({
        id: Date.now(),
        userName: "",
        des: "",
        isMarried: false,
        duction: "",
        avatar: "",
        gender: "male",
    });
    const [value, setValue] = useState([]);
    const [idEdit, setIdEdit] = useState(null);
    const [edit, setEdit] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(edit){
            setValue((preV) => preV.map((item) => item.id === idEdit ? {...form, id: idEdit} : item));
            setEdit(false);
            setIdEdit(null);
        }else{
            setValue((preV) => [...preV, form]);
        }
        setFormData({
            id: Date.now(),
            userName: "",
            des: "",
            isMarried: false,
            duction: "",
            avatar: "",
            gender: "male",
        });
    };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleDelete = (id) => {
        setValue((preV) => preV.filter((item) => id !== item.id));
    };
    const handleEdit = (id) => {
        const userToEdit = value.find((item) => item.id === id);
        setFormData(userToEdit);
        setIdEdit(id);
        setEdit(true);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 id="title"></h1>
                <Form_text type="text" disabled={true} title="id" />
                <Form_text
                    type="text"
                    title="Name"
                    value={form.userName}
                    onChange={handleChange}
                    name="userName"
                />
                <Form_file type="file" title="avatar" />
                <Form_textarea
                    value={form.des}
                    onChange={handleChange}
                    name="des"
                />

                <div className="box_gender">
                    <p>Gender:</p>
                    <Form_text
                        type="radio"
                        title="Male"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        checked={form.gender === "male"}
                    />
                    <Form_text
                        type="radio"
                        title="Female"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        checked={form.gender === "female"}
                    />
                    <Form_text
                        type="radio"
                        title="Other"
                        name="gender"
                        value="other"
                        onChange={handleChange}
                        checked={form.gender === "other"}
                    />
                </div>
                <div className="box_gender">
                    <p>Married:</p>
                    <Form_text
                        type="checkbox"
                        name="isMarried"
                        onChange={handleChange}
                        checked={form.isMarried}
                    />
                </div>

                <Form_option
                    title="Duration"
                    name="duction"
                    value={form.duction}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Des</th>
                        <th>Gender</th>
                        <th>Married</th>
                        <th>Ducation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.userName}</td>
                            <td>
                                <img
                                    src={item.avatar}
                                    alt="Avatar"
                                    width="100px"
                                />
                            </td>
                            <td>{item.des}</td>
                            <td>{item.gender}</td>
                            <td>
                                {item.isMarried ? "Đã kết hôn" : "Độc thân"}
                            </td>
                            <td>{item.duction}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>
                                    Xóa
                                </button>
                                <button onClick={() => handleEdit(item.id)}>
                                    Sửa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
