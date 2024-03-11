import React, { useRef, useCallback, useEffect } from "react";

const useThrottle = (fn, ms, dep = []) => {
  const { current } = useRef({ fn, timer: null });
  useEffect(() => {
    current.fn = fn;
  }, [fn]);

  return useCallback(
    (...args) => {
      if (!current.timer) {
        current.timer = setTimeout(() => {
          delete current.timer;
        }, ms);
        current.fn(...args);
      }
    },
    [current, ms, ...dep],
  );
};

export default useThrottle;
