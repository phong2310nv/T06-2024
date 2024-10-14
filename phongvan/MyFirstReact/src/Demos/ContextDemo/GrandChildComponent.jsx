import { useContext } from "react";
import { NumberContext, UserContext } from ".";
import MyButton from "../../components/MyButton";

/* eslint-disable react/prop-types */
const GrandChildComponent = () => {
  const { addNumber, number } = useContext(NumberContext);
  const { userName } = useContext(UserContext);
  return (
    <div className="border rounded p-4">
      <h4>GrandChildComponent: {number}</h4>
      <h5>{userName}</h5>
      <MyButton
        onClick={() => {
          addNumber();
        }}
      >
        Add number
      </MyButton>
    </div>
  );
};

export default GrandChildComponent;
