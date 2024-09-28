/* eslint-disable react/prop-types */

import React from "react";
import MyButton from "../../components/MyButton";

const AverageSalaryDisplay = ({
  averageNum,
  aboveAverages,
  AlertNoSalaryMember,
}) => {
  console.log("AverageSalaryDisplay Rendering");
  return (
    <div>
      <div className="px-20 mb-5 text-lg font-bold">
        Average Salary: {averageNum.toFixed(2)}
      </div>
      <div className="px-20 mb-5 text-lg">
        Above average members:
        <ul className=" list-disc">
          {aboveAverages.map((u) => (
            <li key={u.id}>
              {u.first_name} {u.last_name}
            </li>
          ))}
        </ul>
      </div>
      <MyButton
        onClick={() => {
          AlertNoSalaryMember();
        }}
      >
        Alert some user
      </MyButton>
    </div>
  );
};

export default React.memo(AverageSalaryDisplay);
