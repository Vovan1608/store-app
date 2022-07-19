import './ShoppingCartTable.css';

const ShoppingCartTable = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Site Reliability Engineering</td>
                        <td>2</td>
                        <td>$40</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm float-right">
                                <i className="fa-solid fa-trash-can" />
                            </button>
                            <button className="btn btn-outline-success btn-sm float-right">
                                <i className="fa fa-plus-circle" />
                            </button>
                            <button className="btn btn-outline-warning btn-sm float-right">
                                <i className="fa fa-minus-circle" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className='total'>
                Total: $210
            </div>
        </div>
    );
};

export default ShoppingCartTable;