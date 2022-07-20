const updateBookList = (state, action) => {
    if (state === undefined) {
        return {
            books: [],
            isLoading: true,
            isError: false
        };
    }

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
            return state.bookList;
    }
};

export default updateBookList;
