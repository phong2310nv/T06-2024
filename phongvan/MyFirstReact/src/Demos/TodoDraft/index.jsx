import { useRef, useState } from "react";
import MyButton from "../../components/MyButton";

const TodoDraft = () => {
  // const inputRef = useRef();
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Do homework",
      isDone: false,
    },
    {
      id: 2,
      title: "Go shopping",
      isDone: true,
    },
  ]);
  // [
  //   {
  //     id: 1,
  //     title: "Do homework",
  //     isDone: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Go shopping",
  //     isDone: true,
  //   },
  // ]

  const handleAddTodo = () => {
    // console.dir(inputRef.current);
    // const curValue = inputRef.current.value;
    if (value) {
      const newTodo = {
        id: Date.now(),
        title: value,
        isDone: false,
      };
      const newTodoList = [newTodo, ...todo];
      setTodo(newTodoList);
      setValue("");
      // inputRef.current.value = "";
    }
  };
  const handleDelete = (id) => {
    console.log(id);
    setTodo(todo.filter((td) => td.id !== id));
  };

  const setDone = (id) => {};

  const setUnDone = (id) => {};

  const toggleStatus = (id) => {
    // const newTodoList = todo.map((td) => {
    //   if (td.id === id) {
    //     return {
    //       ...td,
    //       isDone: !td.isDone,
    //     };
    //   }
    //   return td;
    // });
    const newTodoList = todo.map((td) =>
      td.id === id ? { ...td, isDone: !td.isDone } : td
    );
    setTodo(newTodoList);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                value={value}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                // ref={inputRef}
              />
              <MyButton onClick={handleAddTodo}>Add New</MyButton>
            </div>
          </div>
          {value.length >= 20 && (
            <p className="text-red-600">
              Title should not longer that 20 characters
            </p>
          )}
          <label htmlFor="">Current Value is:{value}</label>
          <div>
            {todo.map((td) => (
              <div key={td.id} className="flex mb-4 items-center">
                <p className={`w-full ${td.isDone ? "line-through" : ""}`}>
                  {td.title}
                </p>
                {td.isDone ? (
                  <MyButton
                    onClick={() => {
                      toggleStatus(td.id);
                    }}
                  >
                    Un Done
                  </MyButton>
                ) : (
                  <MyButton
                    onClick={() => {
                      toggleStatus(td.id);
                    }}
                  >
                    Done
                  </MyButton>
                )}
                <MyButton
                  onClick={() => {
                    handleDelete(td.id);
                  }}
                >
                  Remove
                </MyButton>
              </div>
            ))}
            {/* <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">
                Add another component to Tailwind Components
              </p>
              <MyButton>Done</MyButton>
              <MyButton>Remove</MyButton>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green">
                Submit Todo App Component to Tailwind Components
              </p>
              <MyButton>Un Done</MyButton>
              <MyButton>Remove</MyButton>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDraft;
