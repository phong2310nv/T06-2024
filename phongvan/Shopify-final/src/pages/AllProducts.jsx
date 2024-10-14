import Product from "../components/Product";

const AllProducts = () => {
  return (
    <div>
      {/* Main */}
      <div className="dark:bg-slate-800 pb-5">
        <div className="container mx-auto min-h-[83vh] p-4 font-karla">
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg dark:text-white">Products</span>
                <select className="border border-black dark:border-white rounded p-1 dark:text-white dark:bg-slate-600">
                  <option value="default">Default</option>
                  <option value="asc">Price (low to high)</option>
                  <option value="desc">Price (high to low)</option>
                </select>
              </div>
              <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {/* Single product */}
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
