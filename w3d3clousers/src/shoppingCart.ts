//This closure exercise involves a common real-world scenario.

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
  item: string;
  price: number;
};

type Cart = {
  addItem: (item: string, price: number) => void;
  removeItem: (item: string) => void;
  getTotal: () => number;
};

export function createShoppingCart(): Cart {
  //IMPLEMENT THIS FUNCTION

  let cart: Item[] = [];

  function addItem(item: string, price: number): void {
    cart.push({ item, price });
  }

  function removeItem(item: string): void {
    cart = cart.filter((cartItem) => cartItem.item !== item);
  }

  function getTotal(): number {
    return cart.reduce((sum, item) => {
      return (sum += item.price);
    }, 0);
  }

  return {
    addItem,
    removeItem,
    getTotal,
  };
}
