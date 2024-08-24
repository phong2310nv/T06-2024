import Features from "./Features";
import Header from "./Header";
import Products from "./Products";

const MainContent = () => {
  return (
    <div className="bg-slate-500">
      <Header />
      <Features />
      <Products />
    </div>
  );
};

export default MainContent;
