//import axios from 'axios';
//import { API_URL } from '../config';

/* selectors */
export const getOrder = ({ order }) => order.data;
export const getProducts = ({ order }) => order.data.products;
export const getRequest = ({ order }) => order.request;

/* action name creator */
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_REQUEST = createActionName('START_REQUEST');
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const REQUEST_ERROR = createActionName('REQUEST_ERROR');

/* action creators */
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const requestError = payload => ({ payload, type: REQUEST_ERROR });

/* thunk creators */

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
