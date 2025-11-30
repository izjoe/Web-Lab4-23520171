import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  // Initialize state with value from localStorage or initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn("useLocalStorage initialization error:", error.message);
      return initialValue;
    }
  });

  // Persist to localStorage whenever storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn("Failed to save to localStorage:", error.message);
    }
  }, [key, storedValue]);

  // Wrapper to support functional updates like useState
  const setValue = (value) => {
    setStoredValue((prev) => (typeof value === "function" ? value(prev) : value));
  };

  return [storedValue, setValue];
}