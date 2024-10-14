import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../../components/MyButton";
import {
  decrementByPhong,
  incrementByHang,
  incrementByN,
} from "../store/slices/counterSlide";
import { useState } from "react";
import MyInput from "../../../components/MyInput";

/* eslint-disable react/prop-types */
const GrandChildComponent = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  console.log(counter);
  const [num, setNum] = useState(1);

  return (
    <div className="border rounded p-4">
      <h4>GrandChildComponent: {counter.value}</h4>
      <MyButton
        onClick={() => {
          dispatch(incrementByHang());
        }}
      >
        Increase
      </MyButton>
      <MyButton
        onClick={() => {
          dispatch(decrementByPhong());
        }}
      >
        Decrease
      </MyButton>
      <MyButton
        onClick={() => {
          dispatch(incrementByN(num));
        }}
      >
        Increase by N
      </MyButton>
      <MyInput
        type={"number"}
        value={num}
        onChange={(e) => {
          setNum(+e.target.value);
        }}
      />
    </div>
  );
};

export default GrandChildComponent;
