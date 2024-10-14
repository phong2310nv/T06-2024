import Product from "../components/Product";

const CategoryProducts = () => {
  return (
    <div>

      {/* Main */}
      <div className="container mx-auto min-h-[83vh] p-4 font-karla">
        <div className="flex items-center space-x-2 text-lg dark:text-white">
          <span>Categories</span>
          <span> {">"} </span>
          <span className="font-bold">Beauty</span>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-2">
          {/* Single Product */}
          <Product />
        </div>
      </div>
   
    </div>
  );
};

export default CategoryProducts;
