import axios from 'axios';
import { API_URL } from '../config';

/* selectors */
export const getOrder = ({ order }) => order.data;
export const getProducts = ({ order }) => order.data.products;
export const getRequest = ({ order }) => order.request;
export const getAmount = ({ order }) => {
  let amount = 0;
  for(let product of order.data.products) {
    amount += product.amount;
  }
  return amount;
};

/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_REQUEST = createActionName('START_REQUEST');
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const INCREASE_AMOUNT = createActionName('INCREASE_AMOUNT');
const DECREASE_AMOUNT = createActionName('DECREASE_AMOUNT');
const ADD_COMMENT = createActionName('ADD_COMMENT');
const STORE_INPUT = createActionName('STORE_INPUT');
const ORDER_SAVED = createActionName('ORDER_SAVED');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');

/* action creators */
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const increaseAmount = payload => ({ payload, type: INCREASE_AMOUNT });
export const decreaseAmount = payload => ({ payload, type: DECREASE_AMOUNT });
export const addComment = payload => ({ payload, type: ADD_COMMENT });
export const storeInput = payload => ({ payload, type: STORE_INPUT });
export const orderSaved = payload => ({ payload, type: ORDER_SAVED });
export const requestError = payload => ({ payload, type: REQUEST_ERROR });

/* thunk creators */
export const sendOrder = (orderData) => {
  return async dispatch => {
    dispatch(startRequest('POST'));
    try {
      const res = await axios.post(`${API_URL}/orders`, orderData);
      dispatch(orderSaved(res.data));
    } catch(err) {
      dispatch(requestError(err.message || true));
    }
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case START_REQUEST: {
      return {
        ...statePart,
        request: {
          type: action.payload,
          active: true,
          error: false,
        },
      };
    }
    case ADD_PRODUCT: {
      const newProduct = !statePart.data.products.some(p => p.id === action.payload.id);
      if (newProduct) {
        return {
          ...statePart,
          data: {
            ...statePart.data,
            products: [...statePart.data.products, action.payload],
          },
        };
      } else {
        const newProducts = statePart.data.products.map(p => p.id === action.payload.id ? ({ ...p, amount: p.amount + action.payload.amount }) : p);
        return {
          ...statePart,
          data: {
            ...statePart.data,
            products: newProducts,
          },
        };
      }
    }
    case REMOVE_PRODUCT: {
      const newProducts = statePart.data.products.filter(p => p.id !== action.payload);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProducts,
        },
      };
    }
    case INCREASE_AMOUNT: {
      const newProducts = statePart.data.products.map(p => p.id === action.payload && p.amount < 10 ? ({ ...p, amount: p.amount + 1 }) : p);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProducts,
        },
      };
    }
    case DECREASE_AMOUNT: {
      const newProducts = statePart.data.products.map(p => p.id === action.payload && p.amount > 1 ? ({ ...p, amount: p.amount - 1 }) : p);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProducts,
        },
      };
    }
    case ADD_COMMENT: {
      const newProducts = statePart.data.products.map(p => p.id === action.payload.id ? { ...p, comment: action.payload.comment } : p);
      return {
        ...statePart,
        data: {
          ...statePart.data,
          products: newProducts,
        },
      };
    }
    case STORE_INPUT: {
      return {
        ...statePart,
        data: {
          ...statePart.data,
          ...action.payload,
        },
      };
    }
    case ORDER_SAVED: {
      return {
        data: {
          products: [],
          firstName: '',
          lastName: '',
          email: '',
          address: '',
        },
        request: {
          ...statePart.request,
          active: false,
          error: false,
        },
      };
    }
    case REQUEST_ERROR: {
      return {
        ...statePart,
        request: {
          ...statePart.request,
          acitve: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
