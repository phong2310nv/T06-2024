import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <div className="pb-4 bg-green-500 w-[70%] m-auto">
      Features
      <div className="flex  bg-red-400 gap-3">
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </div>
    </div>
  );
};

export default Features;
