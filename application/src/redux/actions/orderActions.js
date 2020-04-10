import { GET_ALL_ORDERS, EDIT_ORDER, UPDATE_ORDER, DELETE_ORDER } from './types';
import { SERVER_IP } from '../../private'

export const getAllOrders = () => {
    return async dispatch => {
        const response = await fetch(`${SERVER_IP}/api/current-orders`)
            .then((response) => {
                return response.json();
            });

        dispatch({type: GET_ALL_ORDERS, payload: response});
    }
}

export const editOrder = (id) => {
    return async dispatch => {
        const response = await fetch(`${SERVER_IP}/api/edit-order/${id}`)
            .then((response) => {
                return response.json();
            });

        dispatch({type: EDIT_ORDER, payload: response});
    };
};

export const updateOrder = (values) => {
    return async dispatch => {
        const response = await fetch(`${SERVER_IP}/api/update-order`, {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => {
            return response.json();
        });

        dispatch({type: UPDATE_ORDER, payload: response});
    };
};

export const deleteOrder = (id) => {
    return async dispatch => {
        const response = await fetch(`${SERVER_IP}/api/delete-order`, {
            method: 'POST',
            body: JSON.stringify({id: id}),
            headers: {'Content-Type': 'application/json'}
        })
        .then((response) => {
            return response.json();
        });

        dispatch({type: DELETE_ORDER, payload: response});
    };
};