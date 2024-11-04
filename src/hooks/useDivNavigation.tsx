import { Product } from "@features/api/services/type";
import { useEffect, useState } from "react";

const useDivNavigation = (
  initialIndex: number,
  array: Array<Product> | null,
  navigate: (path: string) => void
): [number, (indx: number) => void] => {
  const [selectedDivIndex, setSelectedDivIndex] =
    useState<number>(initialIndex);

  const setSelectedIndex = (indx: number) => {
    setSelectedDivIndex(indx);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!array) return; // Check if array is not null

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedDivIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedDivIndex((prevIndex) =>
          prevIndex < array.length - 1 ? prevIndex + 1 : prevIndex
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [array]);

  useEffect(() => {
    const handleClick = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.keyCode === 13) {
        if (array && array[selectedDivIndex]) {
          navigate(`/product/${array[selectedDivIndex].slug}`);
        }
      }
    };

    document.addEventListener("keydown", handleClick);

    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  }, [selectedDivIndex, array, navigate]);

  return [selectedDivIndex, setSelectedIndex];
};

export default useDivNavigation;
