import { FILTER_BOOK } from '../actions/types';

const filterReducer = (state = false, action) => {
  switch (action.type) {
    case FILTER_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
