function MyButton({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={`border border-gray-700 shadow-sm px-1 py-2 text-sm w-16
      rounded-lg lg:motion-safe:hover:scale-105 active:opacity-50 font-light
      transition-all ${className} `}
    >
      {children}
    </button>
  );
}

export default MyButton;
