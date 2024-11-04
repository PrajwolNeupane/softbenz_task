import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateProps = {
  openSearch: boolean;
};

const initialState: StateProps = {
  openSearch: false,
};

const SearchReducer = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<boolean>) => {
      state.openSearch = action.payload;
    },
  },
});

export default SearchReducer.reducer;
export const { setSearch } = SearchReducer.actions;
