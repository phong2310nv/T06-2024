import { useState } from "react";

const TodoDraft = () => {
  const [todo] = useState([
    { status: true, label: "xxx" },
    { status: true, label: "xxx" },
  ]);

  return (
    <div>
      {todo.map((td, index) => (
        <div key={index}>
          <p className={td.status ? "underline" : ""}>{td.label}</p>
          {td.status ? <button>Not done</button> : <button>Done</button>}
        </div>
      ))}
    </div>
  );
};

export default TodoDraft;
