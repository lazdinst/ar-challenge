import { useEffect, useRef } from "react";

export function useDebounce<T>(callback: (arg: T) => void, delay: number) {
  const timeoutRef = useRef<number | null>(null);

  const debounce = (arg: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(arg);
    }, delay);
  };

  const cancel = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      cancel();
    };
  }, []);

  return { debounce, cancel };
}
