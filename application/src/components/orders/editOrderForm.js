import React from 'react';
import { Field, reduxForm } from 'redux-form';

class EditOrderForm extends React.Component {
    onSubmit = values => {
        this.props.onSubmit(values);
    }

    render() {
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="form-group">
                    <label>Order Item</label>
                    <Field className="form-control" name="order_item" component="select" label="Order Item">
                        <option value="Soup of the Day">Soup of the Day</option>
                        <option value="Linguini With White Wine Sauce">Linguini With White Wine Sauce</option>
                        <option value="Eggplant and Mushroom Panini">Eggplant and Mushroom Panini</option>
                        <option value="Chili Con Carne">Chili Con Carne</option>
                    </Field>
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <Field className="form-control" name="quantity" component="select" label="Quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </Field>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        )
    }
}

export default reduxForm({form: 'editOrderForm'})(EditOrderForm)