import React from 'react';
import { connect } from 'react-redux';

import Template from '../common/template';
import { editOrder, updateOrder } from '../../redux/actions/orderActions';
import EditOrderForm from '../orders/editOrderForm';

const mapStateToProps = (state, ownProps) => {
    return { order: state.orders[ownProps.match.params.id] }
};

class EditOrder extends React.Component {
    componentDidMount() {
        this.props.editOrder(this.props.match.params.id)
    };

    onSubmit = values => {
        this.props.updateOrder({
                id: values._id, 
                order_item: values.order_item,
                ordered_by: values.ordered_by,
                quantity: values.quantity
            }
        );
    }

    render() {
        if (!this.props.order) {
            return (
                <Template>
                    <div>Loading Order...</div>
                </Template>
            );
        }
        return (
            <Template>
                <div className="container-fluid">
                    <h1>Edit Order</h1>
                    <h4>{`Order #${this.props.order._id}`}</h4>
                    <hr />
                    <EditOrderForm initialValues={this.props.order} onSubmit={this.onSubmit} />
                </div>
            </Template>
        );
    }
};

export default connect(mapStateToProps, {editOrder, updateOrder})(EditOrder);