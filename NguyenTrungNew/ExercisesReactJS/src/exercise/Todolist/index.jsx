import React, { useRef, useState } from "react";
import TodoListItem from "./TodoListItem";

function Todolist() {
  const [listTodo, setListTodo] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const inputRef = useRef();

  const handleSubmitForm = () => {
    setListTodo([
      ...listTodo,
      {
        id: Date.now(),
        toDo: inputTodo,
        status: true,
      },
    ]);
    setInputTodo("");
    inputRef.current.focus();
  };

  const handleRemoveItem = (id) => {
    setListTodo(listTodo.filter((item) => item.id !== id));
  };

  const handleChangeStatus = (id) => {
    setListTodo(
      listTodo.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  };

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h3 className="text-grey-darkest">Todo List</h3>
          <div className="flex mt-4">
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker "
              placeholder="Add Todo"
              onChange={(e) => {
                setInputTodo(e.target.value);
              }}
              value={inputTodo}
              ref={inputRef}
            />
            <button
              className="flex-no-shrink p-2 border-2 rounded text-green-500 border-green-500 transition-colors hover:text-white hover:bg-green-500"
              onClick={handleSubmitForm}
            >
              Add
            </button>
          </div>
        </div>
        {listTodo.map((item, index) => {
          return (
            <TodoListItem
              data={item}
              onclick={handleRemoveItem}
              onChangeStatus={handleChangeStatus}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
