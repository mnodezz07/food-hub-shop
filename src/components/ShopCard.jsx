import { Link } from "react-router";

const ShopCard = ({ shop, onDelete }) => {
  function handleDelete() {
    console.log(`Card with id ${shop.id} has been clicked`);
    onDelete(shop.id);
  }
  
return ( 
  <div className="relative mx-auto h-72 w-full max-w-sm"> 
    <div className="absolute inset-x-4 top-4 h-full rounded-2xl border border-slate-200 bg-slate-100/80 shadow-sm" /> 
      <div className="absolute inset-x-2 top-2 h-full rounded-2xl border border-slate-200 bg-slate-200/70 shadow-sm" /> 
          <article className="relative flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/80 transition-transform duration-200 hover:-translate-y-1"> 
             
              <div> 
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-teal-700"> 
                    Food Product 
                    </p> 
                    <h2 className="mt-3 text-xl font-semibold text-slate-800"> 
                      <Link to={`/shops/${shop.id}`}> {shop.name} </Link> 
                      </h2> 
                          <p className="mt-2 text-sm leading-6 text-slate-600"> 
                            {shop.description} </p> 

                          <p className="mt-3 text-sm text-slate-500"> 

                              <span className="font-medium text-slate-700"> Origin: </span>
                              {" "} {shop.origin} </p> 

                              <p className="mt-2 text-lg font-bold text-teal-700"> 
                                ${Number(shop.price).toFixed(2)} 
                              </p> 
                              </div> 
                              
                          
                          <div className="mt-4 flex items-center justify-between gap-3"> 
                                <Link to={`/shops/${shop.id}`} className="rounded-full bg-teal-50 px-4 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-100" > 
                                View </Link> 

                                <button type="button" onClick={handleDelete} className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-medium text-rose-700 transition hover:border-rose-300 hover:bg-rose-100" >
                                   Delete 
                                   </button> 
               </div> 
          </article>
    </div> 
                                    );
                             }; 
  export default ShopCard;