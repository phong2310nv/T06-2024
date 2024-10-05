import ParentComponent from "./components/ParentComponent";
import { Provider } from "react-redux";
import { store } from "./store";
const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <h1>ReduxDemo</h1>
      <ParentComponent />
    </Provider>
  );
};

export default ReduxDemo;
