import React from "react";

const SimpleChild = () => {
  console.log("SimpleChild Rendering");
  return <div>SimpleChild</div>;
};

export default React.memo(SimpleChild);
