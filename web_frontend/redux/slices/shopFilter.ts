import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

type FilterGroup = {
  tag: string;
  free_delivery: boolean;
  rating: string;
  prices: number[];
  deals: boolean;
  open: boolean;
};

export type ShopFilterType = {
  category_id?: number;
  newest: boolean;
  order_by?: string;
  group: Partial<FilterGroup>;
  search?: string;
};

const initialState: ShopFilterType = {
  category_id: undefined,
  newest: false,
  order_by: undefined,
  group: {},
  search: undefined,
};

const shopFilterSlice = createSlice({
  name: "shopFilter",
  initialState,
  reducers: {
    setShopCategory(state, action) {
      const { payload } = action;
      state.category_id = payload;
      state.newest = false;
    },
    setNewestShop(state) {
      state.category_id = undefined;
      state.newest = true;
    },
    setShopSorting(state, action) {
      const { payload } = action;
      state.order_by = payload;
    },
    setGroupFilter(state, action) {
      const { payload } = action;
      state.group = payload;
    },
    setSearchFilter(state, action) {
      const { payload } = action;
      state.search = payload;
    },
    clearFilter(state) {
      state.category_id = undefined;
    },
  },
});

export const {
  setShopCategory,
  clearFilter,
  setNewestShop,
  setShopSorting,
  setGroupFilter,
  setSearchFilter,
} = shopFilterSlice.actions;

export const selectShopFilter = (state: RootState) => state.filter;

export default shopFilterSlice.reducer;
