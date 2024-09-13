function MyInput({ ...rest }) {
  const { type, className } = rest;
  const realClass =
    type === "file"
      ? ` bg-none border-none
      file:mr-4 file:py-2 file:px-4 file:rounded-full 
                file:border-orange-500 font-semibold file:bg-orange-500
                file:text-white
                file:cursor-pointer file:transition-all file:text-xs cursor-pointer
                hover:file:bg-opacity-70 active:file:bg-opacity-50`
      : ``;
  const radioClass =
    "rounded-full w-[15px] h-[15px] cursor-pointer px-[5px] py-[5px] focus:bg-orange-500 border-black";
  const checkboxClass =
    "px-[10px] py-[10px] rounded-[5px] focus:bg-orange-500 transition-all ml-0 mt-0";
  return (
    <input
      {...rest}
      className={` mt-2 
         read-only:text-gray-500 
        focus:bg-gray-100 border border-gray-300 
        px-3 py-2 text-sm  ml-[10px]
        ${
          type === "radio"
            ? radioClass
            : type === "checkbox"
            ? checkboxClass
            : "rounded-lg w-full lg:w-[300px]"
        }
        ${realClass}
        ${className}
        `}
    />
  );
}

export default MyInput;
