/* eslint-disable react/prop-types */
const MySelect = ({ items = [], ...rest }) => {
  return (
    <select
      className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      {...rest}
    >
      <option value="">Choose one</option>
      {items.map((it) => (
        <option value={it.value} key={it.value}>
          {it.label}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
