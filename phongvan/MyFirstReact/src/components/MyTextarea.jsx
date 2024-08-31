
const MyTextarea = (props) => {
  return (
    <textarea
      className="block w-full outline-none disabled:opacity-50 disabled:pointer-events-none bg-gray-50 border shadow-md border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 px-3 py-2.5"
      {...props}
    />
  );
};

export default MyTextarea;
