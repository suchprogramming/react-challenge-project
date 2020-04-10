import _ from '../../../node_modules/lodash';
import {  GET_ALL_ORDERS, EDIT_ORDER, UPDATE_ORDER, DELETE_ORDER } from '../actions/types'

export default (state={}, action) => {
    switch(action.type) {
        case GET_ALL_ORDERS:
            return { ...state, ..._.mapKeys(action.payload.orders, '_id')}
        case EDIT_ORDER:
            return { ...state, [action.payload.order._id]: action.payload.order }
        case UPDATE_ORDER:
            return { ...state, [action.payload.order._id]: action.payload.order }
        case DELETE_ORDER:
            return _.omit(state, action.payload.id)
        default:
            return state;
    }
};