function MyButton(props) {
  const { children, variant = "default", ...rest } = props;
  let colorClasses = "";
  switch (variant) {
    case "default":
      colorClasses = "";
      break;
    case "orange":
      colorClasses =
        "bg-orange-500 border-orange-500 text-white lg:hover:bg-white lg:hover:text-orange-500 lg:hover:font-medium";
      break;
    case "secondaryOrange":
      colorClasses =
        "border-orange-500 text-orange-500 lg:hover:bg-orange-500 lg:hover:text-white lg:hober:font-medium";
      break;
    case "success":
      colorClasses = "ml-4 bg-green-500 text-white border-white hover:bg-white hover:text-green-500 hover:border-green-500 text-green-500";
      break;
    case "danger":
      colorClasses =
        "border-red-500 hover:bg-red-500 hover:text-white";
      break;
    default:
      break;
  }
  return (
    <button
      {...rest}
      className={`border border-gray-700 shadow-sm px-1 py-2 text-sm w-16
      rounded-lg lg:motion-safe:hover:scale-105 active:opacity-50 font-light
      transition-all ${colorClasses}`}
    >
      {children}
    </button>
  );
}

export default MyButton;
