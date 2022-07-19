import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import BookstoreService from './services/BookstoreService';
import { BookstoreServiceProvider } from './components/bookstoreServiceContext';

import store from './store';
import App from './components/app/';

const container = document.getElementById('app');
const root = createRoot(container);

const bookstoreService = new BookstoreService();

root.render(
    <Provider store={store}>
        <BookstoreServiceProvider value={bookstoreService}>
            <Router>
                <App />
            </Router>
        </BookstoreServiceProvider>
    </Provider>
);
