import { api } from "..";
import { CartProduct, GetProduct, GetProducts, NewCartResponse } from "./type";
import Cookies from "js-cookie";

export const getProducts = async () => {
  const response = await api.get<GetProducts>("/product/latest");
  return response.data;
};

export const getProduct = async (slug: string) => {
  const response = await api.get<GetProduct>(`/product/for-public/${slug}`);
  return response.data;
};

export const getCartItems = async () => {
  const id = Cookies.get("cart-id");
  if (id) {
    const response = await api.get<any>(`/order/user/cart-details/${id}`);
    return response.data;
  } else {
    const newCartResponse = await api.get<NewCartResponse>(
      "/order/user/new-cart"
    );
    Cookies.set("cart-id", newCartResponse?.data?.data?._id);
    const response = await api.get<any>(
      `/order/user/cart-details/${newCartResponse?.data?.data?._id}`
    );
    return response.data;
  }
};

export const addToCart = async (product: CartProduct) => {
  const id = Cookies.get("cart-id");
  if (id) {
    const response = await api.post<any, CartProduct>(
      `/order/add-item/${id}`,
      product
    );
    return response.data;
  } else {
    const newCartResponse = await api.get<NewCartResponse>(
      "/order/user/new-cart"
    );
    const new_id = newCartResponse?.data?.data?._id;
    Cookies.set("cart-id", new_id);
    const response = await api.post<any, CartProduct>(
      `/order/add-item/${id}`,
      product
    );
    return response.data;
  }
};
