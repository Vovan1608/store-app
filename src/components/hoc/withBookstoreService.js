import { BookstoreServiceConsumer } from '../bookstoreServiceContext';

const withBookstoreService = () => (Component) => {
    return function F(props) {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Component {...props} bookstoreService={bookstoreService} />
                        );
                    }
                }
            </BookstoreServiceConsumer>
        );
    };
};

export default withBookstoreService;
