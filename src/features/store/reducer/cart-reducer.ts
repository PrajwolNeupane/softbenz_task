import { CartItem } from "@features/api/services/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateProps = {
  carts: CartItem[] | null;
};

const initialState: StateProps = {
  carts: null,
};

const CartReducer = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setCarts: (state, action: PayloadAction<any[]>) => {
      state.carts = action.payload;
    },
  },
});

export default CartReducer.reducer;
export const { setCarts } = CartReducer.actions;
