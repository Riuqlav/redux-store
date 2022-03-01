import { ActionTypes } from "../constants/action-Types";

const initialState = {
  products: [
    {
      id: 1,
      title: "Me",
      category: "coder",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
