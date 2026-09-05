import ShopCard from "./ShopCard";

const ShopList = ({ shops = [], onDelete }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      
      <h1 className="text-3xl font-semibold text-slate-900">
        FoodHub Shop
      </h1>

      <p className="mt-1 text-slate-500">
        Browse our available food and coffee products.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shops.length > 0 ? (
          shops.map((shop) => (
            <div key={shop.id} className="w-full">
              <ShopCard
                shop={shop}
                onDelete={onDelete}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-10 text-center">
            <p className="text-slate-500">
              No products available.
            </p>
          </div>
        )}
      </div>

    </section>
  );
};

export default ShopList;