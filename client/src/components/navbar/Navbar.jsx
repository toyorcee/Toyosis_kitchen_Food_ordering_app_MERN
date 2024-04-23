import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";

const Navbar = () => {
  const {products} = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="nav-container text-gray-600 body-font fixed top-0 left-0 right-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title flex list-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">TOYOSI's KITCHEN</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="list mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/contact" className="list mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link to="/foods" className="list mr-5 hover:text-gray-900">
            Foods
          </Link>
          <Link to="/create" className="list mr-5 hover:text-gray-900">
            Create
          </Link>
        </nav>
        <div className="nav-right flex gap-3">
          <AiOutlineUser className="userIcon" />
          <Link to="/cart" className="flex gap-3 flex-1">
            <AiOutlineShoppingCart className="cartIcon" />
            <div className="cartQuantity">
              {products.length}
            </div>
          </Link>
          <button
            onClick={handleLogout}
            class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
