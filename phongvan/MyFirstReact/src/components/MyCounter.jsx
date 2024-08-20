const MyCounter = () => {
  const currentDate = Date.now();
  const customClass = "my-class";
  const someData = <span>Phong2</span>;
  return (
    <div>
      <div className={`abc ${customClass}`}>
        <div>
          <div
            style={{
              color: "red",
            }}
          >
            Hello world !! {currentDate}
          </div>
          {null}
          {undefined}
          <div>Good morning {someData}</div>
          <div>{currentDate % 2 === 0 ? "Chan" : "Le"}</div>
        </div>
      </div>
    </div>
  );
};
export default MyCounter;
