//This closure exercise involves a common real-world scenario.
export function createShoppingCart() {
    //IMPLEMENT THIS FUNCTION
    let cart = [];
    function addItem(item, price) {
        cart.push({ item, price });
    }
    function removeItem(item) {
        cart = cart.filter((cartItem) => cartItem.item !== item);
    }
    function getTotal() {
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
