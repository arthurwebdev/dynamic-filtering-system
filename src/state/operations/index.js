import mockData from "../../mock-data/mock-data";
import {
  fetchNextDataCompleted,
  fetchNextDataFailed,
  fetchNextDataStart,
  filterDataCompleted,
  filterDataStart,
  initDataCompleted,
  initDataStart,
} from "../slices/productSlice";

export const initDataOperation = (filters) => {
  return async (dispatch,getState) => {
    dispatch(initDataStart());
    try {
      const data = await getData(filters);
      
      // Simulate a delay
      setTimeout(async () => {
        await dispatch(initDataCompleted(data));
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterDataOperation = (filters) => {
  return async (dispatch, getState) => {
    dispatch(filterDataStart());
    try {
      const data = await getData(filters);

      // Simulate a delay
      setTimeout(() => {
        dispatch(filterDataCompleted(data));
      }, 1000);
    } catch (error) {}
  };
};

export const fetchNextDataOperation = (filters) => {
  return async (dispatch, getState) => {
    dispatch(fetchNextDataStart());
    try {
      const data = await getData(filters);
      // Simulate a delay
      setTimeout(() => {
        dispatch(fetchNextDataCompleted(data));
      }, 1000);
    } catch (error) {
      dispatch(fetchNextDataFailed());
    }
  };
};

const getData = async (filters) => {
  try {
    const { category_ids, brand_ids, sort, search, page = 1 } = filters;

    let filtered = mockData;

    if (category_ids?.length) {
      filtered = filtered.filter((item) =>
        category_ids.includes(item.category_id)
      );
    }

    if (brand_ids?.length) {
      filtered = filtered.filter((item) => brand_ids.includes(item.brand_id));
    }

    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (!!sort?.[0]) {
      const [key, order] = sort?.[0]?.split(":");
      filtered.sort((a, b) => {
        if (order === "asc") {
          return a[key] > b[key] ? 1 : -1;
        } else {
          return a[key] < b[key] ? 1 : -1;
        }
      });
    }

    const itemsPerPage = 20;
    const startIndex = (page - 1) * itemsPerPage;
    const paginatedData = filtered.slice(startIndex, startIndex + itemsPerPage);

    return {
      data: paginatedData,
      total_items: filtered.length,
      current_page: page,
      last_page: Math.ceil(filtered.length / itemsPerPage),
    };
  } catch (error) {
    console.log(error);
  }
};
