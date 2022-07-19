import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ numItems, total }) => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='logo text-dark' href='#' >ReStore</div>
            </Link>
            <Link to='/cart'>
                <div className='shopping-cart'>
                    <i className="fa-solid fa-cart-shopping cart-icon"></i>
                    {numItems} items (${total})
                </div>
            </Link>
        </header>
    );
};

export default Header;
