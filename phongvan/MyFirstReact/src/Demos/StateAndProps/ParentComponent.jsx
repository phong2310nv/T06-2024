import { useState } from "react";
import ChildComponent from "./ChildComponent";
import OtherChild from "./OtherChild";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const handleAddCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>From Parent,current count is: {count}</p>
      <button
        className="border px-2 rounded active:bg-gray-300"
        onClick={handleAddCount}
      >
        Add count from parent
      </button>
      <ChildComponent
        count={count}
        changeCount={handleAddCount}
        data2={"XXX"}
      ></ChildComponent>
      <OtherChild>
        <span>Hello</span>
      </OtherChild>
    </div>
  );
};

export default ParentComponent;
