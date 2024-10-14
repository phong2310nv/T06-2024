import { createContext, useRef, useState } from "react";
import ParentComponent from "./ParentComponent";
import MyButton from "../../components/MyButton";

export const NumberContext = createContext();
export const UserContext = createContext();

const ContextDemo = () => {
  const [number, setNumber] = useState(1);
  const numberRef = useRef(1);
  const addNumber = () => {
    setNumber(number + 1);
  };

  return (
    <NumberContext.Provider value={{ number, addNumber }}>
      <UserContext.Provider value={{ userName: "Phong" }}>
        <MyButton
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Add number
        </MyButton>
        <MyButton
          onClick={() => {
            numberRef.current++;
          }}
        >
          Add number Ref
        </MyButton>
        <MyButton
          onClick={() => {
            console.log(number);
            console.log(numberRef.current);
          }}
        >
          Check current value
        </MyButton>
        <div className="border rounded p-4">
          <h1>
            ContextDemo: {number} {numberRef.current}
          </h1>
          <ParentComponent />
        </div>
      </UserContext.Provider>
    </NumberContext.Provider>
  );
};

export default ContextDemo;
