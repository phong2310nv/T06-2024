import { useState } from "react";

const StateDemo = () => {
  const [count, setCount] = useState(() => {
    return 10;
  }); // => [abc, xyz]
  const [person, setPerson] = useState({
    name: "Phong",
    age: 25,
    address: "abc",
  });
  // let count = 10;
  const handleAddCount = () => {
    // console.log(`Current count: ${count}`);
    setCount(count + 1);
    // console.log(`After add: ${count}`);
  };
  // console.log(`Current count: ${count}`);

  const addAge = () => {
    // setPerson({ ...person, age: person.age + 1 });
    setPerson((oldData) => {
      return { ...oldData, age: oldData.age + 1 };
    });
  };
  const someJSX = (
    <>
      <p>
        This person is {person.name} and he is {person.age} years old
      </p>
    </>
  );
  const demoType = undefined;
  return (
    <div className="border p-4 mb-4">
      StateAndProps
      <p>{demoType ? <span>OK</span> : <span>Not OK</span>}</p>
      <p>Current number is {count}</p>
      {someJSX}
      <button
        onClick={handleAddCount}
        className="border px-2 rounded active:bg-gray-300"
      >
        Add Number
      </button>
      <button
        onClick={addAge}
        className="border px-2 rounded active:bg-gray-300"
      >
        Add Age
      </button>
    </div>
  );
};

export default StateDemo;
