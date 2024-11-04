import { Product } from "@features/api/services/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateProps = {
  products: Product[] | null;
};

const initialState: StateProps = {
  products: null,
};

const ProductReducer = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export default ProductReducer.reducer;
export const { setProducts } = ProductReducer.actions;
