import { useState } from "react";
import MyButton from "../../components/MyButton";
import IntervalDemo from "./IntervalDemo";
import EventListenerDemo from "./EventListenerDemo";

const LifecycleDemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  // Some logic
  // console.log(count);

  // return () => {
  //   console.log(`Clean up running, count is ${count}`);
  // };
  // }, [count]);

  // useEffect(() => {
  //   console.log(`Count1: ${count}, count2:${count2}`);
  // }, [count, count2]);

  // useEffect(() => {
  //   console.log("First run");
  // }, []);

  // useEffect(() => {
  //   console.log("Always run1");
  // });

  // console.log("Always run2");

  return (
    <div>
      <div>Current Count: {count}</div>
      <MyButton
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Count
      </MyButton>
      <div>Current Count2: {count2}</div>
      <MyButton
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Add Count2
      </MyButton>
      {count === 2 && <EventListenerDemo />}
    </div>
  );
};

export default LifecycleDemo;
