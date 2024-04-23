import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import FoodDetails from "./components/foodDetails/FoodDetails";
import FoodCatalog from "./components/foodCatalog/FoodCatalog";
import Checkout from "./components/checkout/Checkout";
import Cart from "./components/cart/Cart";
import Create from "./components/create/Create";
import { useEffect } from "react";
import Contact from "./components/contact/contact";
import Foods from "./components/foods/Foods";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/foods/:id" element={<FoodCatalog />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
