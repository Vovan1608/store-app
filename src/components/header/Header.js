import './Header.css';

const Header = ({ numItems, total }) => {
    return (
        <header className='header'>
            <a className='logo text-dark' href='#' >ReStore</a>
            <a className='shopping-cart'>
                <i className="fa-solid fa-cart-shopping cart-icon"></i>
                {numItems} items (${total})
            </a>
        </header>
    );
};

export default Header;
