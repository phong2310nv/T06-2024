/* eslint-disable react/prop-types */
const MyButton = (props) => {
  const { children, type = "button", variant = "default", ...rest } = props;
  let colorClasses = "";
  switch (variant) {
    case "default":
      colorClasses = "bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 active:bg-blue-600";
      break;
    case "purple":
      colorClasses = "bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 active:bg-purple-600";
      break;
    case "green":
      colorClasses = "bg-green-400 hover:bg-green-500 focus:ring-green-300 active:bg-green-400";
      break;
    case "yellow":
      colorClasses = "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-400 active:bg-yellow-400";
      break;
    case "red":
      colorClasses = "bg-red-700 hover:bg-red-800 focus:ring-red-300 active:bg-red-700";
      break;
    default:
      break;
  }
  return (
    <button
      className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm   px-5 py-2.5 text-center ${colorClasses} w-auto`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default MyButton;
