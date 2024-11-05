import { CartItem, Product } from "@features/api/services/type";

export const searchProducts = (
  title: string,
  products: Array<Product> | null
): Array<Product> => {
  if (!products) return []; // Return an empty array if products is null

  const res = products.filter((curr) => {
    // Only include products that match the search criteria
    return (
      title !== "" && curr?.title.toLowerCase().includes(title.toLowerCase())
    );
  });

  return res.slice(0, 5); // Limit results to 5 if needed
};

export const totalCartItemFinder = (items: Array<CartItem> | null): number => {
  var total = 0;

  if (items) {
    items.forEach((curr: CartItem) => {
      total = total + curr?.quantity!;
    });
  }

  return total;
};

export const totalPriceFinder = (items: Array<CartItem> | null): number => {
  if (!items) return 0;

  var total = 0;
  items.forEach((curr: CartItem) => {
    var itemTotal = curr?.price! * curr?.quantity!;
    total = total + itemTotal;
  });

  return total;
};
