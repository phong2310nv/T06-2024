import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="w-[70%] m-auto bg-gray-300">
      <h1>Trending products</h1>
      <div className="flex gap-4">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default Products;
