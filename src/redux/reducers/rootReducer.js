import {ADD_ORDERS, REMOVE_ORDERS} from '../actions/actions';

const initialState = {
  orders: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDERS: {
      const orderItems = state.orders.includes(action.payload);
      if (!orderItems) {
        return {...state, orders: [...state.orders, action.payload]};
      } else {
        return state;
      }
    }
    case REMOVE_ORDERS: {
      const filterOrders = state.orders.filter(
        item => item.id !== action.payload.id,
      );
      return {...state, orders: filterOrders};
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
