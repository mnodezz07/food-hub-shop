import { useState, useEffect } from "react";

import ShopList from "./components/ShopList";
import ShopForm from "./components/ShopForm";
import { UserContext } from "./context/UserContext";
import { Route, Routes, useNavigate } from "react-router";
import Layout from "./layouts/Layout";
import ShopDetails from "./pages/ShopDetails";

const App = () => {
  const [shops, setShops] = useState([]);
  const [user, setUser] = useState({
    name: "Denis Yegon",
    avatarUrl: "/Denis.jpg"
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:3000/coffee")
      .then(res => res.json())
      .then(data => setShops(data));
  }, []);

  function handleCreate(formData) {
    fetch("http://127.0.0.1:3000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newShop => {
        setShops(shops => [...shops, newShop]);
        navigate("/");
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/coffee/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        console.log("Coffee deleted!");
        setShops(prev => prev.filter(coffee => coffee.id !== id));
      });
  }

  return (
    <UserContext value={user}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<ShopList shops={shops} onDelete={handleDelete} />}
        />

        <Route
          path="shops/new"
          element={<ShopForm onCreate={handleCreate} />}
        />

        <Route
          path="shops/:id"
          element={<ShopDetails />}

          
        />
      </Route>
</Routes>
    </UserContext>
  );
};
export default App;