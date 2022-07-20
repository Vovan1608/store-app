const initialState = {
    bookList: {
        books: [],
        isLoading: true,
        isError: false
    },

    shoppingCart: {
        cartItems: [],
        orderTotal: 0
    }
};

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

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;

    const book = books.find(({ id }) => id === bookId);
    const itemIndex = books.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(book, item, quantity);

    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};

const updateBookList = (state, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                isLoading: true,
                isError: false
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                isLoading: false,
                isError: false
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                isLoading: false,
                isError: action.payload
            };

        default:
            return state;
    }
};

const updateShoppingCart = (state, action) => {
    switch (action.type) {
        case 'BOOK_ADDED_TO_CARD':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_REMOVED_FROM_CARD':
            return updateOrder(state, action.payload, -1);

        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state;
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
        case 'FETCH_BOOKS_SUCCESS':
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                bookList: updateBookList(state, action)
            };

        case 'BOOK_ADDED_TO_CARD':
        case 'BOOK_REMOVED_FROM_CARD':
        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            return {
                ...state,
                shoppingCart: updateShoppingCart(state, action)
            }

        default:
            return state;
    }


};

export default reducer;
