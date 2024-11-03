import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueryParams from "../../common/utils/QueryParams";
import {
  fetchNextDataOperation,
  filterDataOperation,
  initDataOperation,
} from "../../state/operations";
import ProductFilters from "../products-filter";
import CardView from "../../common/components/card-view";
import Loader from "../../common/components/loader";
import {
  isEmptyByfilterSelector,
  isEmptySelector,
  isFetchingByFilterSelector,
  isFetchingNextDataSelector,
  isFetchingSelector,
  productsSelector,
} from "../../state/slices/productSlice";

function Products() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    category_ids: [],
    brand_ids: [],
    sort: [],
    page: 1,
    search: "",
  });
  const products = useSelector(productsSelector);
  const isEmptyByfilter = useSelector(isEmptyByfilterSelector);
  const isEmpty = useSelector(isEmptySelector);
  const isFetching = useSelector(isFetchingSelector);
  const isFetchingByFilter = useSelector(isFetchingByFilterSelector);
  const isFetchingNextData = useSelector(isFetchingNextDataSelector);

  // console.log(products);
  useEffect(() => {
    initData();

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initData = () => {
    let params = QueryParams.getAllQueryParams();
    let filters = params?.q || {};
    setFilters({ ...filters });
    dispatch(initDataOperation(filters));
  };

  const handleScroll = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    let scrollTop = document.documentElement.scrollTop;
    console.log(products);

    if (scrollHeight - scrollTop - clientHeight < 100) {
      nextPage();
    }
  };

  const nextPage = async () => {
    let { current_page, last_page } = products;

    if (current_page < last_page && !isFetchingNextData) {
      let newFilters = { ...filters, page: current_page + 1 };
      setFilters({ ...newFilters });
      dispatch(fetchNextDataOperation(newFilters));
    }
  };

  const generateUrlQuery = (filters) => {
    if (filters) {
      const urlParams = {};
      Object.keys(filters).forEach((key) => {
        if (key !== "page" && filters[key]?.length) {
          urlParams[key] = filters[key];
        }
      });
      QueryParams.defineFilters(urlParams);
    }
  };

  const onFilterChange = async (type, value) => {
    let params = {};

    if (!value.length) {
      let { [type]: _, ...newFilters } = filters;
      params = { ...newFilters };
    } else {
      params = {
        ...filters,
        [type]: value,
      };
    }

    setFilters({ ...params });
    generateUrlQuery(params);

    dispatch(filterDataOperation(params));
  };

  const onClearAllFilters = async () => {
    let newFilters = {
      page: 1,
    };

    generateUrlQuery(newFilters);
    setFilters({ ...newFilters });

    dispatch(filterDataOperation(newFilters));
  };

  if (isFetching) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-6">
      <ProductFilters
        onFilterChange={onFilterChange}
        filters={filters}
        onClearAllFilters={onClearAllFilters}
      />
      {!isEmpty ? (
        <>
          {!isFetchingByFilter && !isEmptyByfilter && (
            <div className="grid my-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xxl:grid-cols-4 xxl:gap-8">
              {products?.data?.map((product) => {
                const { id, imageUrl, name, category, price, rating, brand } =
                  product;
                return (
                  <CardView
                    key={id}
                    name={name}
                    imageUrl={imageUrl}
                    category={category}
                    price={price}
                    rating={rating}
                    brand={brand}
                  />
                );
              })}
            </div>
          )}
          {isFetchingByFilter && (
            <div className="w-full h-[calc(100vh-150px)] flex items-center justify-center">
              <Loader />
            </div>
          )}
          {isFetchingNextData && (
            <div className="w-full h-12 flex items-center justify-center">
              <Loader />
            </div>
          )}
          {isEmptyByfilter && !isFetchingByFilter && (
            <div className="flex items-center justify-center w-full h-[calc(100vh-150px)]">
              No search result
            </div>
          )}
        </>
      ) : (
        <>No products</>
      )}
    </div>
  );
}

export default Products
