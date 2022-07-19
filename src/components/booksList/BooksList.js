import { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import { compose } from '../../utils';
import BookListItem from '../bookListItem';
import { withBookstoreService } from '../hoc';
import ErrorIndicator from '../errorIndicator';
import { fetchBooks } from '../../actions';

import './BooksList.css';

const BooksList = ({
    books,
    isError,
    isLoading,
    fetchBooks
}) => {

    useEffect(() => {
        fetchBooks();
    }, []);

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <ErrorIndicator />
    }

    return (
        <ul className='book-list'>
            {
                books.map(({ id, ...other }) => {
                    return (
                        <li key={id}>
                            <BookListItem book={other} />
                        </li>
                    );
                })
            }
        </ul>
    );
};

const mapStateToProps = ({ books, isLoading, isError }) => {
    return { books, isLoading, isError };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksList);
