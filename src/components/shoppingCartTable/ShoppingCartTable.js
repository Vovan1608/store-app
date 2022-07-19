import { connect } from 'react-redux';

import './ShoppingCartTable.css';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderRow = (item, i) => {
        const { id, title, count, total } = item;

        return (
            <tr key={id}>
                <td>{i + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td className='button-container'>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm"
                    >
                        <i className="fa-solid fa-trash-can" />
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm"
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm"
                    >
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    };

    return (
        <div className='shopping-cart-table'>
            <h2>Your order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Item</td>
                        <td>Count</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        items.map(renderRow)
                    }
                </tbody>
            </table>

            <div className='total'>
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = () => {
    return {
        onDelete: (id) => {
            console.log(`Deleted ${id}`);
        },
        onIncrease: (id) => {
            console.log(`Increased ${id}`);
        },
        onDecrease: (id) => {
            console.log(`Decreased ${id}`);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
