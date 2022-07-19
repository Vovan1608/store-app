import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/errorBoundary';
import BookstoreService from './services/BookstoreService';
import { BookstoreServiceProvider } from './components/bookstoreServiceContext';

import store from './store';
import App from './components/app/';

const container = document.getElementById('app');
const root = createRoot(container);

const bookstoreService = new BookstoreService();

root.render(
    <Provider store={store}>
        <ErrorBoundary error={false}>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundary>
    </Provider>
);
