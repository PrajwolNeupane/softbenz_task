import NavBar from "@components/nav-bar";
import SearchModal from "@components/nav-bar/search-model";
import { getCartItems, getProducts } from "@features/api/services";
import { useAppDispatch } from "@features/store";
import { setCarts } from "@features/store/reducer/cart-reducer";
import { setProducts } from "@features/store/reducer/product-reducer";
import { setSearch } from "@features/store/reducer/search-reducer";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

interface Props {}

let MainLayout: FC<Props> = ({}) => {
  const { pathname } = useLocation();

  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  const { data: cartData, isLoading: cartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCartItems(),
  });

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(setProducts(data?.data?.docs));
    }
  }, [data, isLoading]);

  useEffect(() => {
    if (!cartLoading && cartData) {
      dispatch(setCarts(cartData?.data?.items));
    }
  }, [cartData, cartLoading]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setSearch(false));
  }, [pathname]);

  return (
    <>
      <NavBar />
      <SearchModal />
      <Outlet />
    </>
  );
};
export default MainLayout;
