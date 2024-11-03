import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Filter from "../../common/components/filter";
import Search from "../../common/components/search";

const sortByFilter = [
  { name: "Newest ", value: "created_at:desc" },
  { name: "Oldest", value: "created_at:asc" },
  { name: "Name • A - Z", value: "name:asc" },
  { name: "Name • Z - A", value: "name:desc" },
  { name: "Price • Low to high", value: "price:asc" },
  { name: "Price • High to low", value: "price:desc" },
];
const brands = [
  { name: "Brand A", value: 1 },
  { name: "Brand B", value: 2 },
  { name: "Brand C", value: 3 },
];

const categories = [
  { name: "Electronics", value: 1 },
  { name: "Art Supplie", value: 2 },
  { name: "Toys", value: 3 },
  { name: "Home Decor", value: 4 },
  { name: "Furniture", value: 5 },
];

function ProductFilters({ filters, onFilterChange, onClearAllFilters }) {
  const [isEmptyfilters, setIsEmptyFilters] = useState(true);

  const onFilter = (type, value, isSort = false) => {
    let selectedFilterArray = [];

    const filter = filters?.[type] || [];

    if (!isSort) {
      if (filter?.length) {
        if (filter?.includes(value)) {
          selectedFilterArray = filter.filter((el) => el !== value);
        } else {
          selectedFilterArray = [...filter, value];
        }
      } else {
        selectedFilterArray = [...filter, value];
      }
    } else {
      selectedFilterArray = [value];
    }

    onFilterChange(type, selectedFilterArray);
  };

  useEffect(() => {
    let isEmpty = true;
    Object.keys(filters)?.forEach((key) => {
      const value = filters?.[key];
      if (
        !!value?.length &&
        key !== "page" &&
        value?.[0] !== "date_created:desc"
      ) {
        isEmpty = false;
      }
    });

    setIsEmptyFilters(isEmpty);
    // console.log(filters);
    
  }, [filters]);

  return (
    <div className="flex gap-3 flex-wrap justify-between">
      <div className="flex flex-wrap gap-3">
        <Filter
          data={brands}
          isMultiplSelect
          onFilterChange={(value) => onFilter("brand_ids", value)}
          name="Brand"
          selectedItems={filters?.brand_ids}
          secondName={`${filters?.brand_ids?.length || ""} selected`}
        />
        <Filter
          data={categories}
          isMultiplSelect
          onFilterChange={(value) => onFilter("category_ids", value)}
          name="Categories"
          selectedItems={filters?.category_ids}
          secondName={`${filters?.category_ids?.length || ""} selected`}
        />
        <Filter
          data={sortByFilter}
          onFilterChange={(value) => onFilter("sort", value, true)}
          name="Sort"
          selectedItems={filters?.sort}
          secondName={
            sortByFilter?.find((it) => it.value === filters?.sort?.[0])?.name
          }
        />
        {!isEmptyfilters && (
          <button onClick={onClearAllFilters} className="hover:underline">
            Clear all
          </button>
        )}
      </div>
      <Search
        onChange={(value) => onFilterChange('search', value)}
        value={filters?.search}
        placeholder="Search item"
      />
    </div>
  );
}

ProductFilters.propTypes = {
    filters: PropTypes.object, 
    onFilterChange: PropTypes.func, 
    onClearAllFilters: PropTypes.func
};

export default ProductFilters;
