export const initialState = {
  products: {
    data: [],
    current: null,
    request: {
      type: '',
      active: false,
      error: false,
    },
  },
  orders: {
    data: [],
    request: {
      type: '',
      active: false,
      error: false,
    },
  },
};