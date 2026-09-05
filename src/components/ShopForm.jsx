import { useState } from "react";

const ShopForm = ({ onCreate }) => {
  const [name, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onCreate({
      name,
      description,
      origin,
      price: Number(price)
    });

    setShopName("");
    setDescription("");
    setOrigin("");
    setPrice("");
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-8">

        {/* Header */}
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-teal-700">
          FoodHub Shop
        </p>

        <h1 className="mt-3 text-2xl font-semibold text-slate-800">
          Add New Product
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Add a new food or coffee product to your shop.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* Product Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700"
            >
              Product Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setShopName(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-teal-200/80"
              placeholder="e.g. Vanilla Bean"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-700"
            >
              Description
            </label>

            <textarea
              name="description"
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-teal-200/80"
              placeholder="Describe the product"
            />
          </div>

          {/* Origin */}
          <div className="space-y-2">
            <label
              htmlFor="origin"
              className="block text-sm font-medium text-slate-700"
            >
              Origin
            </label>

            <input
              type="text"
              name="origin"
              id="origin"
              required
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-teal-200/80"
              placeholder="e.g. Colombia"
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-slate-700"
            >
              Price
            </label>

            <input
              type="number"
              name="price"
              id="price"
              required
              min="0"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-teal-200/80"
              placeholder="e.g. 10.00"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Add Product
          </button>

        </form>
      </div>
    </section>
  );
};

export default ShopForm;