import { useEffect, useState } from "react";
import MyButton from "../../components/MyButton";

const IntervalDemo = () => {
  const [countInterval, setCountInterval] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(countInterval);
    }, 1000);
    console.log("New interval ID", intervalId);

    return () => {
      console.log("Interval ID need to be clear", intervalId);
      clearInterval(intervalId);
    };
  }, [countInterval]);
  return (
    <div>
      Current Count interval is : {countInterval}
      <MyButton
        onClick={() => {
          setCountInterval(countInterval + 1);
        }}
      >
        Add count interval
      </MyButton>
    </div>
  );
};

export default IntervalDemo;
