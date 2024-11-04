import { Product } from "@features/api/services/type";
import { useAppDispatch, useAppSelector } from "@features/store";
import { setSearch } from "@features/store/reducer/search-reducer";
import useDivNavigation from "@hooks/useDivNavigation";
import { searchProducts } from "@utils/index";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchModal() {
  const dispatch = useAppDispatch();
  const { openSearch } = useAppSelector((state) => state.Search);
  const { products } = useAppSelector((state) => state.Product);
  const [searchText, setSearchText] = useState<string>("");
  const [searchedProduct, setSearchedProduct] = useState<Array<Product> | null>(
    null
  );
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = useDivNavigation(
    0,
    searchedProduct,
    navigate
  );

  useEffect(() => {
    if (openSearch) {
      document.documentElement.style.overflow = "hidden";
      if (products) {
        setSearchedProduct(products?.slice(0, 5));
      }
      setSearchText("");
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [openSearch, products]);

  if (openSearch) {
    return (
      <div
        className="fixed top-0 z-[999] w-[100vw] h-[100vw] bg-[#302f2fc5]"
        id="modal"
        onClick={(e: any) => {
          if (e.target.id == "modal") {
            dispatch(setSearch(false));
          }
        }}
      >
        <div className="flex flex-col gap-2 absolute left-[50%] translate-x-[-50%] mt-[50px] px-5 py-3 xl:w-[40vw] lg:w-[50vw] md:w-[60vw] sm:w-[80vw] w-[90vw] bg-[white] rounded-[5px] shadow-md">
          {/*============= SEARCH BOX ===============*/}
          <div className="flex flex-row px-3 py-1 gap-2 border-[2px] items-center border-brand-600 rounded-[5px]">
            <i className="uil uil-search text-sm text-500 cursor-pointer"></i>
            <input
              autoFocus
              placeholder="Search on Store"
              className="w-[100%] text-2xs font-mb text-text-400 placeholder:text-text-100 outline-none"
              value={searchText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchText(e.target.value);
                setSearchedProduct(searchProducts(e.target.value, products));
              }}
            />
            <i
              className="uil uil-backspace text-md text-500 cursor-pointer"
              onClick={() => {
                setSearchText("");
              }}
            ></i>
          </div>
          <div className="flex-row xsm:flex hidden items-center gap-5">
            <div className="flex flex-row items-center gap-1">
              <span className="shortcut-key">
                <i className="uil uil-arrow-up text-sm text-text-300"></i>
              </span>
              <span className="shortcut-key">
                <i className="uil uil-arrow-down text-sm text-text-300"></i>
              </span>
              <p className="font-mb text-3xs text-text-300">to navigate</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="shortcut-key">
                <i className="uil uil-enter text-sm text-text-300"></i>
              </span>
              <p className="shortcut-key">ENTER</p>
              <p className="font-mb text-3xs text-text-300">to select</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <p className="shortcut-key">ESC</p>
              <p className="font-mb text-3xs text-text-300">to close</p>
            </div>
          </div>
          {searchedProduct?.map((curr: Product | null, indx: number) => {
            if (selectedIndex == indx) {
              return (
                <Link
                  to={`/product/${curr?.slug}`}
                  className="group flex p-2 w-full gap-3 rounded-[5px] cursor-pointer bg-text-400"
                  key={indx}
                  onMouseEnter={() => {
                    setSelectedIndex(indx);
                  }}
                >
                  <img
                    src={curr?.images[0]}
                    className="md:w-20 w-10 object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-2xs font-mb text-light-400">
                      {curr?.title}
                    </h2>
                    <h4 className="text-3xs font-mb text-light-600">
                      {curr?.brand.name}
                    </h4>
                    <div className="flex gap-1 items-center">
                      {curr?.strikePrice != curr?.price && (
                        <p className="text-3xs font-mb text-light-600 line-through">
                          ${curr?.strikePrice}
                        </p>
                      )}
                      <p className="text-3xs font-mb text-light-600">
                        ${curr?.price}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            } else {
              return (
                <Link
                  to={`/product/${curr?.slug}`}
                  className="group flex bg-light-600 gap-3 p-2 w-full rounded-[5px] cursor-pointer hover:bg-text-400"
                  key={indx}
                  onMouseEnter={() => {
                    setSelectedIndex(indx);
                  }}
                >
                  <img
                    src={curr?.images[0]}
                    className="md:w-20 w-10 object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-2xs font-mb text-text-500 group-hover:text-light-400">
                      {curr?.title}
                    </h2>
                    <h4 className="text-3xs font-mb text-text-300 group-hover:text-light-600">
                      {curr?.brand.name}
                    </h4>
                    <div className="flex gap-1 items-center">
                      {curr?.strikePrice != curr?.price && (
                        <p className="text-3xs font-mb text-brand-700 group-hover:text-light-600 line-through">
                          ${curr?.strikePrice}
                        </p>
                      )}
                      <p className="text-3xs font-mb text-brand-700 group-hover:text-light-600">
                        ${curr?.price}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default SearchModal;
