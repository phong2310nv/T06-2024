function MyTextArea(...rest) {
  return (
    <textarea
      {...rest}
      className="border focus:bg-gray-100 border-gray-300 px-3 py-2 rounded-lg ml-[10px] w-full lg:w-[300px] text-sm"
    />
  );
}

export default MyTextArea;
