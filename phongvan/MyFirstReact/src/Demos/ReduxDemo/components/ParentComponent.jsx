/* eslint-disable react/prop-types */
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div className="border rounded p-4">
      <h2>ParentComponent</h2>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
