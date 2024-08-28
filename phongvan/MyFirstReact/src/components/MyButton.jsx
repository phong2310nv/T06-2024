/* eslint-disable react/prop-types */

const MyButton = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      className="hover:bg-gray-300 whitespace-nowrap active:bg-gray-100 p-2 ml-4 mr-2 border-2 rounded text-green border-green hover:bg-green"
      {...rest}
    >
      {children}
    </button>
  );
};

export default MyButton;
