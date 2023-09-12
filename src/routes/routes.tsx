import { Route, Routes } from "react-router-dom";
import App from "../App";
import Cart from "../routes/cart/Cart";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
