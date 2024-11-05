import MainLayout from "@layouts/main-layout";
import HomePage from "@pages/page";
import ProductPage from "@pages/product/[slug]/page";
import CartPage from "@pages/cart/page";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}
