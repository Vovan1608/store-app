import { Route, Routes } from 'react-router-dom';
import { Cart, Home } from '../pages';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    );
}

export default App;
