import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: {},
//   isEmptyByfilter: false,
//   isEmpty: false,
//   isFetching: false,
//   isFetchingByFilter: false,
//   isFetchingNextData: false,
// };

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    isEmptyByfilter: false,
    isEmpty: false,
    isFetching: false,
    isFetchingByFilter: false,
    isFetchingNextData: false,
  },
  reducers: {
    initDataStart(state) {
      state.isFetching = true;
    },
    initDataCompleted(state, action) {
      const { payload } = action;
      state.isEmpty = !payload?.data?.length;
      state.isFetching = false;
      state.products = payload;
      state.products = payload;
    },
    filterDataStart(state) {
      state.isFetchingByFilter = true;
    },
    filterDataCompleted(state, action) {
      const { payload } = action;
      state.isEmptyByfilter = !payload?.data?.length;
      state.isFetchingByFilter = false;
      state.products = payload;
    },
    fetchNextDataStart(state) {
      state.isFetchingNextData = true;
    },
    fetchNextDataCompleted(state, action) {
      const { payload } = action;
      state.isFetchingNextData = false;
      state.products = {
        ...state.products,
        ...payload,
        data: [...(state.products?.data || []), ...(payload?.data || [])],
      };
    },
    fetchNextDataFailed(state) {
      state.isFetchingNextData = false;
    },
  },
});

export const productsSelector = (state) => state.products.products;
export const isEmptyByfilterSelector = (state) =>
  state.products.isEmptyByfilter;
export const isEmptySelector = (state) => state.products.isEmpty;
export const isFetchingSelector = (state) => state.products.isFetching;
export const isFetchingByFilterSelector = (state) =>
  state.products.isFetchingByFilter;
export const isFetchingNextDataSelector = (state) =>
  state.products.isFetchingNextData;

export const {
  initDataStart,
  initDataCompleted,
  filterDataStart,
  filterDataCompleted,
  fetchNextDataStart,
  fetchNextDataCompleted,
  fetchNextDataFailed,
} = productSlice.actions;

export default productSlice.reducer;
