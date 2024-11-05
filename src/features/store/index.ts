import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import searchReducer from "@features/store/reducer/search-reducer";
import productReducer from "@features/store/reducer/product-reducer";
import cartReducer from "@features/store/reducer/cart-reducer";

const store = configureStore({
  reducer: {
    Search: searchReducer,
    Product: productReducer,
    Cart: cartReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export default store;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
