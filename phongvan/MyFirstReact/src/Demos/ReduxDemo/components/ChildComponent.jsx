/* eslint-disable react/prop-types */
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = () => {
  return (
    <div className="border rounded p-4">
      <h3>ChildComponent</h3>
      <GrandChildComponent />
    </div>
  );
};

export default ChildComponent;
