import { useEffect } from "react";

const EventListenerDemo = () => {
  useEffect(() => {
    console.log("Listen to window scroll");
    const scrollHandler = () => {
      console.log("Scrolling");
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      console.log("Remove listener on unmounting");
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return <div>EventListenerDemo</div>;
};

export default EventListenerDemo;
