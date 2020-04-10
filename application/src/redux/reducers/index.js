import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import TempReducer from './tempReducer';
import authReducer from './authReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  temp: TempReducer,
  auth: authReducer,
  orders: orderReducer,
  form: formReducer
});