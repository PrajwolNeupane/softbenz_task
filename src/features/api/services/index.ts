import { api } from "..";
import { GetProduct, GetProducts } from "./type";

export const getProducts = async () => {
  const response = await api.get<GetProducts>("/product/latest");
  return response.data;
};

export const getProduct = async (slug: string) => {
  const response = await api.get<GetProduct>(`/product/for-public/${slug}`);
  return response.data;
};
