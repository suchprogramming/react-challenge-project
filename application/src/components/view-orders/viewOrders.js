import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './viewOrders.css';
import { Template } from '../../components';
import { getAllOrders, deleteOrder } from '../../redux/actions/orderActions';

const mapStateToProps = (state) => {
    return { orders: Object.values(state.orders) }
};

class ViewOrders extends Component {
    componentDidMount() {
        this.props.getAllOrders();
    }

    deleteOrder(e, orderId) {
        e.preventDefault();
        this.props.deleteOrder(orderId);
    };

    render() {
        if (!this.props.orders) {
            return (
                <Template>
                    <div>Loading...</div>
                </Template>
            );
        }
        return (
            <Template>
                <div className="container-fluid">
                    {this.props.orders.map(order => {
                        const createdDate = new Date(order.createdAt);
                        return (
                            <div className="row view-order-container" key={order._id}>
                                <div className="col-md-4 view-order-left-col p-3">
                                    <h2>{order.order_item}</h2>
                                    <p>Ordered by: {order.ordered_by || ''}</p>
                                </div>
                                <div className="col-md-4 d-flex view-order-middle-col">
                                    <p>Order placed at {createdDate.toLocaleTimeString([], {hour12: false})}</p>
                                    <p>Quantity: {order.quantity}</p>
                                 </div>
                                 <div className="col-md-4 view-order-right-col">
                                     <Link to={`/edit-order/${order._id}`}>
                                        <button className="btn btn-success">Edit</button>
                                     </Link>
                                     <button onClick={(e) => this.deleteOrder(e, order._id)} className="btn btn-danger">Delete</button>
                                 </div>
                            </div>
                        );
                    })}
                </div>
            </Template>
        );
    }
}

export default connect(mapStateToProps, { getAllOrders, deleteOrder })(ViewOrders);