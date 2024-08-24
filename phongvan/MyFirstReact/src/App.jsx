import StateDemo from "./Demos/State";
import StateAndPropDemo from "./Demos/StateAndProps";
import DemoVariable from "./Demos/Variable";
import "./style.scss";
const App = () => {
  return (
    <div className="abc">
      <StateDemo />
      <DemoVariable />
      <StateAndPropDemo />
    </div>
  );
};

export default App;
