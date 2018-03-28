import {
  FETCH_FILTERED_INVENTORY
} from '../actions/types';

const INITIAL_STATE = {
  searched_inventory: []
}

export default (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case FETCH_FILTERED_INVENTORY: {
      return { ...state, searched_inventory: action.payload }
    }
  }

  return state;
}