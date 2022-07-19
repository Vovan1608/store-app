import { useEffect } from 'react';
import { connect } from 'react-redux';

import { compose } from '../../utils';
import BookListItem from '../bookListItem';
import { booksLoaded } from '../../actions';
import { withBookstoreService } from '../hoc';

import './BooksList.css';

const BooksList = ({ books, bookstoreService, booksLoaded }) => {
    useEffect(() => {
        const data = bookstoreService.getBooks();

        booksLoaded(data);
    }, []);

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

const mapStateToProps = ({ books }) => {
    return { books };
};

const mapDispatchToProps = {
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BooksList);
