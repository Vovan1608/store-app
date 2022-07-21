const updateCartItems = (cartItems, item, index) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ];
    }

    if (index === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1)
    ];
};

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    };
};

const updateOrderTotal = (cartItems) => {
    if (cartItems.length === 0) {
        return 0;
    }

    if (cartItems.length > 1) {
        return cartItems.reduce((cur, next) => {

            return cur.total + next.total;
        });
    }

    return cartItems[0].total;
};

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;

    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);

    const updatedCartItems = updateCartItems(cartItems, newItem, itemIndex);
    const total = updateOrderTotal(updatedCartItems);

    return {
        orderTotal: total,
        cartItems: updatedCartItems
    };
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            orderTotal: 0,
            cartItems: []
        };
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CARD':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_REMOVED_FROM_CARD':
            return updateOrder(state, action.payload, -1);

        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);

            return updateOrder(state, action.payload, -item.count);

        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;
