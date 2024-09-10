import { Fragment } from "react";

/* eslint-disable react/prop-types */
const MyInput = ({ type, error, ...rest }) => {
  const realClass =
    type === "file"
      ? `
        file:border-0
        file:me-4
        file:py-2 file:px-4
      `
      : "px-3 py-2.5";
  return (
    <Fragment>
      <input
        className={`block w-full outline-none disabled:opacity-50 disabled:pointer-events-none bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500  ${realClass}`}
        type={type}
        {...rest}
      />
      {error ? <p className="text-red-500">{error}</p> : null}
    </Fragment>
  );
};

export default MyInput;
