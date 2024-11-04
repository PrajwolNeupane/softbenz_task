import { FC, PropsWithChildren, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@features/store";
import { setSearch } from "@features/store/reducer/search-reducer";
const ShortcutProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { openSearch } = useAppSelector((state) => state.Search);

  const setModal = (event: KeyboardEvent) => {
    if (event.key === "k" && event.ctrlKey) {
      event.preventDefault();
      dispatch(setSearch(!openSearch));
    }
    if (event.key === "Escape") {
      event.preventDefault();
      if (openSearch) {
        dispatch(setSearch(false));
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keydown", setModal);
    }

    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("keydown", setModal);
      }
    };
  }, [setModal]);

  return <div>{children}</div>;
};

export default ShortcutProvider;
