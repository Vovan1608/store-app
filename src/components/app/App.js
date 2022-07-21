import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Header from '../header';
import { Cart, Home } from '../pages';

const App = ({ cartItems = [], orderTotal = 0 }) => {
    return (
        <main role='main' className='container'>
            <Header numItems={cartItems.length} total={orderTotal} />
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </main>
    );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
    return {
        cartItems,
        orderTotal
    };
};

export default connect(mapStateToProps)(App);
