import { useRef } from "react";

const useDebounce = (func, delay) => {
  const timerRef = useRef(null);

  const debouncedFunc = (...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunc;
};

export default useDebounce;
