function MySelect({ items = [], ...rest }) {
  return (
    <select
      className="
  border border-gray-400 p-1 ml-[15px] rounded-lg
  text-gray-800 cursor-pointer mt-2
  w-full lg:w-[300px]
 "
      {...rest}
    >
      <option value="">-- Select here --</option>
      {items.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default MySelect;
