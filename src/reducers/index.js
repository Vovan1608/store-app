const initialState = {
    books: [],
    isLoading: true,
    isError: false,
    cartItems: [],
    orderTotal: 220
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                isLoading: true,
                isError: false
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                isLoading: false,
                isError: false
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                isLoading: false,
                isError: action.payload
            };

        case 'BOOK_ADDED_TO_CARD':
            const bookId = action.payload;
            const book = state.books.find((book) => book.id === bookId);
            const newItem = {
                id: bookId,
                title: book.title,
                count: 1,
                total: book.price
            };

            return {
                ...state,
                cartItems: [...state.cartItems, newItem]
            };

        default:
            return state;
    }


};

export default reducer;
