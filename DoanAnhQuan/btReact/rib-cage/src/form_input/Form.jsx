import React, { useRef, useState } from "react";
import Button from "./Button";
export default function Form() {
    const [value, setValue] = useState([
        {
            id: 1,
            title: "Do homework",
            isDone: false,
        },
    ]);
    const [inputValue, setinputValue] = useState("");
   
    const handleClick = () => {
        if (inputValue) {
            let newList = {
                id: Date.now(),
                title: inputValue,
                isDone: false,
            };
            setValue([newList, ...value]);
            setinputValue("")
        }
    };
    const handleId = (id) => {
        setValue(value.filter((item) => id !== item.id));
    };
    const handleToggle = (id) => {
        const newlist = value.map((item) =>
            item.id === id ? { ...item, isDone: !item.isDone } : item
        );
        setValue(newlist);
    };
    const handleChange = (e) => {
        console.log(e.target.value);
        setinputValue(e.target.value);
    };
    return (
        <div>
            <div className="flex mt-4">
                <input
                    value={inputValue}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                />
                <Button onClick={handleClick}>ADD NEW</Button>
            </div>
            <div>
                {value.map((item) => {
                    return (
                        <div key={item.id} className={item.id}>
                            <p>{item.title}</p>
                            <Button
                                onClick={() => {
                                    handleId(item.id);
                                }}
                            >
                                Remove
                            </Button>
                            {item.isDone ? (
                                <Button
                                    onClick={() => {
                                        handleToggle(item.id);
                                    }}
                                >
                                    done
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => {
                                        handleToggle(item.id);
                                    }}
                                >
                                    un done
                                </Button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
