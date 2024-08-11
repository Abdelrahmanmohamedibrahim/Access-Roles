import { useState, useEffect } from "react";

// Custom hook for local storage
function useLocalStorage(key, initialValue) {
  // Function to get the initial value from local storage or fallback to initialValue
  /*
  const getStoredValue = () => {
    const item = window.localStorage.getItem(key);
    return item
     ? JSON.parse(item) : initialValue;
  };
  */
  function getStoredValue() {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }

  // Initialize state with the value from local storage
  const [storedValue, setStoredValue] = useState(getStoredValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const setValue = (value) => {
    setStoredValue(value);
  };

  const removeValue = () => {
    window.localStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;
