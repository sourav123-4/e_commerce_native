export const ADD_ORDERS = 'ADD_ORDERS';
export const REMOVE_ORDERS = 'REMOVE_ORDERS';
export const ADD_COUNT_ORDER = 'ADD_COUNT_ORDER';
export const MINUS_COUNT_ORDER = 'MINUS_COUNT_ORDER';
export const addOrder = item => dispatch => {
  dispatch({
    type: ADD_ORDERS,
    payload: item,
  });
};

export const removeOrders = id => dispatch => {
  dispatch({
    type: REMOVE_ORDERS,
    payload: id,
  });
};

export const addCountOrder = id => dispatch => {
  dispatch({
    type: ADD_COUNT_ORDER,
    payload: id,
  });
};

export const minusCountOrder = id => dispatch => {
  dispatch({
    type: MINUS_COUNT_ORDER,
    payload: id,
  });
};
