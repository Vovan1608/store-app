import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from '../errorBoundary';
import BookstoreService from '../../services/BookstoreService';
import { BookstoreServiceProvider } from '../bookstoreServiceContext';

import store from '../../store';

const bookstoreService = new BookstoreService();

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundary error={false}>
                <BookstoreServiceProvider value={bookstoreService}>
                    <Router>
                        <h1>Hello</h1>
                    </Router>
                </BookstoreServiceProvider>
            </ErrorBoundary>
        </Provider>
    );
}

export default App;
