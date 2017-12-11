// reducers.js
import {
  combineReducers,
} from 'redux';

export const counter = (state = { count: 0 }, action) => {  
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return { count: action.counter.count + 1 };
    default:
      return state;
  }
};

export const reducers = combineReducers({  
  counter
});