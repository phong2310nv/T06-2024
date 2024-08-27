import React from "react";

function TodoListItem({ data, onclick,onChangeStatus }) {
  const {id,toDo, status} = data;
  return (
    <div className="flex justify-between border-t-2 border-b-2 border-gray-100 shadow items-center m-2 p-3">
      <p className={`${status ? "" : "line-through text-gray-300"}`}>{toDo}</p>
      <div className="flex gap-5 ">
        {status ? (
          <button
            className="border-solid bg-green-400 p-2 text-sm text-white rounded transition-colors hover:bg-green-500"
            onClick={() => onChangeStatus(id)}
          >
            Done
          </button>
        ) : (
          <button
            className="border border-gray-300 text-gray-300 p-2 text-sm rounded transition-colors hover:bg-green-400 hover:text-white"
            onClick={() => onChangeStatus(id)}
          >
            Not Done
          </button>
        )}
        <button
          className="border border-red-400 rounded p-2 text-sm transition-colors  hover:bg-red-400 hover:text-white"
          onClick={() => {
            onclick(id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
