import {
  FETCH_ITEM
} from '../actions/types';

const INITIAL_STATE = {
  queriedItem : {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ITEM: {
      return {...state, queriedItem: action.payload}
    }
    default: {
      return state;
    }
  }
}