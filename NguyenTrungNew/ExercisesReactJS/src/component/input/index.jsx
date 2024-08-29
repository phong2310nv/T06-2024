function MyInput({ className, ...rest }) {
  const { type } = rest;
  const radio =
    "rounded-full w-[15px] h-[15px] cursor-pointer px-[5px] py-[5px] focus:bg-orange-500 border-black";
  return (
    <input
      {...rest}
      className={` mt-2 
        read-only:bg-gray-200 read-only:text-gray-500 read-only:cursor-not-allowed read-only:focus:bg-gray-200
        focus:bg-gray-100 border border-gray-300 
        px-3 py-2 text-sm  ml-[10px]
        ${type === "radio" ? radio : "rounded-lg"}
        ${className}
        `}
    />
  );
}

export default MyInput;
