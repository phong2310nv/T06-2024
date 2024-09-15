import { useEffect } from "react";

const LifeCycleChild = () => {
  useEffect(() => {
    console.log("LifeCycleChild First Render");
    return () => {
      console.log("LifeCycleChild is about to be destroy");
    };
  }, []);

  return <div>LifeCycleChild</div>;
};

export default LifeCycleChild;
