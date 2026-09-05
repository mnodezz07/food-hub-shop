import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";

const ShopDetails = () => {
  const [shop, setShop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/coffee/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Coffee product not found");
        }

        return res.json();
      })
      .then((data) => {
        setShop(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="px-4 py-10 text-center">
        <p className="text-slate-500">Loading product...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-10 text-center">
        <p className="text-red-500">{error}</p>

        <Link
          to="/"
          className="mt-4 inline-block font-semibold text-[#2A6F68]"
        >
          Back to products
        </Link>
      </div>
    );
  }

  function handleEdit() {
    navigate(`/shops/${shop.id}/edit`);
  }

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-2xl">

          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-[#2A6F68]">
            Food Product
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {shop.name}
          </h1>

          <p className="mt-3 text-base leading-relaxed text-slate-500 md:text-lg">
            {shop.description}
          </p>

          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700">
                Origin:
              </span>

              <span className="text-slate-500">
                {shop.origin}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700">
                Price:
              </span>

              <span className="text-2xl font-bold text-[#2A6F68]">
                ${Number(shop.price).toFixed(2)}
              </span>
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              to="/"
              className="inline-flex items-center rounded-full bg-slate-100 px-5 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Back to Products
            </Link>

            <button
              type="button"
              onClick={handleEdit}
              className="inline-flex items-center rounded-full bg-[#2A6F68] px-5 py-2.5 font-semibold text-white transition hover:bg-[#1f5751]"
            >
              Edit Product
            </button>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ShopDetails;