import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Search = ({ onChange, placeholder, value = '' }) => {
  const [text, setText] = useState(value);
  useEffect(() => {
    setText(value);
  }, [value]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const delayedQuery = useCallback(
    _.debounce((value) => onChange(value), 200),
    []
  );

  const handleDebounceOnChange = (e) => {
    const value = e.target.value;
    setText(value);
    delayedQuery(value);
  };

  return (
    <div
      className={`w-[320px] py-2.5 px-3.5 flex items-center overflow-hidden rounded-lg  h-10 border border-divider`}
      id="search"
    >
      <input
        value={text}
        onChange={handleDebounceOnChange}
        className={`outline-none w-full leading-[20px] placeholder:text-placeholder`}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

// Search.defaultProps = {
//   value: ''
// }

Search.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default Search;
