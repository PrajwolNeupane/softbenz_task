import NavBar from "@components/nav-bar";
import SearchModal from "@components/nav-bar/search-model";
import { getProducts } from "@features/api/services";
import { useAppDispatch } from "@features/store";
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

  useEffect(() => {
    if (data && !isLoading) {
      dispatch(setProducts(data?.data?.docs));
    }
  }, [data, isLoading]);

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
