/* eslint-disable react/prop-types */
const MyLabel = ({ children, className = "", ...rest }) => {
  return (
    <label
      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}
      {...rest}
    >
      {children}
    </label>
  );
};

export default MyLabel;
