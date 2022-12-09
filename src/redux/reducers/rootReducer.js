import {
  ADD_COUNT_ORDER,
  ADD_ORDERS,
  MINUS_COUNT_ORDER,
  REMOVE_ORDERS,
} from '../actions/actions';

const initialState = {
  orders: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORDERS: {
      const orderItems = state.orders.includes(action.payload);
      if (!orderItems) {
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      } else {
        return state;
      }
    }
    case REMOVE_ORDERS: {
      const filterOrders = state.orders.filter(
        item => item.id !== action.payload,
      );
      return {...state, orders: filterOrders};
    }
    case ADD_COUNT_ORDER: {
      const itemCheck = state.orders.map((item, index) => {
        if (item.id === action.payload) {
          item.count++;
        }
        return item;
      });
      return {
        ...state,
        orders: itemCheck,
      };
    }
    case MINUS_COUNT_ORDER: {
      const itemCheck = state.orders.map(item => {
        if (item.id === action.payload) {
          item.count--;
        }
        return item;
      });
      return {
        ...state,
        orders: itemCheck,
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
