import { api } from "..";
import { GetProducts } from "./type";

export const getProducts = async () => {
  const response = await api.get<GetProducts>("/product/latest");
  return response.data;
};
