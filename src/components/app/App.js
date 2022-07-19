import { Route, Routes } from 'react-router-dom';

import Header from '../header';
import { Cart, Home } from '../pages';

const App = () => {
    return (
        <main role='main' className='container'>
            <Header numItems={5} total={210} />
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </main>
    );
}

export default App;
