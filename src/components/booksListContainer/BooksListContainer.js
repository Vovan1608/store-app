import { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import { compose } from '../../utils';
import BookListItem from '../bookListItem';
import { withBookstoreService } from '../hoc';
import ErrorIndicator from '../errorIndicator';
import { fetchBooks, bookAddedToCart } from '../../actions';

import './BooksListContainer.css';

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className='book-list'>
            {
                books.map(({ id, ...other }) => {
                    return (
                        <li key={id}>
                            <BookListItem
                                book={other}
                                onAddedToCart={() => onAddedToCart(id)}
                            />
                        </li>
                    );
                })
            }
        </ul>
    );
};

const BooksListContainer = ({
    books,
    isError,
    isLoading,
    fetchBooks,
    onAddedToCart
}) => {

    useEffect(() => {
        fetchBooks();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
};

const mapStateToProps = ({ bookList: { books, isLoading, isError } }) => {
    return { books, isLoading, isError };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
