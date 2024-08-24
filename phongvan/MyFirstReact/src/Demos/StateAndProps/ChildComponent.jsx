/* eslint-disable react/prop-types */

const ChildComponent = (props) => {
  const { count, data2, changeCount } = props;
  console.log(count, "From child");

  return (
    <div>
      <p>From Child,current count is: {count}</p>
      <p>Data: {data2}</p>
      <button
        className="border px-2 rounded active:bg-gray-300"
        onClick={changeCount}
      >
        Add count from child
      </button>
    </div>
  );
};

export default ChildComponent;
