import React, { useCallback, useEffect, useRef } from "react";
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
  let filtersRef = useRef({
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

  useEffect(() => {
    initData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initData = () => {
    let params = QueryParams.getAllQueryParams();
    let filters = params?.q || {};
    filtersRef.current = filters;
    dispatch(initDataOperation(filters));
  };

  const handleScroll = () => {
    const { scrollHeight, clientHeight } = document.documentElement;
    let scrollTop = document.documentElement.scrollTop;

    if (scrollHeight - scrollTop - clientHeight < 100) {
      dispatch(
        fetchNextDataOperation(filtersRef.current, (newFilters) => {
          filtersRef.current = newFilters;
        })
      );
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

  const onFilterChange = useCallback((type, value) => {
    let params = {};
  
    if (!value.length) {
      let { [type]: _, ...newFilters } = filtersRef.current;
      params = { ...newFilters };
    } else {
      params = {
        ...filtersRef.current,
        [type]: value,
      };
    }
    filtersRef.current = params;
    dispatch(filterDataOperation(params));
    generateUrlQuery(params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const onClearAllFilters = useCallback(() => {
    let newFilters = { page: 1 };
    generateUrlQuery(newFilters);
    filtersRef.current = newFilters;
    dispatch(filterDataOperation(newFilters));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetching) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="mx-auto text-xl font-bold">Dynamic filtering system</h1>
      <ProductFilters
        onFilterChange={onFilterChange}
        initialFilters={filtersRef?.current}
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

export default Products;
