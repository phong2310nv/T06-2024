/* eslint-disable react/prop-types */
const OtherChild = ({ children }) => {
  console.log("OtherChild Render");
  return (
    <div>
      OtherChild
      <div>{children}</div>
    </div>
  );
};

export default OtherChild;
