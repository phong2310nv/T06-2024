import { useRef, useState } from "react";

const DemoVariable = () => {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef();
  let countVariable = 1 * 2;
  const checkRealValue = () => {
    console.log(`Count State: ${countState}`);
    console.log(`Count Variable: ${countVariable}`);
    console.log(`Count Ref: ${countRef.current}`);
  };
  console.log("Component render");
  return (
    <div className="border rounded p-4 mb-4">
      <button
        className="border px-2 rounded active:bg-gray-300"
        onClick={checkRealValue}
      >
        Check Real Value{" "}
      </button>
      <button
        className="border px-2 rounded active:bg-gray-300"
        onClick={() => {
          setCountState(countState + 1);
        }}
      >
        Add state count
      </button>
      <button
        className="border px-2 rounded active:bg-gray-300"
        onClick={() => {
          countRef.current += 1;
          countVariable += 1;
        }}
      >
        Add ref and variable count
      </button>
      <div>Count State: {countState}</div>
      {/* <div>Count Variable: {countVariable}</div> */}
      {/* <div>Count Ref: {countRef.current}</div> */}
      <input ref={inputRef} className="border px-2 py-1" type="text" />
      <button
        className="border px-2 rounded active:bg-gray-300"
        onClick={() => {
          console.dir(inputRef.current);
          inputRef.current.focus();
        }}
      >
        Focus the input
      </button>
    </div>
  );
};
export default DemoVariable;
