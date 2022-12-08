export const ADD_ORDERS = 'ADD_ORDERS';
export const REMOVE_ORDERS = 'REMOVE_ORDERS';
export const addOrder = item => dispatch => {
  dispatch({
    type: ADD_ORDERS,
    payload: item,
  });
};

export const removeOrders = item => dispatch => {
  dispatch({
    type: REMOVE_ORDERS,
    payload: item,
  });
};
